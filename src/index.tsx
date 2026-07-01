import { Hono } from 'hono'

type Bindings = {
  ASSETS: { fetch: typeof fetch }
}

const app = new Hono<{ Bindings: Bindings }>()

// Serve static assets (index.html etc.) via Cloudflare Pages' built-in ASSETS binding
app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
