'use client';

import { motion } from 'framer-motion';
import {
  VideoCameraIcon,
  UserGroupIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  BuildingStorefrontIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

const activities = {
  online: {
    title: 'オンライン活動',
    description: '場所を問わず参加できるオンラインでの活動です',
    items: [
      {
        icon: VideoCameraIcon,
        title: 'オンライン勉強会',
        description: 'SNSマーケティングやフォトグラフィーの基礎を学ぶ',
        schedule: '毎週水曜日 20:00〜21:30',
      },
      {
        icon: ChatBubbleLeftRightIcon,
        title: 'コミュニティチャット',
        description: '24時間いつでも相談・情報交換が可能',
        schedule: '24時間利用可能',
      },
      {
        icon: PresentationChartLineIcon,
        title: 'オンラインセミナー',
        description: '著名なインフルエンサーやマーケターによる特別セミナー',
        schedule: '月1回開催',
      },
    ],
  },
  offline: {
    title: 'オフライン活動',
    description: '実践的なスキルを身につける対面での活動です',
    items: [
      {
        icon: CameraIcon,
        title: 'フォトツアー',
        description: 'プロカメラマンと一緒に撮影テクニックを学ぶ',
        schedule: '月1回開催',
      },
      {
        icon: UserGroupIcon,
        title: '交流会',
        description: 'メンバー同士の情報交換と人脈作り',
        schedule: '2ヶ月に1回開催',
      },
      {
        icon: BuildingStorefrontIcon,
        title: '店舗取材',
        description: '実際の取材・PR活動を体験',
        schedule: '不定期開催',
      },
    ],
  },
};

const animation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const ActivitiesSection = () => {
  return (
    <section className="py-section bg-white" id="activities">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          活動内容
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          オンライン・オフラインでの多彩な活動
        </motion.p>

        <div className="mt-12 space-y-12">
          {Object.entries(activities).map(([key, category], categoryIndex) => (
            <div key={key}>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animation}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="text-xl font-bold mb-4"
              >
                {category.title}
              </motion.h3>
              
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animation}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.1 }}
                className="text-brand-gray mb-8"
              >
                {category.description}
              </motion.p>

              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animation}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + index * 0.1 + 0.2,
                    }}
                    className="bg-brand-light rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <item.icon className="w-8 h-8 text-brand-orange mb-4" />
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-brand-gray mb-4">{item.description}</p>
                    <div className="text-sm text-brand-orange font-medium">
                      開催：{item.schedule}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#pricing" className="btn btn-primary">
            活動に参加する
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 