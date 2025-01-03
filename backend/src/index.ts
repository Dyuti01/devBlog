import { Hono } from 'hono'
import { authRouter } from './routes/auth'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { blogRouter } from './routes/blog'
import { cors } from "hono/cors";

export const app = new Hono()

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.route('/api/v1/auth', authRouter);
app.route('/api/v1/blog', blogRouter);

export default app
