import React, { useState } from 'react';
import { PharmacyIllustration } from '../components/PharmacyIllustration';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { TrendingUp, Package, BarChart3, CreditCard, ChevronRight, Users, Shield, Zap, Clock, FileText, Receipt, CalendarClock, Truck, Settings } from 'lucide-react';
import PharmacyAboutSection from '../components/PharmacyAboutSection';

const PharmacyPage: React.FC = () => {
  const features = [
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Increase Sales', description: 'Boost your pharmacy revenue with intelligent sales tracking and insights.' },
    { icon: <Package className="w-8 h-8" />, title: 'Manage Inventory', description: 'Real-time inventory with automated stock alerts and reorder points.' },
    { icon: <BarChart3 className="w-8 h-8" />, title: 'Analytics Dashboard', description: 'Comprehensive analytics for data-driven decisions.' },
    { icon: <CreditCard className="w-8 h-8" />, title: 'Secure Payments', description: 'PCI-compliant payments with multiple methods.' }
  ];

  const pricingPlans = [
    { name: 'Starter', price: '$49', period: '/month', features: ['Up to 1,000 products', 'Basic inventory', 'Sales reporting', 'Email support', '1 user'], popular: false },
    { name: 'Professional', price: '$99', period: '/month', features: ['Unlimited products', 'Advanced inventory', 'Analytics dashboard', 'Priority support', '5 users', 'API access'], popular: true },
    { name: 'Enterprise', price: '$199', period: '/month', features: ['Everything in Pro', 'Custom integrations', 'Dedicated manager', '24/7 phone support', 'Unlimited users', 'Custom training'], popular: false }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: '10,000+ Users', description: 'Trusted by pharmacies worldwide' },
    { icon: <Shield className="w-6 h-6" />, title: 'Secure & Compliant', description: 'HIPAA compliant and encrypted' },
    { icon: <Zap className="w-6 h-6" />, title: 'Fast Performance', description: 'Lightning-fast cloud platform' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', description: 'Always here to help you' }
  ];

  const easeOutBezier = [0.22, 1, 0.36, 1] as const;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutBezier } }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutBezier } }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutBezier } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOutBezier } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const [invOpen, setInvOpen] = useState<number | null>(null);
  const [anaOpen, setAnaOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 md:space-y-8">
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full shadow-lg">
                <span className="text-sm md:text-base font-medium text-cyan-700 dark:text-cyan-300">✨ Smart Pharmacy Suite</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Smart Pharmacy
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600">Management Software</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                All-in-one solution for pharmacies — streamline inventory, customers, analytics, and POS in one modern, secure platform.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 font-medium text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book a Demo
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group px-8 py-4 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 font-medium text-lg hover:border-cyan-600 hover:scale-105 transform">
                  <span className="flex items-center justify-center gap-2">
                    Explore Features
                    <span className="group-hover:rotate-90 transition-transform duration-300">↗</span>
                  </span>
                </button>
              </motion.div>
              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                {benefits.map((b, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur border border-transparent hover:border-cyan-200 dark:hover:border-cyan-800 transition-all">
                    <div className="flex justify-center mb-2 text-cyan-600 dark:text-cyan-400">{b.icon}</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{b.title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{b.description}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Modern Pharmacy" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">PharmaCare?</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Transform your pharmacy operations with cutting-edge technology designed for modern healthcare</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((f, i) => (
              <motion.div key={i} variants={scaleIn} className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-2xl transition-all border border-transparent hover:border-cyan-200 dark:hover:border-cyan-800">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              className="space-y-6"
            >
              <div className="group aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative">
                <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80" alt="Inventory Management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-semibold">📦 Inventory Management</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Advanced Inventory Control</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Track stock levels in real-time, set automatic reorder points, and manage expiry dates with ease.
                </p>
                <ul className="space-y-2">
                  {[
                    { t: 'Real-time stock tracking', d: 'Live visibility of inventory levels across products and locations.' },
                    { t: 'Expiry date management', d: 'Track expiries and get alerts before items go out of date.' },
                    { t: 'Automated reordering', d: 'Auto-generate purchase orders based on reorder points.' },
                    { t: 'Batch tracking', d: 'Maintain batch-level history for audits and recalls.' }
                  ].map((item, i) => (
                    <li key={i} className="group flex flex-col items-start text-gray-700 dark:text-gray-300 transition-colors duration-200">
                      <button
                        type="button"
                        onClick={() => setInvOpen(invOpen === i ? null : i)}
                        className="flex items-center w-full text-left hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        <ChevronRight className={`w-5 h-5 text-cyan-500 mr-2 transition-transform duration-200 ${invOpen === i ? 'rotate-90' : ''}`} />
                        <span>{item.t}</span>
                      </button>
                      {invOpen === i && (
                        <p className="mt-1 pl-7 text-sm text-gray-600 dark:text-gray-400">{item.d}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <div className="group aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 relative">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Analytics Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-semibold">📊 Analytics Dashboard</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Comprehensive Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Make data-driven decisions with detailed reports and insights.
                </p>
                <ul className="space-y-2">
                  {[
                    { t: 'Sales analytics', d: 'Identify top-selling products and seasonal trends.' },
                    { t: 'Customer insights', d: 'Understand buying behavior and improve retention.' },
                    { t: 'Revenue tracking', d: 'Monitor daily, weekly, and monthly revenue performance.' },
                    { t: 'Custom reports', d: 'Build reports tailored to your KPIs and workflows.' }
                  ].map((item, i) => (
                    <li key={i} className="group flex flex-col items-start text-gray-700 dark:text-gray-300 transition-colors duration-200">
                      <button
                        type="button"
                        onClick={() => setAnaOpen(anaOpen === i ? null : i)}
                        className="flex items-center w-full text-left hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        <ChevronRight className={`w-5 h-5 text-cyan-500 mr-2 transition-transform duration-200 ${anaOpen === i ? 'rotate-90' : ''}`} />
                        <span>{item.t}</span>
                      </button>
                      {anaOpen === i && (
                        <p className="mt-1 pl-7 text-sm text-gray-600 dark:text-gray-400">{item.d}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Your Pharmacy, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Digitally Transformed</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Experience seamless pharmacy management with our intelligent system</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <PharmacyIllustration />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: '💊', text: 'Smart Inventory' },
              { icon: '📊', text: 'Real-time Analytics' },
              { icon: '☁️', text: 'Cloud Synced' },
              { icon: '🔔', text: 'Instant Alerts' }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 cursor-pointer"
              >
                <span className="text-4xl mb-2">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      {/* Features Section (Exact copy from Web/src/App.tsx) */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Features</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to run a successful pharmacy business
            </p>
          </motion.div>

          {/* Core Features for Modern Pharmacies - Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-4"
          >
            {[
              { icon: <Package className="w-6 h-6" />, title: 'Inventory Management', desc: 'Track medicines, expiry alerts, stock value' },
              { icon: <FileText className="w-6 h-6" />, title: 'Prescription Management', desc: 'Generate and store digital prescriptions' },
              { icon: <CreditCard className="w-6 h-6" />, title: 'POS (Point of Sale)', desc: 'Fast billing with cash/credit options' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics & Reports', desc: 'Charts and graphs for insights' },
              { icon: <Users className="w-6 h-6" />, title: 'User Management', desc: 'Roles like Admin, Cashier, Manager' },
              { icon: <Shield className="w-6 h-6" />, title: 'Expense Management', desc: 'Rent, bills, supplier payments' }
            ].map((f, i) => (
              <motion.div key={i} variants={scaleIn} className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/70 backdrop-blur border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white grid place-items-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Core Features (Row 2) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 md:mt-6 mb-16 md:mb-20"
          >
            {[
              { icon: <Shield className="w-6 h-6" />, title: 'Audit Logs', desc: 'Track all user activities securely' },
              { icon: <Receipt className="w-6 h-6" />, title: 'Tax Modules', desc: 'Auto GST/VAT reports' },
              { icon: <CalendarClock className="w-6 h-6" />, title: 'Staff Attendance', desc: 'Payroll & attendance tracking' },
              { icon: <Truck className="w-6 h-6" />, title: 'Supplier Management', desc: 'Manage purchases and stock sources' },
              { icon: <Settings className="w-6 h-6" />, title: 'Settings & Customization', desc: 'Personalize system preferences' },
              { icon: <Users className="w-6 h-6" />, title: 'Customer Management', desc: 'Manage loyal, cash, and credit customers' }
            ].map((f, i) => (
              <motion.div key={i} variants={scaleIn} className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/70 backdrop-blur border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white grid place-items-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* About PharmaCare */}
      <PharmacyAboutSection />



      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-900/40">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Transparent Pricing</span></h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Choose the perfect plan for your pharmacy. No hidden fees, cancel anytime.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={scaleIn} className={`group relative p-8 rounded-2xl transition-all border-2 ${plan.popular ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-2xl' : 'bg-white dark:bg-gray-800 border-transparent shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full shadow">⭐ MOST POPULAR</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                  <div className="flex items-end justify-center">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.price}</span>
                    <span className={`text-xl ml-2 mb-2 ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-cyan-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-semibold transition ${plan.popular ? 'bg-white text-cyan-600 hover:bg-gray-100' : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'}`}>Get Started</button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PharmacyPage;
