import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

// Variants for coordinated animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
};

const WebPricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '$499',
      features: ['Up to 50 beds', 'Basic analytics', 'Email support', '99.5% uptime'],
    },
    {
      name: 'Professional',
      price: '$999',
      features: ['Up to 200 beds', 'Advanced analytics', 'Priority support', '99.9% uptime'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited beds', 'Custom analytics', '24/7 support', '99.99% uptime'],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your healthcare facility
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 will-change-transform transform-gpu"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
              className={`p-6 md:p-8 rounded-2xl ${
                plan.featured
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg'
              }`}
            >
              <h3
                className={`text-xl md:text-2xl font-bold mb-2 ${
                  plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}
              >
                {plan.name}
              </h3>
              <div
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}
              >
                {plan.price}
                {plan.price !== 'Custom' && (
                  <span className="text-base font-normal opacity-70">/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.featured ? 'text-white' : 'text-cyan-500'
                      }`}
                    />
                    <span
                      className={`text-sm md:text-base ${
                        plan.featured
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-white text-cyan-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebPricingSection;
