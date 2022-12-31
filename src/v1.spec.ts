import { app } from "./index";

describe("API エンドポイントテスト", () => {
  const req = {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }

  test("[正常系] GET / helloAPI テスト", async () => {
    const res: Response = await app.request('http://localhost:8787/api/v1', req)
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toEqual({"message": "Hello 🔥"});
  });

  test("[異常系]GET / API テスト", async () => {
    const res: Response = await app.request("http://localhost:8787/",req);
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(404);
  });

  test("[異常系]GET /api API テスト /api/", async () => {
    const res: Response = await app.request("http://localhost:8787/api/",req);
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(404);
  });

  test("[異常系]GET /api API テスト api/v1/sss", async () => {
    const res: Response = await app.request("http://localhost:8787/api/v1/sss",req);
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(404);
  });

  test("[異常系]GET /api API テスト api/v1/", async () => {
    const res: Response = await app.request("http://localhost:8787/api/v1/",req);
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(404);
  });

  test("[正常系] GET /qr API テスト", async () => {
    const res: Response = await app.request("http://localhost:8787/api/v1/qr/filename.png?text=test&type=png",req);
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(201);
  });

  test("[異常系]GET /qr API テスト no query", async () => {
    const res: Response = await app.request("http://localhost:8787/api/v1/qr/",req);
    expect(res.headers.get('x-powered-by')).toBe('Hono');
    expect(res.status).toBe(500);
  });
});