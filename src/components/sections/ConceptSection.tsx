'use client';

import { motion } from 'framer-motion';
import { HeartIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: HeartIcon,
    title: '地元を盛り上げたい想い',
    description: '地域に根ざした情報発信で、隠れた魅力を再発見します。',
  },
  {
    icon: AcademicCapIcon,
    title: 'グルメ＆インフルエンサーの掛け合わせ',
    description: '食べ歩き・料理好きが、撮影や編集のスキルを磨きます。',
  },
  {
    icon: UserGroupIcon,
    title: '"推し"をみんなで盛り上げる',
    description: '好きなお店・メニューを互いに応援し合うコミュニティです。',
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

export const ConceptSection = () => {
  return (
    <section className="py-section bg-white" id="concept">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="section-title"
        >
          ジモグル推し部とは？
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={1}
          className="section-subtitle"
        >
          地元のお店やグルメをSNSで発信する、新しいカタチのコミュニティ
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              custom={index + 2}
              className="bg-brand-light rounded-xl p-6 text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-brand-orange" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-brand-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 