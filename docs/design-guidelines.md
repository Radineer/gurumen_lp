# ジモグル推し部 デザインガイドライン

## 1. ブランドアイデンティティ

### コアバリュー
- **地域密着**: 地元の魅力を引き出し、発信する
- **コミュニティ**: 人と人をつなぎ、共に成長する
- **プロフェッショナル**: SNSスキルとビジネス価値の向上

### デザインコンセプト
- **Warm & Friendly**: 温かみのある親しみやすいデザイン
- **Professional & Modern**: 信頼性と先進性を感じさせる要素
- **Community-Driven**: コミュニティの活力を表現

## 2. カラーシステム

### プライマリーカラー
```css
--primary-terracotta: #E67E5A;  /* メインアクション、強調 */
--primary-olive: #7C8B6F;       /* ナビゲーション、見出し */
```

### アクセントカラー
```css
--accent-orange: #FF6B6B;       /* CTA、重要な通知 */
--accent-yellow: #FFB84D;       /* ハイライト、アラート */
```

### ニュートラルカラー
```css
--neutral-white: #FFFFFF;       /* 背景、カード */
--neutral-light: #F5F5F5;      /* セクション背景 */
--neutral-gray: #666666;       /* 本文テキスト */
--neutral-dark: #333333;       /* 見出し、重要テキスト */
```

### 使用ガイドライン
- CTAボタン：アクセントカラーを使用
- セクション背景：ニュートラルカラーをベースに
- テキスト：視認性を考慮し、適切なコントラスト比を確保

## 3. タイポグラフィ

### 見出し（Headings）
```css
--heading-font: 'Noto Sans JP', sans-serif;
h1 { 
  font-size: 2.5rem;  /* 40px */
  font-weight: 700;
  line-height: 1.2;
}
h2 { 
  font-size: 2rem;    /* 32px */
  font-weight: 700;
  line-height: 1.3;
}
h3 { 
  font-size: 1.5rem;  /* 24px */
  font-weight: 600;
  line-height: 1.4;
}
```

### 本文（Body）
```css
--body-font: 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
body {
  font-size: 1rem;    /* 16px */
  font-weight: 400;
  line-height: 1.6;
}
```

### アクセントテキスト
```css
.highlight {
  font-weight: 600;
  color: var(--accent-orange);
}
```

## 4. スペーシングシステム

### 基本単位
```css
--spacing-unit: 8px;
--spacing-xs: calc(var(--spacing-unit) * 1);   /*  8px */
--spacing-sm: calc(var(--spacing-unit) * 2);   /* 16px */
--spacing-md: calc(var(--spacing-unit) * 3);   /* 24px */
--spacing-lg: calc(var(--spacing-unit) * 4);   /* 32px */
--spacing-xl: calc(var(--spacing-unit) * 6);   /* 48px */
```

### セクション間隔
- セクション間：`var(--spacing-xl)`
- 要素間：`var(--spacing-md)`
- テキスト行間：`var(--spacing-sm)`

## 5. コンポーネント

### ボタン
```css
.btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--accent-orange);
  color: var(--neutral-white);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--accent-orange);
  color: var(--accent-orange);
}
```

### カード
```css
.card {
  background: var(--neutral-white);
  border-radius: 12px;
  padding: var(--spacing-md);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## 6. グリッドシステム

### ブレイクポイント
```css
--breakpoint-sm: 576px;   /* スマートフォン */
--breakpoint-md: 768px;   /* タブレット */
--breakpoint-lg: 992px;   /* デスクトップ */
--breakpoint-xl: 1200px;  /* ワイドスクリーン */
```

### コンテナ
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
```

## 7. アニメーション

### トランジション
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### ホバーエフェクト
```css
.hover-effect {
  transition: transform var(--transition-normal);
}

.hover-effect:hover {
  transform: translateY(-2px);
}
```

## 8. イメージ処理

### 画像フィルター
```css
.image-filter {
  filter: brightness(1.05) contrast(1.1);
}
```

### アスペクト比
```css
.aspect-ratio-16-9 {
  aspect-ratio: 16/9;
  object-fit: cover;
}

.aspect-ratio-square {
  aspect-ratio: 1/1;
  object-fit: cover;
}
```

## 9. アクセシビリティ

### フォーカス表示
```css
:focus {
  outline: 3px solid var(--accent-orange);
  outline-offset: 2px;
}
```

### スクリーンリーダー対応
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

## 10. レスポンシブデザイン

### モバイルファースト
- 基本的にモバイルファーストで設計
- ブレイクポイントに応じて要素のサイズや配置を調整

### タッチターゲット
```css
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: var(--spacing-sm);
}
```

## 11. アイコン＆イラスト

### アイコンサイズ
```css
--icon-sm: 16px;
--icon-md: 24px;
--icon-lg: 32px;
```

### アイコンスタイル
- 線の太さ：2px
- 角の丸み：2px
- カラー：プライマリーまたはニュートラルカラー

---

## 実装時の注意事項

1. **パフォーマンス**
   - 画像の最適化（WebPフォーマットの使用）
   - 適切なキャッシュ戦略
   - 遅延読み込みの実装

2. **クロスブラウザ対応**
   - モダンブラウザ（Chrome, Firefox, Safari, Edge）での動作確認
   - フォールバックの実装

3. **保守性**
   - CSSカスタムプロパティの活用
   - モジュラーなコンポーネント設計
   - 命名規則の統一（BEM方式推奨）

---
最終更新日：2024年3月 