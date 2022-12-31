import { api } from "./index";

describe("API エンドポイントテスト", () => {
  test("Hello API テスト", async () => {
    const res = await api.fetch(new Request("http://localhost:8787/api/v1/"));
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body).toEqual("Hello 🔥");
  });

  test("QR API テスト", async () => {
    const res = await api.fetch(new Request("http://localhost:8787/api/v1/qr/filename.png?text=test&type=png"));
    expect(res.status).toBe(200);
  });
});