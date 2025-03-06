import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">
          404 - ページが見つかりません
        </h2>
        <p className="text-brand-gray mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link href="/" className="btn btn-primary">
          トップページに戻る
        </Link>
      </div>
    </div>
  );
} 