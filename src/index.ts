import { Hono } from "hono";
import { etag } from 'hono/etag'
import { poweredBy } from 'hono/powered-by'
import { prettyJSON } from 'hono/pretty-json'
import { route } from "./routes/";

const app = new Hono();

app.route("/", route);
// With options: prettyJSON({ space: 4 })
app.use('*', prettyJSON())
// Mount Builtin Middleware
app.use('*', poweredBy())
app.use('/etag/*', etag())

// root
app.get('/', (c) => c.json({
  hello_world: {
    hono: '🔥',
    name: 'Edge Hono Api',
    description: 'Edge、Hono勉強用のAPIです',
    author: 'https://twitter.com/Fande4d',
    license: 'MIT',
  }
}, 200, { 'Content-Type': 'application/json' }))

// Custom Not Found Message
app.notFound((c) => {
  return c.text('Custom 404 Not Found', 404)
})

// Error handling
app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})

export default app;