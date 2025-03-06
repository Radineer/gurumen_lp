'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

const stories = [
  {
    name: '田中 美咲',
    age: 28,
    occupation: '会社員（副業）',
    image: '/images/success-1.jpg',
    title: 'SNSフォロワー3,000人達成！',
    description: '仕事と両立しながら、地元のカフェ巡りを発信。PR案件も獲得できました。',
    achievements: [
      'インスタグラムフォロワー3,000人達成',
      '月間PR案件2-3件の依頼',
      '副収入として月3-5万円を実現',
    ],
    duration: '活動期間：6ヶ月',
  },
  {
    name: '山田 健一',
    age: 35,
    occupation: '飲食店経営',
    image: '/images/success-2.jpg',
    title: '自店の集客力が大幅アップ！',
    description: '学んだSNSスキルを活かして自店の魅力を発信。新規顧客の獲得に成功。',
    achievements: [
      '週末の来店者数が1.5倍に増加',
      'インスタグラムでの予約率30%向上',
      '近隣店舗とのコラボ企画実現',
    ],
    duration: '活動期間：1年',
  },
  {
    name: '佐藤 優子',
    age: 42,
    occupation: '主婦',
    image: '/images/success-3.jpg',
    title: '地域活性化に貢献！',
    description: '地元の隠れた名店を発信することで、地域の魅力再発見に貢献。',
    achievements: [
      '地域情報サイトでのライター採用',
      '地元メディアでの取材実績',
      '商店街イベントの企画運営',
    ],
    duration: '活動期間：8ヶ月',
  },
];

const animation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const SuccessStoriesSection = () => {
  return (
    <section className="py-section bg-white" id="success-stories">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          成功事例
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          実際に活躍している会員の声をご紹介
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animation}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              className="bg-brand-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">{story.name}</h3>
                <p className="text-brand-gray text-sm">
                  {story.age}歳 / {story.occupation}
                </p>
              </div>

              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-5 h-5 text-brand-yellow"
                  />
                ))}
              </div>

              <h4 className="font-bold text-lg mb-2 text-brand-orange">
                {story.title}
              </h4>
              <p className="text-brand-gray mb-4">{story.description}</p>

              <ul className="space-y-2 mb-4">
                {story.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-brand-gray text-right">
                {story.duration}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary">
            あなたも始めてみませんか？
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 