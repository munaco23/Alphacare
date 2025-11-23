import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Shield, Truck, Clock, Star } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

// Animation variants for smoother, coordinated motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 28 }
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    variants={itemVariants}
    viewport={{ once: false, amount: 0.25 }}
    whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 350, damping: 24 } }}
    className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 will-change-transform transform-gpu"
    transition={{ delay }}
  >
    <motion.div
      whileHover={{ rotate: 6, scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 will-change-transform transform-gpu"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const WebFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      title: 'Real-time Monitoring',
      description:
        'Track patient vitals and hospital operations in real-time with advanced analytics and instant alerts.',
      delay: 0.1,
    },
    {
      icon: <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      title: 'Staff Management',
      description:
        'Efficiently manage schedules, assignments, and performance tracking for all healthcare professionals.',
      delay: 0.2,
    },
    {
      icon: <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      title: 'HIPAA Compliant',
      description:
        'Enterprise-grade security with full HIPAA compliance to protect sensitive patient information.',
      delay: 0.3,
    },
    {
      icon: <Truck className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      title: 'Emergency Response',
      description:
        'Streamlined emergency protocols with automated dispatch and resource allocation systems.',
      delay: 0.4,
    },
    {
      icon: <Clock className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      title: 'Appointment System',
      description:
        'Smart scheduling with automated reminders, reducing no-shows and optimizing resource utilization.',
      delay: 0.5,
    },
    {
      icon: <Star className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      title: 'Quality Care',
      description:
        'Comprehensive quality metrics and patient feedback systems to continuously improve care delivery.',
      delay: 0.6,
    },
  ];

  return (
    <section
      id="features"
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
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your hospital efficiently and provide exceptional patient
            care
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 will-change-transform transform-gpu"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebFeaturesSection;
