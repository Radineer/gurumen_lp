'use client';

import { motion } from 'framer-motion';
import {
  CameraIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  CurrencyYenIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: CameraIcon,
    title: 'SNSスキルが身につく',
    description: '実践的なSNS運用スキルを習得',
    points: [
      '写真・動画撮影のテクニック',
      'コンテンツ企画力',
      'ハッシュタグ戦略',
    ],
  },
  {
    icon: BuildingStorefrontIcon,
    title: 'PRプロジェクトに参加',
    description: '地域密着型のPR活動を経験',
    points: [
      '店舗取材プロジェクト',
      'イベント企画運営',
      'メディア掲載実績',
    ],
  },
  {
    icon: UserGroupIcon,
    title: '仲間との出会い',
    description: '同じ志を持つ仲間とつながる',
    points: [
      '定期的な交流会',
      'オンラインコミュニティ',
      '異業種交流',
    ],
  },
  {
    icon: CurrencyYenIcon,
    title: '副業としても活用可能',
    description: 'スキルを活かした収入機会',
    points: [
      'PR案件の紹介',
      'インフルエンサー活動',
      'コンサルティング',
    ],
  },
];

const animation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const BenefitsSection = () => {
  return (
    <section className="py-section bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          参加するメリット
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          あなたの成長をサポートする4つの特徴
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              className="bg-brand-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-brand-gray mb-4">{benefit.description}</p>
              <ul className="space-y-2">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-center text-brand-dark">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-12"
        >
          <a href="#pricing" className="btn btn-primary">
            料金プランを見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 