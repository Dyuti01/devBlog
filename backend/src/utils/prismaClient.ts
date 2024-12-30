import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prismaClient = (c:any)=>{
  try{
      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return prisma;
  }
  catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.json({ error: message });
  }
}