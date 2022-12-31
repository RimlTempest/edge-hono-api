import { Hono } from "hono";
import { api } from "./v1/index";

export const route = new Hono();
route.route("/api", api);