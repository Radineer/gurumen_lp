'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { handleSubmit } from '@/app/actions';

const animation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ContactSection = () => {
  return (
    <section className="py-section bg-brand-light" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          お問い合わせ
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          ご質問・ご相談はお気軽にお問い合わせください
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6">お問い合わせ方法</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">メールでのお問い合わせ</p>
                  <p className="text-brand-gray mt-1">
                    24時間受付中です。内容を確認次第、担当者よりご連絡させていただきます。
                  </p>
                  <a
                    href="mailto:info@gurumen.com"
                    className="text-brand-orange hover:underline mt-2 inline-block"
                  >
                    info@gurumen.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">お電話でのお問い合わせ</p>
                  <p className="text-brand-gray mt-1">
                    平日 10:00〜18:00 にて受付しております。
                  </p>
                  <a
                    href="tel:0300000000"
                    className="text-brand-orange hover:underline mt-2 inline-block"
                  >
                    03-0000-0000
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-6">お問い合わせフォーム</h3>
            
            <form action={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  件名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  送信する
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 