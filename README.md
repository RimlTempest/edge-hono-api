# edge,Worker / Hono 勉強用

エッジサーバーでスクリプトを実行させるための勉強用です。

Cloudflare Workers は Service Worker 由来。
Cloudflare Workers は Service Workers を踏襲した API でアプリを作ります。
[Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## Cloudflare Workers で出来ること

edge とはエッジサーバーにてコードを実行するもので、オリジンサーバーに到達する前に実行されます。   
いわゆる中間処理を行う場合に用いられます。(例: MSW)

下記のようなことが可能です。

- キャッシュコンテンツに対する独自コントロール
- User-Agent ごとにリダイレクト
- 全く異なる 2 つのバックエンド間で A/B テストを実現
- 独自のアクセスフィルタリング
- 独自のフェイルオーバーの実装
- ログの収集

## Hono とは

Cloudflare Workers に特化した Web アプリを作るためのフレームワークです。
Service Workers を踏襲した API でアプリなので、機能としてメインで使えそうなものは

- Fetch
- FetchEvent
- Request
- Response
- URL

くらいしかありません。

もちろん外部モジュールを使うことが出来ますが、node.js 依存のモジュールは動きません。
モジュール自体もだいぶ動きません。

そこで、上記のみの API を使って、依存ゼロの軽いフレームワークがあったらいいなという考えのもと作成されているものです。

## 実行方法

実行

```bash
yarn start
```

cloudflare にデプロイ

```bash
yarn deploy
```

ローカルで実行（開発）

```bash
yarn dev
```

テスト

```bash
yarn test
```
