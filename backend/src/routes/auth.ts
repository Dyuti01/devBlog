import { Hono } from "hono";
import { prismaClient } from "../utils/prismaClient";
import { validateSignUpData } from "../utils/validation";
import bcrypt from "bcrypt";
import * as crypto from "node:crypto";
import { HTTPException } from "hono/http-exception";
import * as HonoCookie from 'hono/cookie';
import { decode, sign, verify } from 'hono/jwt'
import z from 'zod'
import { signUpInput, signInInput } from "../../../common/src/index";

export const authRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

authRouter.post("/signup", async (c) => {
  try {
    const prisma = prismaClient(c);
    const body = await c.req.json();

    const {success, error} = signUpInput.safeParse(body);
    if (!success){
      throw new Error(error.message)
    }
    validateSignUpData(c);

    const { firstName, lastName, email, password } = body;

    const salt = crypto.randomBytes(12).toString("hex");
    const hashedPassword = crypto
      .createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    const user = await prisma?.user.create({
      data: {
        email,
        salt,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return c.json({ status: `Congratulations ${firstName}. New User created` });
  } catch (err: any) {
    const message = err.message;
    c.status(403);
    return c.text(message);
  }
});

authRouter.post("/signin", async (c) => {
  try {
    const prisma = prismaClient(c);
    const body = await c.req.json();
    const {success, error} = signInInput.safeParse(body);
    if (!success){
      throw new Error(error.message)
    }
    const { userEmail, password } = body;
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials. No user present.",{cause:"No user present"});
    }

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedPassword = crypto
      .createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashedPassword === userProvidedPassword) {

      const token = await sign({id:user.id}, c.env.JWT_SECRET);
      await HonoCookie.setSignedCookie(c, "token", token, c.env.JWT_SECRET, {maxAge:3600});  // maxAge is in 3600
      return c.json({
        message: `Welcome back ${user.firstName}. Logged in succesfully.`,
      });
    }
    
    return c.json({ message: "Invalid credentials" });
  } catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.json({error: message});
  }
});
