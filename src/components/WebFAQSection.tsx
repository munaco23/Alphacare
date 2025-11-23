import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const WebFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.99 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 28 },
    },
  };

  const faqs: FAQ[] = [
    {
      question: 'How long does implementation take?',
      answer:
        'Implementation typically takes 2-4 weeks depending on your hospital size and requirements. Our team provides full support throughout the process.',
    },
    {
      question: 'Is training provided for staff?',
      answer:
        'Yes! We provide comprehensive training for all staff members, including on-site sessions, video tutorials, and 24/7 support documentation.',
    },
    {
      question: 'Can the system integrate with existing software?',
      answer:
        'Absolutely. H4Health integrates seamlessly with most EHR systems, billing software, and other healthcare management tools through our API.',
    },
    {
      question: 'What security measures are in place?',
      answer:
        'We use enterprise-grade encryption, regular security audits, and are fully HIPAA compliant. All data is backed up daily with 99.99% uptime guarantee.',
    },
    {
      question: 'Is there a mobile app available?',
      answer:
        'Yes, we offer native iOS and Android apps for both staff and patients, allowing access to key features on the go.',
    },
  ];

  return (
    <section id="faqs" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about H4Health
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="space-y-4 will-change-transform transform-gpu"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebFAQSection;
