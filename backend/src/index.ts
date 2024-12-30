import { Hono } from 'hono'
import { authRouter } from './routes/auth'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { blogRouter } from './routes/blog'

export const app = new Hono()

app.route('/api/v1/auth', authRouter);
app.route('/api/v1/blog', blogRouter);

export default app
