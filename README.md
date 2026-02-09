# Afternoon Tea Times - アフタヌーンティー専用情報メディア

全国のアフタヌーンティースポットを紹介する情報メディアサイト

## 🌟 主な機能

- 📰 **記事一覧** - アフタヌーンティーの情報を分かりやすく表示
- 🔍 **検索機能** - キーワードで記事を検索
- 🏷️ **カテゴリーフィルター** - カテゴリーごとに記事を絞り込み
- ⭐ **評価・レビュー** - 各スポットの評価とレビュー表示
- 📍 **エリア情報** - 地域別のスポット情報
- 🎨 **レスポンシブデザイン** - モバイルフレンドリーなUI

## 🛠️ 使用技術

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **画像**: Next/Image (最適化)

## 🚀 セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境での起動
npm start
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## 📂 プロジェクト構造

```
afternoon-tea-media/
├── app/
│   ├── page.tsx          # メインページ
│   ├── layout.tsx        # レイアウト
│   └── globals.css       # グローバルスタイル
├── components/
│   ├── ArticleCard.tsx       # 記事カードコンポーネント
│   ├── SearchBar.tsx         # 検索バーコンポーネント
│   └── CategoryFilter.tsx    # カテゴリーフィルター
└── public/               # 静的ファイル・画像
```

## 💡 今後の拡張予定

- CMSとの連携（Contentful / Sanity）
- 記事詳細ページ
- ユーザーレビュー投稿機能
- お気に入り機能
- SNS共有機能
- 地図表示機能
- 予約システム連携

## 🎯 ターゲット

- アフタヌーンティー愛好家
- 特別な日のお祝いを計画している人
- 優雅なティータイムを楽しみたい人

## 📄 ライセンス

MIT License

---

© 2024 Inkrement Inc.
