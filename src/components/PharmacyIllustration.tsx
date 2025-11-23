import { motion } from 'framer-motion';

export const PharmacyIllustration = () => {
  return (
    <svg viewBox="0 0 1000 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="counterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.9 }} />
          <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="softShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
        </filter>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="1000" height="600" fill="#f8fafc" className="dark:fill-gray-900" />
      
      {/* Floor with tiles */}
      <rect x="0" y="480" width="1000" height="120" fill="#e2e8f0" className="dark:fill-gray-800" />
      
      {/* Back Wall with Medicine Shelves */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Wall */}
        <rect x="200" y="80" width="600" height="320" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" rx="8" className="dark:fill-gray-800" filter="url(#softShadow)" />
        
        {/* Pharmacy Sign */}
        <rect x="350" y="50" width="300" height="50" fill="#06b6d4" rx="8" filter="url(#softShadow)" />
        <text x="500" y="82" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="bold" letterSpacing="2">PHARMACY</text>
        
        {/* Medicine Shelves - 4 rows */}
        {[120, 180, 240, 300].map((y, rowIndex) => (
          <g key={`shelf-${rowIndex}`}>
            {/* Shelf background */}
            <rect x="220" y={y} width="560" height="50" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="4" className="dark:fill-gray-700" />
            
            {/* Medicine bottles on shelf */}
            {[...Array(14)].map((_, i) => {
              const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];
              const color = colors[i % colors.length];
              return (
                <motion.g
                  key={`bottle-${rowIndex}-${i}`}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: rowIndex * 0.1 + i * 0.02 }}
                >
                  <rect 
                    x={230 + i * 39} 
                    y={y + 15} 
                    width="28" 
                    height="30" 
                    fill={color} 
                    rx="3" 
                    opacity="0.9"
                  />
                  <rect x={230 + i * 39} y={y + 13} width="28" height="5" fill={color} rx="2" opacity="0.7" />
                  <rect x={233 + i * 39} y={y + 18} width="8" height="20" fill="#ffffff" opacity="0.3" rx="2" />
                  <rect x={232 + i * 39} y={y + 28} width="24" height="10" fill="#ffffff" opacity="0.6" rx="1" />
                </motion.g>
              );
            })}
          </g>
        ))}
        
        {/* Green Cross Symbol */}
        <motion.g
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="240" y="130" width="20" height="60" fill="#10b981" rx="4" />
          <rect x="230" y="140" width="40" height="40" fill="#10b981" rx="4" />
        </motion.g>
      </motion.g>

      {/* Counter - White/Light colored */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        filter="url(#softShadow)"
      >
        {/* Counter main structure */}
        <rect x="250" y="400" width="500" height="100" fill="url(#counterGrad)" stroke="#cbd5e1" strokeWidth="3" rx="8" />
        {/* Counter top surface */}
        <rect x="250" y="400" width="500" height="25" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" rx="8" />
        {/* Counter front panels */}
        <rect x="270" y="435" width="100" height="55" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="4" />
        <rect x="390" y="435" width="100" height="55" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="4" />
        <rect x="510" y="435" width="100" height="55" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="4" />
        <rect x="630" y="435" width="100" height="55" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" rx="4" />
      </motion.g>

      {/* Computer Monitor on Counter */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Monitor */}
        <rect x="620" y="340" width="90" height="65" fill="#1f2937" stroke="#374151" strokeWidth="3" rx="6" filter="url(#softShadow)" />
        <rect x="625" y="345" width="80" height="52" fill="url(#screenGlow)" rx="4" />
        
        {/* Screen content */}
        <motion.g animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
          <text x="665" y="362" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="600">BILLING SYSTEM</text>
          <rect x="632" y="368" width="66" height="3" fill="#93c5fd" rx="1" />
          <rect x="632" y="374" width="50" height="3" fill="#60a5fa" rx="1" />
          <rect x="632" y="380" width="58" height="3" fill="#93c5fd" rx="1" />
          <text x="665" y="392" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">$45.00</text>
        </motion.g>
        
        {/* Monitor stand */}
        <rect x="660" y="405" width="10" height="10" fill="#374151" rx="2" />
        
        {/* Keyboard */}
        <rect x="620" y="415" width="90" height="18" fill="#374151" stroke="#4b5563" strokeWidth="2" rx="4" />
        <motion.g animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
          {[...Array(12)].map((_, i) => (
            <rect key={i} x={625 + i * 7} y="419" width="5" height="10" fill="#6b7280" rx="1" />
          ))}
        </motion.g>
      </motion.g>

      {/* Pharmacist - Female with white coat */}
      <motion.g
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Body - white coat */}
        <ellipse cx="500" cy="360" rx="45" ry="55" fill="#ffffff" stroke="#e5e7eb" strokeWidth="3" />
        {/* Coat collar */}
        <path d="M 470 330 Q 500 320 530 330" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
        {/* Coat buttons */}
        <circle cx="500" cy="340" r="3" fill="#3b82f6" />
        <circle cx="500" cy="355" r="3" fill="#3b82f6" />
        <circle cx="500" cy="370" r="3" fill="#3b82f6" />
        
        {/* Head */}
        <circle cx="500" cy="300" r="32" fill="#fcd34d" />
        {/* Hair - long */}
        <path d="M 475 285 Q 470 270 475 260 Q 485 255 500 258 Q 515 255 525 260 Q 530 270 525 285" fill="#92400e" />
        <path d="M 470 290 Q 465 310 470 330" fill="#92400e" strokeWidth="8" stroke="#92400e" strokeLinecap="round" />
        <path d="M 530 290 Q 535 310 530 330" fill="#92400e" strokeWidth="8" stroke="#92400e" strokeLinecap="round" />
        
        {/* Face details */}
        <circle cx="490" cy="300" r="3" fill="#1f2937" />
        <circle cx="510" cy="300" r="3" fill="#1f2937" />
        <path d="M 492 310 Q 500 314 508 310" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Left arm - reaching to keyboard */}
        <motion.line
          x1="455" y1="355" x2="625" y2="420"
          stroke="#ffffff" strokeWidth="12" strokeLinecap="round"
          animate={{ rotate: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: '455px 355px' }}
        />
        <circle cx="625" cy="420" r="8" fill="#fcd34d" />
        
        {/* Right arm - holding medicine */}
        <motion.line
          x1="545" y1="355" x2="580" y2="340"
          stroke="#ffffff" strokeWidth="12" strokeLinecap="round"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          style={{ transformOrigin: '545px 355px' }}
        />
        <circle cx="580" cy="340" r="8" fill="#fcd34d" />
        
        {/* Medicine box in hand */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect x="570" y="330" width="28" height="28" fill="#ef4444" stroke="#dc2626" strokeWidth="2.5" rx="3" />
          <rect x="573" y="333" width="22" height="22" fill="#fee2e2" rx="2" />
          <path d="M 581 341 L 589 341 M 585 337 L 585 345" stroke="#ef4444" strokeWidth="2.5" />
        </motion.g>
      </motion.g>

      {/* Customer - Animated journey */}
      <motion.g
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: [-200, 100, 100, 350],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 14,
          times: [0, 0.25, 0.65, 1],
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        {/* Body */}
        <ellipse cx="300" cy="430" rx="35" ry="45" fill="#3b82f6" stroke="#2563eb" strokeWidth="3" />
        
        {/* Head */}
        <circle cx="300" cy="370" r="28" fill="#fbbf24" />
        {/* Hair */}
        <path d="M 280 360 Q 285 350 295 355 Q 300 348 305 355 Q 315 350 320 360" fill="#78350f" />
        
        {/* Face */}
        <circle cx="292" cy="370" r="3" fill="#1f2937" />
        <circle cx="308" cy="370" r="3" fill="#1f2937" />
        <path d="M 293 380 Q 300 383 307 380" stroke="#1f2937" strokeWidth="2" fill="none" />
        
        {/* Arms - walking motion */}
        <motion.line
          x1="265" y1="420" x2="245" y2="440"
          stroke="#3b82f6" strokeWidth="10" strokeLinecap="round"
          animate={{ rotate: [0, 30, 0, -30, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: '265px 420px' }}
        />
        <motion.line
          x1="335" y1="420" x2="355" y2="440"
          stroke="#3b82f6" strokeWidth="10" strokeLinecap="round"
          animate={{ rotate: [0, -30, 0, 30, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          style={{ transformOrigin: '335px 420px' }}
        />
        
        {/* Legs - walking */}
        <motion.line
          x1="290" y1="475" x2="285" y2="500"
          stroke="#1e40af" strokeWidth="10" strokeLinecap="round"
          animate={{ rotate: [0, 25, 0, -25, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: '290px 475px' }}
        />
        <motion.line
          x1="310" y1="475" x2="315" y2="500"
          stroke="#1e40af" strokeWidth="10" strokeLinecap="round"
          animate={{ rotate: [0, -25, 0, 25, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          style={{ transformOrigin: '310px 475px' }}
        />
        
        {/* Medicine bag - appears after transaction */}
        <motion.g
          animate={{
            opacity: [0, 0, 1, 1],
            y: [10, 10, 0, 0]
          }}
          transition={{
            duration: 14,
            times: [0, 0.6, 0.65, 1],
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          <rect x="240" y="425" width="32" height="38" fill="#ffffff" stroke="#3b82f6" strokeWidth="3" rx="4" />
          <rect x="244" y="430" width="24" height="30" fill="#dbeafe" rx="2" />
          <line x1="250" y1="425" x2="250" y2="418" stroke="#3b82f6" strokeWidth="3" />
          <line x1="262" y1="425" x2="262" y2="418" stroke="#3b82f6" strokeWidth="3" />
          <path d="M 252 440 L 260 440 M 252 448 L 260 448" stroke="#3b82f6" strokeWidth="2" />
        </motion.g>
      </motion.g>

      {/* Medicine transfer animation */}
      <motion.g
        animate={{
          x: [80, -120],
          y: [-10, 60],
          opacity: [0, 1, 0],
          scale: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 14,
          times: [0, 0.62, 0.68],
          repeat: Infinity,
          repeatDelay: 2
        }}
      >
        <rect x="570" y="330" width="28" height="28" fill="#ef4444" stroke="#dc2626" strokeWidth="2.5" rx="3" filter="url(#softShadow)" />
        <rect x="573" y="333" width="22" height="22" fill="#fee2e2" rx="2" />
        <path d="M 581 341 L 589 341 M 585 337 L 585 345" stroke="#ef4444" strokeWidth="2.5" />
        
        {/* Sparkles */}
        <motion.g
          animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <path d="M 585 325 L 586 328 L 585 331 L 584 328 Z" fill="#fbbf24" />
          <path d="M 595 341 L 598 342 L 595 343 L 592 342 Z" fill="#fbbf24" />
        </motion.g>
      </motion.g>

      {/* Decorative elements */}
      {/* Floating pills */}
      <motion.g animate={{ y: [-8, 8, -8], rotate: [0, 360] }} transition={{ duration: 6, repeat: Infinity }}>
        <ellipse cx="150" cy="200" rx="18" ry="11" fill="#ef4444" opacity="0.8" />
        <ellipse cx="150" cy="200" rx="9" ry="11" fill="#dc2626" />
      </motion.g>
      
      <motion.g animate={{ y: [8, -8, 8], rotate: [0, -360] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>
        <rect x="850" y="250" width="30" height="16" fill="#06b6d4" rx="8" opacity="0.8" />
        <rect x="865" y="250" width="15" height="16" fill="#0891b2" rx="8" />
      </motion.g>

      {/* Analytics chart */}
      <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
        <rect x="80" y="350" width="100" height="80" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" rx="6" filter="url(#softShadow)" />
        <text x="130" y="370" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="600">ANALYTICS</text>
        {[25, 35, 42, 30].map((h, i) => (
          <motion.rect
            key={i}
            x={90 + i * 22}
            y={410 - h}
            width="14"
            height={h}
            fill={['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'][i]}
            rx="2"
            animate={{ height: [h, h + 8, h] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.g>

      {/* Cloud sync */}
      <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }}>
        <ellipse cx="870" cy="150" rx="35" ry="22" fill="#ffffff" stroke="#06b6d4" strokeWidth="3" />
        <ellipse cx="895" cy="155" rx="28" ry="20" fill="#ffffff" stroke="#06b6d4" strokeWidth="3" />
        <ellipse cx="850" cy="155" rx="24" ry="18" fill="#ffffff" stroke="#06b6d4" strokeWidth="3" />
        <motion.g animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '870px 150px' }}>
          <path d="M 870 140 L 874 144 L 866 144 Z" fill="#06b6d4" />
        </motion.g>
      </motion.g>
    </svg>
  );
};
