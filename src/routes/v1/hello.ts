import { Hono } from "hono";

export const hello = new Hono();
const res = {
    message: "Hello 🔥",
}
hello.get("/", (c) => {
    c.header('Content-Type', 'application/json')
    return c.json(res)
});