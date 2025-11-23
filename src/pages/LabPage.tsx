import React, { useEffect, useRef } from 'react';
import img from '../assets/Gemini_Generated_Image_g6kn3ug6kn3ug6kn.png'
import img6 from '../assets/fg.png'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'
import img5 from '../assets/5.webp'
import { motion, animate, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { CheckCircle, Play, Beaker, TestTube, Zap, ShieldCheck, Bell, Globe, Lock, Star, Quote, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedNumber: React.FC<{ value: number; delay?: number }>=({ value, delay = 0 })=>{
  const ref = React.useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  React.useEffect(()=>{
    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = String(Math.round(value));
      return;
    }
    const controls = animate(0, value, {
      duration: 0.9,
      delay,
      ease: 'easeOut',
      onUpdate: (v)=>{ if(ref.current) ref.current.textContent = String(Math.round(v)); }
    });
    return ()=>controls.stop();
  },[value, delay, prefersReducedMotion]);
  return <span ref={ref} className="tabular-nums">{Math.round(value)}</span>;
};

// Sticky Scroll Section with GSAP Pin Effect
const StickyScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.card-item');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Don't pin the last card
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top 50px',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { 
      id: 1, 
      image: img1,
      title: "Doctor Performance Overview",
      points: [
        "Track revenue and commission in real-time",
        "Monitor patient count and appointments",
        "View detailed doctor performance metrics",
        "Analyze fee structures and commission rates"
      ]
    },
    { 
      id: 2, 
      image: img2,
      title: "Token Management System",
      points: [
        "Generate and manage patient tokens",
        "Real-time token tracking and analytics",
        "View today's appointments and revenue",
        "Export data for reporting and analysis"
      ]
    },
    { 
      id: 3, 
      image: img3,
      title: "Patient Registration",
      points: [
        "Quick patient information entry",
        "Search by MR number or phone",
        "Select doctor and department easily",
        "Manage billing and fee details"
      ]
    },
    { 
      id: 4, 
      image: img4,
      title: "Data Backup & Security",
      points: [
        "Automated backup scheduling",
        "Export and import data securely",
        "Never lose important patient records",
        "Manual and automatic backup options"
      ]
    },
    { 
      id: 5, 
      image: img5,
      title: "Analytics Dashboard",
      points: [
        "Doctor-wise revenue analysis",
        "Patient count and trends",
        "Custom date range filtering",
        "Comprehensive performance insights"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative">
      {/* Heading */}
      <div className="w-full py-16 bg-white dark:bg-gray-900 flex justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
          Powerful Features
        </h2>
      </div>
      
      {cards.map((card) => (
        <div
          key={card.id}
          className="card-item w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <div className="w-[90%] md:w-[80%] h-auto md:h-[85vh] flex-shrink-0 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row justify-center items-center">
            {/* Left side - 30% with points */}
            <div className="w-full md:w-[30%] md:h-[63%] bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {card.title}
              </h3>
              <div className="space-y-4">
                {card.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - 70% with image */}
            <div className="w-full md:w-[70%] h-auto md:h-full overflow-hidden flex justify-center items-center mt-6 md:mt-0">
              <div className="w-full md:w-[90%] h-auto md:h-[100%]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto md:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const LabPage: React.FC = () => {
  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Complete Sample Tracking' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Advanced Analytics' },
    { icon: <CheckCircle className="w-5 h-5" />, text: '20+ Report Templates' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Automated Backup System' },
  ];

  return (
    <>
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6 md:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
            >
              <Beaker className="w-4 h-4" />
              Laboratory Information Management System
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Laboratory Information{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Management System
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Optimize sample tracking, test processing, and result delivery for a new era of diagnostics.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-3 md:gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-cyan-500 dark:text-cyan-400">{feature.icon}</span>
                  <span className="text-sm md:text-base">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
              >
                Get Complete Lab Package
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 flex items-center gap-2 text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 p-8">
              <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="labBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="100%" stopColor="#bfdbfe" />
                  </linearGradient>
                  <linearGradient id="equipmentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f0f9ff" />
                    <stop offset="100%" stopColor="#e0f2fe" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15"/>
                  </filter>
                </defs>

                {/* Background */}
                <rect width="600" height="400" fill="url(#labBg)" opacity="0.3"/>

                {/* Lab Bench */}
                <rect x="50" y="280" width="500" height="100" fill="#94a3b8" rx="4" filter="url(#shadow)"/>
                <rect x="50" y="280" width="500" height="15" fill="#cbd5e1" rx="4"/>

                {/* Computer Monitor */}
                <g>
                  <rect x="80" y="180" width="120" height="90" fill="#1e293b" rx="4" filter="url(#shadow)"/>
                  <rect x="85" y="185" width="110" height="75" fill="#0ea5e9" rx="2"/>
                  
                  {/* Screen content - animated */}
                  <rect x="90" y="195" width="100" height="8" fill="#bfdbfe" rx="1">
                    <animate attributeName="width" values="100;80;100" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="90" y="210" width="80" height="6" fill="#93c5fd" rx="1"/>
                  <rect x="90" y="220" width="90" height="6" fill="#93c5fd" rx="1"/>
                  <rect x="90" y="230" width="70" height="6" fill="#93c5fd" rx="1"/>
                  
                  {/* Monitor stand */}
                  <rect x="125" y="270" width="30" height="10" fill="#334155" rx="2"/>
                  <rect x="115" y="265" width="50" height="5" fill="#475569" rx="2"/>
                </g>

                {/* Microscope */}
                <g transform="translate(250, 150)">
                  <ellipse cx="30" cy="120" rx="35" ry="8" fill="#000" opacity="0.1"/>
                  
                  {/* Base */}
                  <rect x="10" y="110" width="40" height="10" fill="#64748b" rx="2" filter="url(#shadow)"/>
                  
                  {/* Arm */}
                  <rect x="25" y="60" width="8" height="50" fill="#475569" rx="2"/>
                  
                  {/* Body */}
                  <ellipse cx="29" cy="55" rx="18" ry="25" fill="#0ea5e9" filter="url(#shadow)"/>
                  <ellipse cx="29" cy="50" rx="15" ry="20" fill="#38bdf8"/>
                  
                  {/* Eyepiece */}
                  <rect x="24" y="25" width="10" height="15" fill="#475569" rx="2"/>
                  <ellipse cx="29" cy="25" rx="6" ry="4" fill="#1e293b"/>
                  
                  {/* Objective lenses */}
                  <circle cx="29" cy="80" r="8" fill="#1e293b"/>
                  <circle cx="29" cy="80" r="5" fill="#0ea5e9" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Stage */}
                  <rect x="10" y="85" width="38" height="4" fill="#cbd5e1" rx="1"/>
                  <rect x="15" y="89" width="28" height="2" fill="#94a3b8"/>
                </g>

                {/* Test Tubes Rack */}
                <g transform="translate(380, 200)">
                  <rect x="0" y="70" width="100" height="10" fill="#64748b" rx="2" filter="url(#shadow)"/>
                  
                  {/* Test tubes */}
                  <g>
                    <rect x="10" y="30" width="12" height="40" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="6"/>
                    <rect x="10" y="55" width="12" height="15" fill="#3b82f6" opacity="0.6" rx="6"/>
                    
                    <rect x="30" y="35" width="12" height="35" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="6"/>
                    <rect x="30" y="55" width="12" height="15" fill="#ef4444" opacity="0.6" rx="6"/>
                    
                    <rect x="50" y="25" width="12" height="45" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="6"/>
                    <rect x="50" y="50" width="12" height="20" fill="#10b981" opacity="0.6" rx="6"/>
                    
                    <rect x="70" y="30" width="12" height="40" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="6"/>
                    <rect x="70" y="55" width="12" height="15" fill="#f59e0b" opacity="0.6" rx="6"/>
                  </g>
                  
                  {/* Bubbles animation */}
                  <circle cx="36" cy="60" r="1.5" fill="#fff" opacity="0.8">
                    <animate attributeName="cy" values="65;40;65" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="56" cy="55" r="1.5" fill="#fff" opacity="0.8">
                    <animate attributeName="cy" values="60;35;60" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0;0.8;0" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                </g>

                {/* Beaker */}
                <g transform="translate(480, 220)">
                  <path d="M10 10 L10 50 Q10 60 20 60 L50 60 Q60 60 60 50 L60 10 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" filter="url(#shadow)"/>
                  <rect x="10" y="40" width="50" height="20" fill="#06b6d4" opacity="0.5"/>
                  
                  {/* Liquid level animation */}
                  <rect x="10" y="45" width="50" height="15" fill="#0ea5e9" opacity="0.6">
                    <animate attributeName="height" values="15;18;15" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="45;42;45" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Measurement lines */}
                  <line x1="10" y1="20" x2="15" y2="20" stroke="#0284c7" strokeWidth="1"/>
                  <line x1="10" y1="35" x2="15" y2="35" stroke="#0284c7" strokeWidth="1"/>
                  <line x1="10" y1="50" x2="15" y2="50" stroke="#0284c7" strokeWidth="1"/>
                </g>

                {/* Floating Icons */}
                <g opacity="0.6">
                  <circle cx="100" cy="80" r="20" fill="#dbeafe" filter="url(#glow)">
                    <animate attributeName="cy" values="80;70;80" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <path d="M95 75 L100 85 L105 75" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 5)"/>
                  
                  <circle cx="500" cy="100" r="20" fill="#dbeafe" filter="url(#glow)">
                    <animate attributeName="cy" values="100;90;100" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="500" cy="100" r="6" fill="none" stroke="#0ea5e9" strokeWidth="2"/>
                  <path d="M500 94 L500 106 M494 100 L506 100" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
                </g>

                {/* Data visualization */}
                <g transform="translate(420, 80)">
                  <rect x="0" y="0" width="80" height="60" fill="#fff" opacity="0.9" rx="4" filter="url(#shadow)"/>
                  <text x="40" y="15" fontSize="8" fill="#64748b" textAnchor="middle" fontWeight="600">Analytics</text>
                  
                  {/* Bar chart */}
                  <rect x="10" y="40" width="8" height="15" fill="#3b82f6" rx="1">
                    <animate attributeName="height" values="15;20;15" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="40;35;40" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="22" y="35" width="8" height="20" fill="#06b6d4" rx="1">
                    <animate attributeName="height" values="20;25;20" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="35;30;35" dur="2.2s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="34" y="30" width="8" height="25" fill="#10b981" rx="1">
                    <animate attributeName="height" values="25;28;25" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="30;27;30" dur="2.5s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="46" y="38" width="8" height="17" fill="#8b5cf6" rx="1">
                    <animate attributeName="height" values="17;22;17" dur="2.3s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="38;33;38" dur="2.3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="58" y="33" width="8" height="22" fill="#ec4899" rx="1">
                    <animate attributeName="height" values="22;26;22" dur="2.1s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="33;29;33" dur="2.1s" repeatCount="indefinite"/>
                  </rect>
                </g>
              </svg>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Tracking</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
              >
                <TestTube className="w-4 h-4" />
                <span className="text-sm font-semibold">500+ Tests</span>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Complete Solution Section */}
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Lab Image with Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            {/* Main Lab Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="labRoomBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                  <filter id="cardShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
                  </filter>
                </defs>

                {/* Lab Room Background */}
                <rect width="600" height="400" fill="url(#labRoomBg)"/>

                {/* Back Wall */}
                <rect x="0" y="0" width="600" height="280" fill="#cbd5e1" opacity="0.3"/>

                {/* Cabinets */}
                <g>
                  <rect x="400" y="50" width="150" height="200" fill="#7c3aed" opacity="0.8" rx="4"/>
                  <rect x="405" y="60" width="140" height="40" fill="#a78bfa" opacity="0.4" rx="2"/>
                  <rect x="405" y="110" width="140" height="40" fill="#a78bfa" opacity="0.4" rx="2"/>
                  <rect x="405" y="160" width="140" height="40" fill="#a78bfa" opacity="0.4" rx="2"/>
                  <rect x="405" y="210" width="140" height="30" fill="#a78bfa" opacity="0.4" rx="2"/>
                </g>

                {/* Lab Bench */}
                <rect x="0" y="280" width="600" height="120" fill="#94a3b8" rx="4"/>
                <rect x="0" y="280" width="600" height="20" fill="#cbd5e1" rx="4"/>

                {/* Equipment on Bench */}
                <g>
                  {/* Large Equipment Left */}
                  <rect x="30" y="150" width="100" height="130" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" rx="4"/>
                  <rect x="40" y="160" width="80" height="60" fill="#0ea5e9" opacity="0.6" rx="2"/>
                  <circle cx="80" cy="190" r="15" fill="#1e293b"/>
                  <circle cx="80" cy="190" r="8" fill="#0ea5e9">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                  </circle>

                  {/* Computer Monitor */}
                  <rect x="160" y="200" width="90" height="70" fill="#1e293b" rx="3"/>
                  <rect x="165" y="205" width="80" height="55" fill="#3b82f6" rx="2"/>
                  <rect x="170" y="215" width="70" height="6" fill="#bfdbfe" rx="1">
                    <animate attributeName="width" values="70;50;70" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="170" y="225" width="60" height="4" fill="#93c5fd" rx="1"/>
                  <rect x="170" y="232" width="65" height="4" fill="#93c5fd" rx="1"/>

                  {/* Microscope Center */}
                  <g transform="translate(280, 180)">
                    <rect x="15" y="90" width="30" height="8" fill="#64748b" rx="2"/>
                    <rect x="20" y="50" width="6" height="40" fill="#475569" rx="1"/>
                    <ellipse cx="23" cy="45" rx="12" ry="18" fill="#0ea5e9"/>
                    <rect x="19" y="28" width="8" height="12" fill="#475569" rx="1"/>
                    <circle cx="23" cy="63" r="6" fill="#1e293b"/>
                    <circle cx="23" cy="63" r="3" fill="#0ea5e9" opacity="0.7">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                  </g>

                  {/* Test Tubes Right */}
                  <g transform="translate(350, 220)">
                    <rect x="0" y="50" width="60" height="8" fill="#64748b" rx="2"/>
                    <rect x="8" y="25" width="8" height="25" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" rx="4"/>
                    <rect x="8" y="40" width="8" height="10" fill="#3b82f6" opacity="0.6" rx="4"/>
                    
                    <rect x="22" y="20" width="8" height="30" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" rx="4"/>
                    <rect x="22" y="38" width="8" height="12" fill="#ef4444" opacity="0.6" rx="4"/>
                    
                    <rect x="36" y="28" width="8" height="22" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" rx="4"/>
                    <rect x="36" y="42" width="8" height="8" fill="#10b981" opacity="0.6" rx="4"/>
                    
                    <rect x="50" y="23" width="8" height="27" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1" rx="4"/>
                    <rect x="50" y="40" width="8" height="10" fill="#f59e0b" opacity="0.6" rx="4"/>
                  </g>
                </g>

                {/* Floating particles */}
                <circle cx="100" cy="100" r="3" fill="#0ea5e9" opacity="0.4">
                  <animate attributeName="cy" values="100;80;100" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="500" cy="120" r="3" fill="#3b82f6" opacity="0.4">
                  <animate attributeName="cy" values="120;100;120" dur="3.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    100%
                  </motion.div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Automation</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bottom-4 left-1/3 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    100%
                  </motion.div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Cloud Backup Enabled</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: false }}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    100%
                  </motion.div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Real-time Analytics</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-medium"
            >
              Complete Solution
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Complete Solution for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Modern Laboratories
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: false }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              HEALTHSPIRE LIMS is a comprehensive laboratory management system that automates operations, ensures accuracy, and enhances patient satisfaction. Built for modern diagnostic labs with integrated analytics, finance tracking, and data security.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: false }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4"
            >
              {[
                { icon: '⚙️', value: '100%', label: 'Automation', color: 'blue' },
                { icon: '💾', value: '100%', label: 'Cloud Backup Enabled', color: 'cyan' },
                { icon: '📊', value: '100%', label: 'Real-time Analytics', color: 'purple' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`text-center ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Sticky Scroll Section with GSAP */}
    <StickyScrollSection />

    {/* Advanced Laboratory Management Features Section */}
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4"
          >
            Advanced Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Advanced Laboratory Management Features
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Streamline operations with intelligent automation
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: 'Sample Processing',
                description: 'End-to-end tracking & quality control',
                color: 'blue',
                delay: 0.1
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: 'Real-time Analytics',
                description: 'Live KPIs, turnaround metrics',
                color: 'cyan',
                delay: 0.2
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Quality Assurance',
                description: 'Built-in QC & audit logs',
                color: 'green',
                delay: 0.3
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Turnaround Optimization',
                description: 'Automated process efficiency',
                color: 'yellow',
                delay: 0.4
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Secure Data Storage',
                description: 'HIPAA-compliant cloud encryption',
                color: 'purple',
                delay: 0.5
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
                title: 'Instrument Integration',
                description: 'Seamless hardware data capture',
                color: 'indigo',
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: feature.delay, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group flex items-start gap-4 p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 dark:from-${feature.color}-900/30 dark:to-${feature.color}-800/30 rounded-lg flex items-center justify-center text-${feature.color}-600 dark:text-${feature.color}-400`}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex-shrink-0 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Microscope Image with Badges - match left height */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-[560px] md:min-h-[600px] lg:min-h-[640px]">
              <motion.img
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                src={img6}
                alt="3D medical illustration"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                onError={(e)=>{
                  const el = e.currentTarget as HTMLImageElement;
                  const state = el.dataset.fallback || '0';
                  if (state === '0') { el.src = 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=60'; el.dataset.fallback='1'; }
                  else if (state === '1') { el.src = 'https://images.pexels.com/photos/8376231/pexels-photo-8376231.jpeg?auto=compress&cs=tinysrgb&w=1600'; el.dataset.fallback='2'; }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/25" />
            </div>

            {/* Floating Badge - Accuracy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false }}
              className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: false }}
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-1"
                >
                  98.5%
                </motion.div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Accuracy Rate</div>
              </div>
            </motion.div>

            {/* Floating Badge - 24/7 Monitoring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: false }}
              className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: false }}
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1"
                >
                  24/7
                </motion.div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Monitoring</div>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
    
    {/* Why Choose Us Section */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/40 dark:from-gray-900 dark:to-gray-900/60 relative overflow-hidden antialiased">
      {/* Soft background orb */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white"
          >
            Why Choose Our Laboratory Management System?
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            {
              icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
              value: 90,
              suffix: '%',
              title: 'Faster Processing',
              desc: 'Automated workflows reduce manual work'
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
              value: 100,
              suffix: '%',
              title: 'Compliance Ready',
              desc: 'Built-in lab standards'
            },
            {
              icon: <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
              value: 24,
              suffix: '/7',
              title: 'Monitoring',
              desc: 'Real-time system alerts'
            },
            {
              icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />, 
              value: 300,
              suffix: '+',
              title: 'Labs Worldwide',
              desc: 'Trusted globally'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 180, damping: 20 } } }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group relative rounded-2xl bg-white dark:bg-gray-800 border border-blue-100/70 dark:border-gray-700/60 shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col h-full"
            >
              {/* subtle bottom accent */}
              <span className="absolute inset-x-4 -bottom-px h-[3px] rounded-full bg-gradient-to-r from-blue-400/60 to-cyan-400/60 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 ring-1 ring-blue-100/70 dark:ring-blue-800/40 mb-4">
                {item.icon}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                <AnimatedNumber value={item.value} delay={idx * 0.05} />
                <span className="ml-1 align-baseline text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">{item.suffix}</span>
              </div>
              <div className="mt-1 text-sm md:text-base text-gray-800 dark:text-gray-100 font-medium">{item.title}</div>
              <div className="mt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Complete Lab Package Section */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-8 md:mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Complete Lab Package</h3>
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">Everything you need to manage your laboratory efficiently</p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative rounded-3xl bg-white dark:bg-gray-800 border border-blue-100/70 dark:border-gray-700/60 shadow-xl p-4 sm:p-6 md:p-8"
        >
          {/* Top badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs md:text-sm shadow-lg ring-1 ring-white/20 flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-white/90" />
            Lifetime Access
          </div>

          {/* Price block */}
          <div className="text-center mt-4 md:mt-2">
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 tracking-wide">PKR</div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">49,000</div>
            <div className="mt-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">One‑time payment, lifetime updates</div>
          </div>

          {/* Divider */}
          <div className="my-6 md:my-8 h-px bg-gradient-to-r from-transparent via-blue-200/60 dark:via-gray-700 to-transparent" />

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {[
              'Complete Lab Management',
              'Automated Backups',
              'Patient Record Management',
              'Instrument Integration',
              '24/7 Technical Support',
              '20+ Report Templates',
              'Advanced Analytics',
              'Finance & Billing System',
              'Quality Assurance Tools',
              'Free Updates & Upgrades'
            ].map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: i % 2 ? 12 : -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.02 * i }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-start gap-2"
              >
                <span className="mt-0.5 inline-flex w-5 h-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <CheckCircle className="w-4 h-4" />
                </span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-200">{f}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="mt-6 md:mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm md:text-base font-medium py-3 shadow-lg shadow-blue-600/20 hover:from-blue-600 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-white" />
            Get Complete Package
          </motion.button>

          {/* Secure note */}
          <div className="mt-3 md:mt-4 flex items-center justify-center gap-3 text-[11px] md:text-xs text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Secure payment</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 30‑day money‑back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Testimonials Section with Slider */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm">Testimonials</span>
          <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Trusted by Laboratories Worldwide</h3>
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">See what our customers have to say</p>
        </motion.div>

        {/* Slider */}
        {(() => {
          const testimonials = [
            {
              name: 'Dr. Sarah Ahmed',
              role: 'Lab Director',
              org: 'MediCare Diagnostics',
              quote: 'HEALTHSPIRE has transformed our laboratory operations. Automated reporting and sample tracking reduced turnaround by 90%.',
              rating: 5,
              color: 'bg-pink-500'
            },
            {
              name: 'Dr. Kamran Ali',
              role: 'Chief Pathologist',
              org: 'HealthFirst Laboratory',
              quote: 'Best investment for our lab. Real‑time analytics help us make better decisions. Support is exceptional.',
              rating: 5,
              color: 'bg-emerald-500'
            },
            {
              name: 'Dr. Fatima Hassan',
              role: 'Laboratory Manager',
              org: 'Prime Diagnostics Center',
              quote: 'Outstanding LIMS. Finance module saved countless hours. System is intuitive and staff adapted quickly.',
              rating: 5,
              color: 'bg-indigo-500'
            }
          ];
          const [index, setIndex] = React.useState(0);
          const [paused, setPaused] = React.useState(false);
          const [progress, setProgress] = React.useState(0); // 0-100
          const durationMs = 5000;
          const safeIndex = (i: number) => (i + testimonials.length) % testimonials.length;
          const containerRef = React.useRef<HTMLDivElement>(null);
          const inView = useInView(containerRef, { amount: 0.3 });

          // RAF-based autoplay with progress
          React.useEffect(() => {
            if (paused || !inView) return; 
            let rafId = 0;
            let start: number | null = null;
            const tick = (t: number) => {
              if (start === null) start = t;
              const elapsed = t - start;
              const pct = Math.min(100, (elapsed / durationMs) * 100);
              setProgress(pct);
              if (elapsed >= durationMs) {
                setIndex((i) => safeIndex(i + 1));
                start = t; // reset for next slide
                setProgress(0);
              }
              rafId = requestAnimationFrame(tick);
            };
            rafId = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(rafId);
          }, [paused, inView]);

          // reset progress when slide manually changes
          React.useEffect(() => { setProgress(0); }, [index]);

          return (
            <div 
              className="relative" 
              onMouseEnter={() => setPaused(true)} 
              onMouseLeave={() => setPaused(false)}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Testimonials"
              aria-live="polite"
              ref={containerRef}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setIndex((i)=>safeIndex(i-1));
                if (e.key === 'ArrowRight') setIndex((i)=>safeIndex(i+1));
              }}
            >
              {/* Background orb */}
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-blue-500/10 blur-3xl" />

              {/* Controls */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 md:px-2 z-10">
                <button aria-label="Previous" onClick={() => setIndex((i) => safeIndex(i - 1))} className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow hover:scale-105 transition">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button aria-label="Next" onClick={() => setIndex((i) => safeIndex(i + 1))} className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow hover:scale-105 transition">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) setIndex((i)=>safeIndex(i+1));
                      if (info.offset.x > 50) setIndex((i)=>safeIndex(i-1));
                    }}
                  >
                    {[0, 1, 2].map((offset) => {
                      const t = testimonials[safeIndex(index + offset)];
                      return (
                        <div key={offset} className="group relative rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/60 shadow-sm hover:shadow-xl transition duration-300 p-5 md:p-6">
                          {/* quote icon */}
                          <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 dark:text-blue-900/50" />
                          {/* rating */}
                          <div className="flex items-center gap-1 text-amber-500 mb-3">
                            {Array.from({ length: t.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          {/* text */}
                          <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">“{t.quote}”</p>
                          {/* author */}
                          <div className="mt-4 flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-semibold`}>{t.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                              <div className="text-xs text-blue-600 dark:text-blue-400">{t.role}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{t.org}</div>
                            </div>
                          </div>
                          {/* bottom accent */}
                          <div className="absolute left-4 right-4 -bottom-px h-[3px] rounded-full bg-gradient-to-r from-blue-400/40 to-cyan-400/40 opacity-0 group-hover:opacity-100 transition"/>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* progress bar */}
              <div className="mt-6 mx-auto w-full max-w-sm h-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 overflow-hidden">
                <div className="h-full bg-blue-600 transition-none" style={{ width: `${progress}%` }} />
              </div>

              {/* dots */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIndex(i)} className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-blue-600' : 'w-2.5 bg-blue-200 dark:bg-blue-900'}`} aria-label={`Go to slide ${i+1}`} />
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </section>

    {/* Get Free Consultation Section */}
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm">Contact Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Get Free Consultation</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">Let's transform your laboratory workflow together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Left: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            {[{
              icon: <Phone className="w-5 h-5" />, title: 'Phone', value: '+92 329 6273720'
            },{
              icon: <Mail className="w-5 h-5" />, title: 'Email', value: 'info@healthspire.org'
            },{
              icon: <MapPin className="w-5 h-5" />, title: 'Address', value: "People's Colony, Gujranwala"
            }].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/60 shadow-sm px-4 py-4 md:px-5 md:py-5"
              >
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">{c.icon}</span>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{c.title}</div>
                  <div className="text-sm md:text-base font-medium text-gray-900 dark:text-white">{c.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Decorative image with subtle animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200/70 dark:border-gray-700/60 relative group"
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.01 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={img}
                alt="Modern laboratory microscope and equipment"
                loading="lazy"
                className="w-full h-full object-cover transform-gpu group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e)=>{
                  const el = e.currentTarget as HTMLImageElement;
                  const state = el.dataset.fallback || '0';
                  if (state === '0') {
                    el.src = 'https://images.unsplash.com/photo-1581093588401-16d15b43ca65?auto=format&fit=crop&w=1600&q=60';
                    el.dataset.fallback = '1';
                  } else if (state === '1') {
                    el.src = 'https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1600';
                    el.dataset.fallback = '2';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-cyan-600/10" />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={(e)=>{ e.preventDefault(); alert('Thanks! We will contact you shortly.'); }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/60 shadow-xl p-4 sm:p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                <input required placeholder="Enter your name" className="w-full rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Email Address</label>
                <input required type="email" placeholder="your@email.com" className="w-full rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Phone Number</label>
                <input required placeholder="+92 XXX XXXXXXX" className="w-full rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your laboratory requirements..." className="w-full rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 px-3 py-2.5 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>
            <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }} type="submit" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm md:text-base font-medium py-3 shadow-lg shadow-blue-600/20 hover:from-blue-600 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>

    </>
  );
};

export default LabPage;
