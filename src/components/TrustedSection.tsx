import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Building2, Award, TrendingUp } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const TrustedSection: React.FC = () => {
  const counters = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Healthcare Professionals',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Building2,
      value: 1200,
      suffix: '+',
      label: 'Medical Facilities',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: 'M+',
      label: 'Patients Served',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative background elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
            />

            {/* Main SVG Illustration */}
            <motion.svg
              viewBox="0 0 500 500"
              className="w-full h-auto relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Background Circle */}
              <motion.circle
                cx="250"
                cy="250"
                r="200"
                fill="url(#gradient1)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>

              {/* Central Medical Cross */}
              <motion.g
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <rect x="230" y="180" width="40" height="140" rx="8" fill="url(#gradient2)" />
                <rect x="180" y="230" width="140" height="40" rx="8" fill="url(#gradient2)" />
              </motion.g>

              {/* Orbiting Elements - Doctors */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              >
                {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                  const radian = (angle * Math.PI) / 180;
                  const x = 250 + 150 * Math.cos(radian);
                  const y = 250 + 150 * Math.sin(radian);
                  
                  return (
                    <motion.g
                      key={angle}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <circle cx={x} cy={y} r="20" fill="white" />
                      <circle cx={x} cy={y} r="15" fill="url(#gradient3)" />
                      {/* Doctor icon simplified */}
                      <circle cx={x} cy={y - 3} r="4" fill="white" />
                      <rect x={x - 4} y={y + 2} width="8" height="6" rx="1" fill="white" />
                    </motion.g>
                  );
                })}
              </motion.g>

              {/* Pulse Rings */}
              <motion.circle
                cx="250"
                cy="250"
                r="180"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.circle
                cx="250"
                cy="250"
                r="180"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
              />

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={150 + Math.random() * 200}
                  cy={150 + Math.random() * 200}
                  r="3"
                  fill="url(#gradient2)"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [-20, 20, -20]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Heartbeat Line */}
              <motion.path
                d="M 100 250 L 150 250 L 170 230 L 190 270 L 210 250 L 400 250"
                stroke="url(#gradient2)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.8 }}
              />
            </motion.svg>
          </motion.div>

          {/* Right Side - Content & Counters */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Healthcare Professionals</span>
              </motion.h2>
              <motion.div 
                className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                Join thousands of healthcare professionals worldwide who trust H4Health to streamline their operations and deliver exceptional patient care.
              </motion.p>
            </motion.div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 gap-6">
              {counters.map((counter, index) => (
                <motion.div
                  key={counter.label}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.7 + index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                  />
                  
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    {/* Icon */}
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${counter.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <counter.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Counter */}
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <AnimatedCounter 
                        end={counter.value} 
                        duration={2000}
                        suffix={counter.suffix}
                      />
                    </motion.div>

                    {/* Label */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {counter.label}
                    </p>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${counter.color} opacity-5 rounded-2xl transform rotate-45 translate-x-10 -translate-y-10`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-2xl border border-cyan-200/50 dark:border-cyan-500/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex-shrink-0"
              >
                <Award className="w-12 h-12 text-cyan-500" />
              </motion.div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                  Industry Leading Solution
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Recognized for excellence in healthcare technology and innovation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
