import { Hono } from "hono";
import { hello } from "./hello";
import { qrCodeApi } from "./qrCode";

export const api = new Hono();

api.route("/v1", hello);
api.route("/v1", qrCodeApi);