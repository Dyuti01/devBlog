import { HonoRequest } from "hono";
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'
import { decode, sign, verify } from "hono/jwt";
import { prismaClient } from "../utils/prismaClient";

export const userauth = async (c: any, next: any) => {
  try {
    const prisma = prismaClient(c);
    const cookie:any = getCookie(c);

    const { token } = cookie;
    // if (!token) {
    //   throw new Error("Invalid token!");
    // }

    if (c.req.method === "PUT") {
      // c.info = { updateData: await c.req.json() };
      c.set("info", {updateData: await c.req.json()})
    }
    const decoded = await verify(token, c.env.
      JWT_SECRET
    );

    const dataObj = JSON.parse(JSON.stringify(decoded));

    const { id } = dataObj;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error("User not present!");
    }

    // c.info = { id, user, ...c.info };
    c.set("info", {id, user, ...c.get("info")});


    await next();
  } catch (err: any) {
    const message = err.message;
    c.status(401);
    return c.json({ error: "Invalid credentials!", message });
  }
};

// const myText = new TextEncoder().encode('Hello world!');

// const myDigest = await crypto.subtle.digest(
//   {
//     name: 'SHA-256',
//   },
//   myText // The data you want to hash as an ArrayBuffer
// );
// const hexString = [...new Uint8Array(myDigest)]
// .map(b => b.toString(16).padStart(3, '0'))
// .join('')

// const myText1 = new TextEncoder().encode('Hello world!');

//   const myDigest1 = await crypto.subtle.digest(
//     {
//       name: 'SHA-256',
//     },
//     myText // The data you want to hash as an ArrayBuffer
//   );
//   const hexString1 = [...new Uint8Array(myDigest1)]
//   .map(b => b.toString(16).padStart(3, '0'))
//   .join('')


//   if (hexString===hexString1){

//   }


// Using headers
  // const header:any = c.req.header("Authorization")?.split(' ')[1]

  // const decoded = await verify(header.toString(), c.env.JWT_SECRET);

  // next();