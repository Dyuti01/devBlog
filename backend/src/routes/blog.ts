import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { userauth} from "../middlewares/auth";
import { postInput, updatePostInput } from '../../../common/src/index'

export const blogRouter = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

blogRouter.get("/", userauth, async (c) => {
  try{
  // const prisma = prismaClient(c);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  //@ts-ignore
  // const { id, user } = c.info;
  const { id, user } = c.get("info");

  const blogs = await prisma.post.findMany({
    where:{
      authorId:id
    }
  })

  return c.json(blogs);
  }
  catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);

  }
});
blogRouter.get("/bulk", async (c) => {
  try{
  // const prisma = prismaClient(c);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  //@ts-ignore
  // const { id, user } = c.info;
  // const { id, user } = c.get("info");

  const blogs = await prisma.post.findMany()

  return c.json(blogs);
  }
  catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);

  }
});


blogRouter.post("/", userauth, async (c) => {
  try{
      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const {success, error} = postInput.safeParse(body);
  if (!success){
    throw new Error(error.message)
  }

  // @ts-ignore
  // const {id, user} = c.info;
  const {id, user} = c.get("info");
  const {content, title} = body;

  const blog = await prisma.post.create({
    data:{
      content,
      title,
      authorId:id,
    }
  })

  if (!content || !title){
    throw new Error("Something is missing.")
  }

  return c.json({ message: "New post created." });

  }catch (err: any) {
    const message = err.message;
    console.log(err)
    c.status(400)
    return c.text("error: "+message);
  }

});


blogRouter.put("/:id", userauth, async (c) => {
  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // console.log(c.info);

    // @ts-ignore
    // const {updateData, id} = c.info;
    const {updateData, id} = c.get("info");

    const {success, error} = updatePostInput.safeParse(updateData);
    if (!success){
      throw new Error(error.message)
    }
  

  
    const postId:string = c.req.param().id;
  
    const update = await prisma.post.update({
      where:{
        id:postId
      },
      data:updateData
    });
  return c.json({ message: "Updated successfully" });
    
  }
  catch (err: any) {
    const message = err.message;
    c.status(400)
    return c.text("error: " + message);
  }
});
