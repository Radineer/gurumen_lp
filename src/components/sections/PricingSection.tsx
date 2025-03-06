'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'ライトプラン',
    price: '2,000',
    description: 'SNSでの情報発信を始めたい方向け',
    features: [
      'オンラインコミュニティへの参加',
      '月1回の勉強会参加',
      '基礎的なSNSノウハウの提供',
    ],
    recommended: false,
  },
  {
    name: 'スタンダードプラン',
    price: '3,500',
    description: 'スキルアップを目指す方向け',
    features: [
      'ライトプランの全特典',
      'イベント優先参加権',
      '月2回の個別フィードバック',
      'PR案件の優先紹介',
    ],
    recommended: true,
  },
  {
    name: 'プレミアムプラン',
    price: '5,000',
    description: 'プロフェッショナルを目指す方向け',
    features: [
      'スタンダードプランの全特典',
      '月1回の個別コンサルティング',
      'プロモーション戦略の立案支援',
      '専属メンターのサポート',
    ],
    recommended: false,
  },
];

const animation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const PricingSection = () => {
  return (
    <section className="py-section bg-brand-light" id="pricing">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          料金プラン
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          あなたの目的に合わせて選べる3つのプラン
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              className={`bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all relative ${
                plan.recommended ? 'md:scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                    おすすめ
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-brand-gray mb-4">{plan.description}</p>
              <div className="text-3xl font-bold mb-6">
                ¥{plan.price}
                <span className="text-sm font-normal text-brand-gray">
                  /月（税込）
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full btn btn-primary">
                このプランを選択
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12 text-sm text-brand-gray"
        >
          <p>※ 解約は1ヶ月前までにお申し出ください</p>
          <p>※ プランは月単位で変更可能です</p>
        </motion.div>
      </div>
    </section>
  );
}; 