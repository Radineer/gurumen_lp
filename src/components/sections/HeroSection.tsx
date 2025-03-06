'use client';

import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-light overflow-hidden">
      {/* メインコンテンツ */}
      <div className="relative container mx-auto px-4 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-brand-dark"
        >
          地元の魅力をSNSで発信！
          <br />
          <span className="text-brand-orange">
            あなたもジモグル推し部で地域を盛り上げよう
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-gray mb-12"
        >
          グルメ好き × インフルエンサー志望 × 地元愛でつながるコミュニティ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn btn-primary">
            今すぐ参加する
          </a>
          <a href="#about" className="btn btn-secondary">
            無料体験はこちら
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 