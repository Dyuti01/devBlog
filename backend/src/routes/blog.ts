import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { userauth } from "../middlewares/auth";
import { postInput, updatePostInput } from "../../../common/src/index";
import { setCookie } from "hono/cookie";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.get("/check", userauth, (c)=>{
  return c.json({messsage:"LoggedInUser"});
});

blogRouter.get("/myBlogs", userauth, async (c) => {
  try {
    // const prisma = prismaClient(c);
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    //@ts-ignore
    // const { id, user } = c.info;
    const { id, user } = c.get("info");

    const blogs = await prisma.post.findMany({
      where: {
        authorId: id,
      },
      select: {
        id:true,
        content: true,
        published: true,
        createdAt:true,
        updatedAt:true,
        title: true,
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return c.json(blogs);
  } catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);
  }
});
blogRouter.get("/blogs/:blogId", userauth, async (c) => {
  try {
    // const prisma = prismaClient(c);
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    //@ts-ignore
    // const { id, user } = c.info;
    // const { id, user } = c.get("info");
    const blog = await prisma.post.findUnique({
      where: {
        id: c.req.param().blogId,
      },
      select: {
        id:true,
        content: true,
        published: true,
        createdAt:true,
        updatedAt:true,
        title: true,
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return c.json({blog});

  } catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);
  }
});

blogRouter.get("/bulk", userauth, async (c) => {
  try {
    // const prisma = prismaClient(c);
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    //@ts-ignore
    // const { id, user } = c.info;
    // const { id, user } = c.get("info");

    const blogs = await prisma.post.findMany({
      where:{
      
      },
      select: {
        id:true,
        content: true,
        published: true,
        createdAt:true,
        updatedAt:true,
        title: true,
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return c.json(blogs);
  } catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);
  }
});

blogRouter.post("/createPost", userauth, async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success, error } = postInput.safeParse(body);
    if (!success) {
      throw new Error(error.message);
    }

    // @ts-ignore
    // const {id, user} = c.info;
    const { id, user } = c.get("info");
    const { content, title } = body;

    const blog = await prisma.post.create({
      data: {
        content,
        title,
        authorId: id,
      },
    });

    if (!content || !title) {
      throw new Error("Something is missing.");
    }

    return c.json({ message: "New post created." });
  } catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);
  }
});

blogRouter.put("/:id", userauth, async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    // @ts-ignore
    // const {updateData, id} = c.info;
    const { updateData, id } = c.get("info");

    const { success, error } = updatePostInput.safeParse(updateData);
    if (!success) {
      throw new Error(error.message);
    }

    const postId: string = c.req.param().id;

    const update = await prisma.post.update({
      where: {
        id: postId,
      },
      data: updateData,
    });
    return c.json({ message: "Updated successfully" });
  } catch (err: any) {
    const message = err.message;
    c.status(400);
    return c.text("error: " + message);
  }
});
