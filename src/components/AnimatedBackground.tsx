import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Medical Icons */}
      <svg className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
        {/* Plus Signs */}
        <g className="text-cyan-500">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <line x1="100" y1="80" x2="100" y2="120" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="80" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <line x1="90%" y1="150" x2="90%" y2="190" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="calc(90% - 20px)" y1="170" x2="calc(90% + 20px)" y2="170" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </motion.g>

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <line x1="200" y1="80%" x2="200" y2="calc(80% + 40px)" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="180" y1="calc(80% + 20px)" x2="220" y2="calc(80% + 20px)" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </motion.g>
        </g>

        {/* Hearts */}
        <motion.path
          d="M 50% 300 l 5 10 l 5 -10 q 5 -5 0 -10 q -5 -3 -10 0 q -5 -3 -10 0 q -5 5 0 10 z"
          fill="#ec4899"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.path
          d="M 80% 70% l 5 10 l 5 -10 q 5 -5 0 -10 q -5 -3 -10 0 q -5 -3 -10 0 q -5 5 0 10 z"
          fill="#ec4899"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        {/* DNA Helix */}
        <g className="text-blue-500" opacity="0.4">
          <motion.path
            d="M 85% 400 Q 87% 420 85% 440 Q 83% 460 85% 480"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="5,5"
          />
          <motion.path
            d="M 90% 400 Q 88% 420 90% 440 Q 92% 460 90% 480"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="5,5"
          />
        </g>

        {/* Stethoscope */}
        <g className="text-cyan-600" opacity="0.3">
          <motion.circle
            cx="15%"
            cy="60%"
            r="15"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M 15% calc(60% + 15px) Q 17% calc(60% + 30px) 15% calc(60% + 45px)"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* Pills */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx="70%" cy="85%" r="8" fill="#06b6d4" opacity="0.4" />
          <circle cx="calc(70% + 20px)" cy="85%" r="8" fill="#3b82f6" opacity="0.4" />
        </motion.g>
      </svg>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
