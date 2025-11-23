import { motion } from 'framer-motion';
import { Hospital, Pill, FlaskConical, Stethoscope } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: Hospital,
      title: 'Hospital Management',
      description: 'Complete EHR, patient scheduling, billing, and resource management system.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Pill,
      title: 'Pharmacy Solutions',
      description: 'Inventory tracking, prescription management, and automated dispensing.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FlaskConical,
      title: 'Laboratory Systems',
      description: 'Sample tracking, test automation, and results management platform.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Stethoscope,
      title: 'Telemedicine',
      description: 'Virtual consultations, remote monitoring, and digital health records.',
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-cyan-500">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tailored software for every aspect of healthcare operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 70px rgba(6, 182, 212, 0.4)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 12,
                  boxShadow: "0 15px 40px rgba(6, 182, 212, 0.6)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <solution.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {solution.description}
              </p>
              <motion.div
                className="mt-6 text-cyan-500 dark:text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Learn More
                <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
