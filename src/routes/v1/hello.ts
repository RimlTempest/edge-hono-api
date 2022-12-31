import { Hono } from "hono";

const hello = new Hono();
hello.get("/", (c) => c.text("Hello 🔥"));

export default hello;