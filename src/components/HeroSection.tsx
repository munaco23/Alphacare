import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const features = [
    'Patient-Centered Care',
    'HIPAA Compliant',
    'Real-Time Monitoring'
  ];

  return (
    <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full text-cyan-700 dark:text-cyan-400 text-sm font-medium">
                POWERED BY CodenServe
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-cyan-500 dark:text-cyan-400">H4health</span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Comprehensive Healthcare Software Solutions
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              Built to streamline hospital, pharmacy, and laboratory operations with secure, scalable technology.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image with Floating Card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Enhanced Decorative Background Blobs */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-cyan-300/50 to-blue-400/50 dark:from-cyan-400/30 dark:to-blue-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [360, 180, 0],
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-br from-blue-300/50 to-indigo-400/50 dark:from-blue-400/30 dark:to-indigo-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-300/40 to-blue-300/40 dark:from-indigo-400/20 dark:to-blue-400/20 rounded-full blur-3xl"
            />

            {/* Floating Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${15 + (i % 3) * 25}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Main Illustration Container with Glass Effect */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/90 via-cyan-50/90 to-blue-50/90 dark:from-gray-800/90 dark:via-gray-700/90 dark:to-gray-900/90 backdrop-blur-2xl p-10 border-2 border-white/40 dark:border-white/10"
              style={{
                boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.25), inset 0 2px 4px 0 rgba(255, 255, 255, 0.3)'
              }}
            >
              <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  {/* Enhanced Gradients */}
                  <linearGradient id="doctorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#0891b2" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fcd5ce" />
                    <stop offset="100%" stopColor="#f8ad9d" />
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.15"/>
                  </filter>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Animated Background Circles */}
                <circle cx="480" cy="120" r="100" fill="url(#glowGrad)">
                  <animate attributeName="r" values="100;120;100" dur="5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="120" cy="380" r="80" fill="url(#glowGrad)">
                  <animate attributeName="r" values="80;95;80" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
                
                {/* Decorative Dots Pattern */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const radius = 200;
                  const cx = 300 + radius * Math.cos(angle);
                  const cy = 250 + radius * Math.sin(angle);
                  return (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#06b6d4" opacity="0.2">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" begin={`${i * 0.25}s`} repeatCount="indefinite"/>
                    </circle>
                  );
                })}

                {/* Modern Desk Platform */}
                <g filter="url(#shadow)">
                  <ellipse cx="325" cy="420" rx="200" ry="30" fill="url(#deskGrad)" opacity="0.4"/>
                  <rect x="125" y="360" width="400" height="15" rx="8" fill="url(#deskGrad)"/>
                  <rect x="125" y="360" width="400" height="5" rx="8" fill="#94a3b8" opacity="0.6"/>
                </g>

                {/* Modern Monitor/Screen */}
                <g filter="url(#shadow)">
                  {/* Monitor Stand */}
                  <rect x="305" y="330" width="40" height="30" rx="4" fill="#64748b"/>
                  <rect x="285" y="355" width="80" height="8" rx="4" fill="#475569"/>
                  
                  {/* Monitor Screen Frame */}
                  <rect x="210" y="180" width="230" height="155" rx="12" fill="#1e293b"/>
                  <rect x="220" y="190" width="210" height="135" rx="8" fill="url(#screenGrad)"/>
                  
                  {/* Screen Glow Effect */}
                  <rect x="220" y="190" width="210" height="135" rx="8" fill="url(#glowGrad)" filter="url(#glow)"/>
                  
                  {/* Screen Content - Heart Rate Monitor */}
                  <g filter="url(#glow)">
                    <path d="M240 250 L265 250 L275 230 L285 270 L295 250 L410 250" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="410" cy="250" r="5" fill="#22c55e">
                      <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Health Data Display */}
                  <text x="240" y="220" fill="#06b6d4" fontSize="14" fontWeight="bold">H4Health</text>
                  <text x="240" y="235" fill="#64748b" fontSize="9">Patient Monitor</text>
                  
                  {/* Vital Signs */}
                  <text x="240" y="280" fill="#94a3b8" fontSize="11">Heart Rate: </text>
                  <text x="310" y="280" fill="#22c55e" fontSize="11" fontWeight="bold">72 BPM</text>
                  <text x="240" y="300" fill="#94a3b8" fontSize="11">Status: </text>
                  <text x="285" y="300" fill="#22c55e" fontSize="11" fontWeight="bold">Normal</text>
                </g>

                {/* Modern Doctor Character */}
                <g filter="url(#shadow)">
                  {/* Body - Lab Coat */}
                  <path d="M460 260 Q460 250 470 250 L500 250 Q510 250 510 260 L515 365 Q515 375 505 375 L465 375 Q455 375 455 365 Z" fill="url(#doctorGrad)">
                    <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Lab Coat Collar */}
                  <path d="M470 250 L465 265 L475 270 L485 270 L495 270 L505 265 L500 250" fill="#e0f2fe"/>
                  
                  {/* Lab Coat Buttons */}
                  <circle cx="485" cy="280" r="3" fill="#cbd5e1"/>
                  <circle cx="485" cy="300" r="3" fill="#cbd5e1"/>
                  <circle cx="485" cy="320" r="3" fill="#cbd5e1"/>
                  
                  {/* Pocket with Badge */}
                  <rect x="465" y="285" width="35" height="25" rx="3" fill="#bfdbfe" opacity="0.5"/>
                  <text x="470" y="300" fill="#0891b2" fontSize="8" fontWeight="bold">ID</text>
                  
                  {/* Left Arm pointing to screen */}
                  <path d="M460 280 L420 260 L415 270 L455 290 Z" fill="url(#doctorGrad)"/>
                  <ellipse cx="415" cy="268" rx="12" ry="15" fill="url(#skinGrad)"/>
                  
                  {/* Right Arm */}
                  <path d="M510 280 L510 340" stroke="url(#doctorGrad)" strokeWidth="18" strokeLinecap="round"/>
                  <ellipse cx="510" cy="350" rx="12" ry="15" fill="url(#skinGrad)"/>
                  
                  {/* Head */}
                  <ellipse cx="485" cy="220" rx="35" ry="40" fill="url(#skinGrad)">
                    <animate attributeName="cy" values="220;217;220" dur="4s" repeatCount="indefinite"/>
                  </ellipse>
                  
                  {/* Hair - Modern Style */}
                  <ellipse cx="485" cy="195" rx="38" ry="25" fill="#1f2937"/>
                  <path d="M450 210 Q485 185 520 210" fill="#1f2937"/>
                  
                  {/* Face Details */}
                  <circle cx="472" cy="218" r="3" fill="#1f2937"/>
                  <circle cx="498" cy="218" r="3" fill="#1f2937"/>
                  <ellipse cx="472" cy="216" rx="1.5" ry="1" fill="#ffffff"/>
                  <ellipse cx="498" cy="216" rx="1.5" ry="1" fill="#ffffff"/>
                  
                  {/* Smile */}
                  <path d="M473 232 Q485 238 497 232" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  
                  {/* Stethoscope */}
                  <path d="M475 270 Q470 285 475 300 Q478 310 485 310" stroke="#1e40af" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                  <circle cx="485" cy="312" r="8" fill="#3b82f6" stroke="#1e40af" strokeWidth="2">
                    <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="485" cy="312" r="4" fill="#60a5fa">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>

                {/* Enhanced Floating Medical Icons */}
                <g>
                  {/* Medical Cross 1 */}
                  <g opacity="0.5">
                    <circle cx="150" cy="100" r="20" fill="#06b6d4" opacity="0.1">
                      <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="140" y1="100" x2="160" y2="100" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="150" y1="90" x2="150" y2="110" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <animateTransform attributeName="transform" type="rotate" values="0 150 100;360 150 100" dur="20s" repeatCount="indefinite"/>
                  </g>
                  
                  {/* Medical Cross 2 */}
                  <g opacity="0.5">
                    <circle cx="530" cy="350" r="18" fill="#3b82f6" opacity="0.1">
                      <animate attributeName="r" values="18;22;18" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="522" y1="350" x2="538" y2="350" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                    </line>
                    <line x1="530" y1="342" x2="530" y2="358" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                    </line>
                    <animateTransform attributeName="transform" type="rotate" values="360 530 350;0 530 350" dur="15s" repeatCount="indefinite"/>
                  </g>
                  
                  {/* Heartbeat Icon */}
                  <g opacity="0.6">
                    <path d="M545 180 C545 175, 550 170, 555 170 C560 170, 565 175, 565 180 C565 190, 555 200, 545 210 C535 200, 525 190, 525 180 C525 175, 530 170, 535 170 C540 170, 545 175, 545 180 Z" fill="#ec4899" filter="url(#glow)">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
                      <animateTransform attributeName="transform" type="scale" values="1;1.15;1" dur="1.5s" repeatCount="indefinite" additive="sum"/>
                    </path>
                  </g>
                  
                  {/* DNA Helix */}
                  <g opacity="0.5">
                    <path d="M80 300 Q85 290 90 300 Q95 310 100 300" stroke="#8b5cf6" strokeWidth="2.5" fill="none">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="80" cy="300" r="3" fill="#8b5cf6">
                      <animate attributeName="cy" values="300;290;300" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="100" cy="300" r="3" fill="#8b5cf6">
                      <animate attributeName="cy" values="300;310;300" dur="3s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Pills Icon */}
                  <g opacity="0.5">
                    <ellipse cx="560" cy="450" rx="12" ry="8" fill="#f59e0b" transform="rotate(45 560 450)">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite"/>
                      <animateTransform attributeName="transform" type="rotate" values="45 560 450;405 560 450" dur="10s" repeatCount="indefinite" additive="sum"/>
                    </ellipse>
                    <rect x="554" y="445" width="12" height="10" fill="#fbbf24" opacity="0.7" transform="rotate(45 560 450)">
                      <animateTransform attributeName="transform" type="rotate" values="45 560 450;405 560 450" dur="10s" repeatCount="indefinite" additive="sum"/>
                    </rect>
                  </g>
                </g>

                {/* Floating Particles */}
                <circle cx="180" cy="150" r="4" fill="#06b6d4" opacity="0.3">
                  <animate attributeName="cy" values="150;130;150" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="520" cy="280" r="3" fill="#3b82f6" opacity="0.3">
                  <animate attributeName="cy" values="280;260;280" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="350" cy="180" r="5" fill="#a855f7" opacity="0.3">
                  <animate attributeName="cy" values="180;160;180" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </motion.div>

            {/* Enhanced Floating Stat Card with Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { delay: 1, duration: 0.6 },
                scale: { delay: 1, duration: 0.6, type: "spring", stiffness: 200 },
                rotate: { delay: 1, duration: 0.6 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute bottom-8 left-8 bg-gradient-to-br from-white via-white to-cyan-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl p-6 backdrop-blur-xl border-2 border-white/60 dark:border-white/10 group cursor-pointer"
              style={{
                boxShadow: '0 20px 40px -12px rgba(6, 182, 212, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 2px 4px 0 rgba(255, 255, 255, 0.4)'
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative flex items-center gap-4">
                {/* Icon with animated background */}
                <motion.div 
                  className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(6, 182, 212, 0.4)',
                      '0 0 30px rgba(6, 182, 212, 0.6)',
                      '0 0 20px rgba(6, 182, 212, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                  <CheckCircle2 className="w-7 h-7 text-white relative z-10" />
                </motion.div>
                
                <div>
                  <motion.div 
                    className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1 uppercase tracking-wider"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Uptime
                  </motion.div>
                  <div className="flex items-baseline gap-1">
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-cyan-700 to-blue-700 dark:from-white dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0%', '100%', '0%']
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: '200% auto'
                      }}
                    >
                      99.9%
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-3xl" />
            </motion.div>
            
            {/* Additional Floating Elements */}
            {/* Floating medical cross badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                opacity: { delay: 1.5, duration: 0.5 },
                scale: { delay: 1.5, duration: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-xl"
              style={{
                boxShadow: '0 15px 30px -10px rgba(16, 185, 129, 0.6)'
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="10" y="6" width="4" height="12" rx="1" fill="white"/>
                  <rect x="6" y="10" width="12" height="4" rx="1" fill="white"/>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
