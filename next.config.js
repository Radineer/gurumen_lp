/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 静的エクスポートを有効化
  images: {
    unoptimized: true,  // GitHub Pagesでの画像表示のため
  },
  basePath: '/gurumen_lp',  // リポジトリ名に合わせて変更してください
  assetPrefix: '/gurumen_lp/', // リポジトリ名に合わせて変更
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig 