import { motion } from 'framer-motion';

const PharmacyAboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              About <span className="text-cyan-600">PharmaCare</span>
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            PharmaCare is a product of MINDSPIRE, a leading healthcare technology company dedicated to
            revolutionizing pharmacy management.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            Our mission is to empower pharmacies with cutting-edge technology that simplifies operations,
            improves patient care, and drives business growth.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow">
              <div className="text-3xl md:text-4xl font-extrabold text-cyan-600">10K+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Active Pharmacies</div>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow">
              <div className="text-3xl md:text-4xl font-extrabold text-cyan-600">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Uptime SLA</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
            alt="Pills"
            className="rounded-2xl shadow-lg object-cover w-full h-40 md:h-48"
          />
          <img
            src="https://images.unsplash.com/photo-1615485737651-6d248d1f07b8?q=80&w=800&auto=format&fit=crop"
            alt="Pharmacy tools"
            className="rounded-2xl shadow-lg object-cover w-full h-40 md:h-48"
          />
          <img
            src="https://images.unsplash.com/photo-1584714268709-c3dd91b9d053?q=80&w=800&auto=format&fit=crop"
            alt="Healthcare desk"
            className="rounded-2xl shadow-lg object-cover w-full h-40 md:h-48"
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
            alt="Working on laptop"
            className="rounded-2xl shadow-lg object-cover w-full h-40 md:h-48"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PharmacyAboutSection;
