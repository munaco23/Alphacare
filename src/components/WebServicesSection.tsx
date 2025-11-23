import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Users, Shield } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

// Variants for coordinated motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 26 },
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    variants={itemVariants}
    transition={{ delay }}
    viewport={{ once: false, amount: 0.25 }}
    whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
    className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 will-change-transform transform-gpu"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  </motion.div>
);

const WebServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Heart className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: 'Patient Care Management',
      description: 'Comprehensive patient records, treatment plans, and care coordination tools',
      delay: 0.1,
    },
    {
      icon: <Activity className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: 'Clinical Analytics',
      description: 'Data-driven insights for better clinical decisions and outcomes',
      delay: 0.2,
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: 'Resource Planning',
      description: 'Optimize bed allocation, equipment, and staff deployment',
      delay: 0.3,
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: 'Compliance Management',
      description: 'Stay compliant with healthcare regulations and standards',
      delay: 0.4,
    },
  ];

  return (
    <section id="overview" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Integrated services designed to streamline every aspect of hospital management
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 md:gap-6 will-change-transform transform-gpu"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebServicesSection;
