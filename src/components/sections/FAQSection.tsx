'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '参加に特別なスキルは必要ですか？',
    answer: 'いいえ、特別なスキルは必要ありません。SNSの基本的な使い方が分かれば大丈夫です。初心者向けの勉強会も定期的に開催しています。'
  },
  {
    question: '仕事をしながらの参加は可能ですか？',
    answer: 'はい、多くのメンバーが仕事や育児と両立しながら参加しています。オンラインコミュニティを中心に、自分のペースで活動できる環境を整えています。'
  },
  {
    question: '途中解約は可能ですか？',
    answer: '月単位でのご利用となっており、いつでも解約可能です。解約は次回更新月の前月末までにお申し出ください。'
  },
  {
    question: 'オフラインイベントはどこで開催されますか？',
    answer: '主に東京都内での開催となります。月1回程度の頻度で、カフェ巡りや撮影会、交流会などを実施しています。'
  },
  {
    question: '機材の準備は必要ですか？',
    answer: 'スマートフォンがあれば始められます。カメラなどの機材は必須ではありませんが、活動を通じて必要性を感じた場合は、先輩メンバーにアドバイスを求めることができます。'
  },
  {
    question: 'プランの変更は可能ですか？',
    answer: 'はい、月単位でプランの変更が可能です。変更は次回更新月から適用されます。'
  }
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const FAQ = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUpVariants}
      custom={index}
      className="border-b border-brand-light last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="font-medium text-lg">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-brand-orange transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-brand-gray">
          {answer}
        </p>
      </div>
    </motion.div>
  );
};

export const FAQSection = () => {
  return (
    <section className="py-section bg-white" id="faq">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="section-title"
        >
          よくある質問
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={1}
          className="section-subtitle"
        >
          ご不明な点はお気軽にお問い合わせください
        </motion.p>

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index + 2}
            />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          custom={faqs.length + 2}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary">
            その他の質問はこちら
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 