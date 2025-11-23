import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Stethoscope, ChevronRight, Play } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5, delay: delay + 0.2, type: 'spring' }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2"
    >
      {value}
    </motion.div>
    <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">{label}</div>
  </motion.div>
);

const WebHeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div style={{ opacity, scale }} className="w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full text-cyan-700 dark:text-cyan-400 text-sm font-medium mb-6"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Transform Your Hospital Operations</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hospital Operations
              </span>{' '}
              with Smart Management
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Streamline workflows, empower staff, and elevate patient experiences with intelligent
              tools designed for modern healthcare.
            </motion.p>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-4xl mt-8"
          >
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="rounded-3xl p-4 md:p-8 group">
                <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)]">
                  <defs>
                    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="ambulanceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#dc2626" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Sky Background */}
                  <rect width="600" height="450" fill="#e0f2fe" opacity="0.3"/>
                  
                  {/* Sun with Glow */}
                  <g>
                    <circle cx="520" cy="80" r="40" fill="#fbbf24" opacity="0.15">
                      <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="520" cy="80" r="32" fill="#fbbf24" opacity="0.3">
                      <animate attributeName="r" values="32;36;32" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="520" cy="80" r="25" fill="#fbbf24" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="520" cy="80" r="20" fill="#fde047"/>
                    {/* Sun rays */}
                    <g opacity="0.4">
                      <line x1="520" y1="50" x2="520" y2="35" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite"/>
                      </line>
                      <line x1="520" y1="110" x2="520" y2="125" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                      </line>
                      <line x1="490" y1="80" x2="475" y2="80" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="1s" repeatCount="indefinite"/>
                      </line>
                      <line x1="550" y1="80" x2="565" y2="80" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                      </line>
                      <line x1="498" y1="62" x2="488" y2="52" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="0.25s" repeatCount="indefinite"/>
                      </line>
                      <line x1="542" y1="62" x2="552" y2="52" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="0.75s" repeatCount="indefinite"/>
                      </line>
                      <line x1="498" y1="98" x2="488" y2="108" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="1.25s" repeatCount="indefinite"/>
                      </line>
                      <line x1="542" y1="98" x2="552" y2="108" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" begin="1.75s" repeatCount="indefinite"/>
                      </line>
                    </g>
                  </g>
                  
                  {/* Clouds */}
                  <g opacity="0.4">
                    <ellipse cx="100" cy="60" rx="40" ry="20" fill="#fff">
                      <animate attributeName="cx" values="100;120;100" dur="8s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="450" cy="80" rx="50" ry="25" fill="#fff">
                      <animate attributeName="cx" values="450;470;450" dur="10s" repeatCount="indefinite"/>
                    </ellipse>
                  </g>

                  {/* Ground */}
                  <rect x="0" y="380" width="600" height="70" fill="#86efac" opacity="0.3"/>
                  
                  {/* Hospital Building - Main Structure */}
                  <g>
                    {/* Main Building Body */}
                    <rect x="150" y="150" width="300" height="230" fill="url(#buildingGrad)" rx="8">
                      <animate attributeName="opacity" values="0.9;1;0.9" dur="4s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Building Outline */}
                    <rect x="150" y="150" width="300" height="230" fill="none" stroke="#0284c7" strokeWidth="3" rx="8"/>
                    
                    {/* Roof */}
                    <path d="M140 150 L300 100 L460 150 Z" fill="url(#roofGrad)" stroke="#0369a1" strokeWidth="2"/>
                    
                    {/* Large Medical Cross on Top */}
                    <g transform="translate(300, 120)">
                      <rect x="-8" y="-25" width="16" height="50" fill="#ef4444" rx="2" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="-25" y="-8" width="50" height="16" fill="#ef4444" rx="2" filter="url(#glow)">
                        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                      </rect>
                    </g>

                    {/* Windows - Floor 1 */}
                    <g opacity="0.9">
                      <rect x="170" y="180" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="3s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="230" y="180" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="3s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="290" y="180" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="3s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="350" y="180" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="3s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="410" y="180" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="3s" repeatCount="indefinite"/>
                      </rect>
                    </g>

                    {/* Windows - Floor 2 */}
                    <g opacity="0.9">
                      <rect x="170" y="235" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="3.5s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="230" y="235" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="3.5s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="290" y="235" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="3.5s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="350" y="235" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="3.5s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="410" y="235" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="3.5s" repeatCount="indefinite"/>
                      </rect>
                    </g>

                    {/* Windows - Floor 3 */}
                    <g opacity="0.9">
                      <rect x="170" y="290" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="4s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="230" y="290" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="4s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="290" y="290" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="4s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="350" y="290" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#a5f3fc;#67e8f9;#a5f3fc" dur="4s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="410" y="290" width="40" height="35" fill="#67e8f9" rx="3" stroke="#0284c7" strokeWidth="2">
                        <animate attributeName="fill" values="#67e8f9;#a5f3fc;#67e8f9" dur="4s" repeatCount="indefinite"/>
                      </rect>
                    </g>

                    {/* Main Entrance */}
                    <rect x="260" y="320" width="80" height="60" fill="#0369a1" rx="4" stroke="#0284c7" strokeWidth="2"/>
                    <rect x="270" y="330" width="60" height="50" fill="#67e8f9" opacity="0.6" rx="3"/>
                    
                    {/* Emergency Sign */}
                    <rect x="240" y="340" width="120" height="25" fill="#ef4444" rx="3">
                      <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
                    </rect>
                    <text x="300" y="357" fontSize="14" fill="white" fontWeight="bold" textAnchor="middle">EMERGENCY</text>
                  </g>

                  {/* Ambulance - Enhanced Animation */}
                  <g>
                    {/* Ambulance Body */}
                    <rect x="50" y="340" width="85" height="42" fill="url(#ambulanceGrad)" rx="5" stroke="#b91c1c" strokeWidth="2">
                      <animate attributeName="x" values="-100;-100;180;180;180;550;550" dur="16s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Windshield */}
                    <rect x="55" y="345" width="32" height="22" fill="#67e8f9" opacity="0.7" rx="2">
                      <animate attributeName="x" values="-95;-95;185;185;185;555;555" dur="16s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Front Grill */}
                    <rect x="50" y="355" width="5" height="20" fill="#7f1d1d" rx="1">
                      <animate attributeName="x" values="-100;-100;180;180;180;550;550" dur="16s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Back Door */}
                    <rect x="115" y="348" width="18" height="28" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" rx="2">
                      <animate attributeName="x" values="-15;-15;245;245;245;615;615" dur="16s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Door Handle */}
                    <circle cx="118" cy="362" r="2" fill="#fca5a5">
                      <animate attributeName="cx" values="-12;-12;248;248;248;618;618" dur="16s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Wheels */}
                    <g>
                      <circle cx="70" cy="382" r="9" fill="#1f2937" stroke="#374151" strokeWidth="2.5">
                        <animate attributeName="cx" values="-80;-80;200;200;200;570;570" dur="16s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="70" cy="382" r="5" fill="#4b5563">
                        <animate attributeName="cx" values="-80;-80;200;200;200;570;570" dur="16s" repeatCount="indefinite"/>
                      </circle>
                      
                      <circle cx="115" cy="382" r="9" fill="#1f2937" stroke="#374151" strokeWidth="2.5">
                        <animate attributeName="cx" values="-35;-35;245;245;245;615;615" dur="16s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="115" cy="382" r="5" fill="#4b5563">
                        <animate attributeName="cx" values="-35;-35;245;245;245;615;615" dur="16s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                    
                    {/* Red Cross on Ambulance */}
                    <g>
                      <rect x="100" y="352" width="5" height="18" fill="white" rx="1">
                        <animate attributeName="x" values="-30;-30;230;230;230;600;600" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="93" y="359" width="19" height="5" fill="white" rx="1">
                        <animate attributeName="x" values="-37;-37;223;223;223;593;593" dur="16s" repeatCount="indefinite"/>
                      </rect>
                    </g>
                    
                    {/* Flashing Emergency Light */}
                    <circle cx="115" cy="335" r="5" fill="#fbbf24" filter="url(#glow)">
                      <animate attributeName="cx" values="-15;-15;245;245;245;615;615" dur="16s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="1;0.3;1;0.3;1" dur="0.6s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Side Mirror */}
                    <rect x="85" y="348" width="3" height="6" fill="#7f1d1d" rx="1">
                      <animate attributeName="x" values="-45;-45;215;215;215;585;585" dur="16s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Stretcher Scene - Patient being carried by Paramedic */}
                  <g opacity="0">
                    <animate attributeName="opacity" values="0;0;0;0;1;1;1;1;0;0" dur="16s" repeatCount="indefinite"/>
                    
                    {/* Combined Shadow for stretcher and paramedic */}
                    <ellipse cx="235" cy="385" rx="35" ry="6" fill="#000" opacity="0.2">
                      <animate attributeName="cx" values="235;235;235;235;235;270;285;295;295;295" dur="16s" repeatCount="indefinite"/>
                      <animate attributeName="rx" values="35;35;35;35;35;35;30;25;25;25" dur="16s" repeatCount="indefinite"/>
                    </ellipse>
                    
                    {/* STRETCHER */}
                    <g>
                      {/* Stretcher Frame - Top View with 3D effect */}
                      <rect x="200" y="365" width="50" height="18" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" rx="2">
                        <animate attributeName="x" values="200;200;200;200;200;235;250;260;260;260" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* Stretcher Mattress */}
                      <rect x="202" y="367" width="46" height="14" fill="#f3f4f6" rx="1">
                        <animate attributeName="x" values="202;202;202;202;202;237;252;262;262;262" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* Stretcher Side Rails */}
                      <rect x="200" y="365" width="50" height="2" fill="#6b7280">
                        <animate attributeName="x" values="200;200;200;200;200;235;250;260;260;260" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="200" y="381" width="50" height="2" fill="#6b7280">
                        <animate attributeName="x" values="200;200;200;200;200;235;250;260;260;260" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* Stretcher Wheels */}
                      <circle cx="205" cy="383" r="3" fill="#374151">
                        <animate attributeName="cx" values="205;205;205;205;205;240;255;265;265;265" dur="16s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="245" cy="383" r="3" fill="#374151">
                        <animate attributeName="cx" values="245;245;245;245;245;280;295;305;305;305" dur="16s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                    
                    {/* PATIENT ON STRETCHER */}
                    <g>
                      {/* Patient Body lying down */}
                      <rect x="205" y="368" width="38" height="12" fill="#93c5fd" rx="2">
                        <animate attributeName="x" values="205;205;205;205;205;240;255;265;265;265" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* Patient Head */}
                      <circle cx="242" cy="374" r="5" fill="#fcd34d">
                        <animate attributeName="cx" values="242;242;242;242;242;277;292;302;302;302" dur="16s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Patient Hair */}
                      <ellipse cx="242" cy="372" rx="5" ry="3" fill="#78350f" opacity="0.7">
                        <animate attributeName="cx" values="242;242;242;242;242;277;292;302;302;302" dur="16s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Blanket/Sheet over patient */}
                      <rect x="207" y="370" width="32" height="9" fill="#dbeafe" opacity="0.8" rx="1">
                        <animate attributeName="x" values="207;207;207;207;207;242;257;267;267;267" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* IV Bag Stand */}
                      <line x1="248" y1="383" x2="248" y2="355" stroke="#9ca3af" strokeWidth="1.5">
                        <animate attributeName="x1" values="248;248;248;248;248;283;298;308;308;308" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="248;248;248;248;248;283;298;308;308;308" dur="16s" repeatCount="indefinite"/>
                      </line>
                      
                      {/* IV Bag */}
                      <rect x="246" y="355" width="6" height="10" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" rx="1">
                        <animate attributeName="x" values="246;246;246;246;246;281;296;306;306;306" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* IV Tube */}
                      <path d="M248 365 Q245 368 243 372" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.6">
                        <animate attributeName="d" values="M248 365 Q245 368 243 372;M248 365 Q245 368 243 372;M248 365 Q245 368 243 372;M248 365 Q245 368 243 372;M248 365 Q245 368 243 372;M283 365 Q280 368 278 372;M298 365 Q295 368 293 372;M308 365 Q305 368 303 372;M308 365 Q305 368 303 372;M308 365 Q305 368 303 372" dur="16s" repeatCount="indefinite"/>
                      </path>
                    </g>
                    
                    {/* PARAMEDIC pushing stretcher */}
                    <g>
                      {/* Paramedic Body */}
                      <rect x="195" y="355" width="12" height="22" fill="#059669" rx="2">
                        <animate attributeName="x" values="195;195;195;195;195;230;245;255;255;255" dur="16s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* Paramedic Head */}
                      <circle cx="201" cy="350" r="5" fill="#fbbf24">
                        <animate attributeName="cx" values="201;201;201;201;201;236;251;261;261;261" dur="16s" repeatCount="indefinite"/>
                      </circle>
                      
                      {/* Paramedic Hair/Cap */}
                      <ellipse cx="201" cy="348" rx="5" ry="3" fill="#065f46" opacity="0.8">
                        <animate attributeName="cx" values="201;201;201;201;201;236;251;261;261;261" dur="16s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Medical Cross Badge on uniform */}
                      <g>
                        <rect x="199" y="360" width="1.5" height="5" fill="#fff" rx="0.5">
                          <animate attributeName="x" values="199;199;199;199;199;234;249;259;259;259" dur="16s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="197.5" y="361.5" width="4.5" height="1.5" fill="#fff" rx="0.5">
                          <animate attributeName="x" values="197.5;197.5;197.5;197.5;197.5;232.5;247.5;257.5;257.5;257.5" dur="16s" repeatCount="indefinite"/>
                        </rect>
                      </g>
                      
                      {/* Paramedic Arms pushing stretcher */}
                      <line x1="207" y1="362" x2="200" y2="368" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="x1" values="207;207;207;207;207;242;257;267;267;267" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="200;200;200;200;200;235;250;260;260;260" dur="16s" repeatCount="indefinite"/>
                      </line>
                      <line x1="195" y1="362" x2="202" y2="368" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="x1" values="195;195;195;195;195;230;245;255;255;255" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="202;202;202;202;202;237;252;262;262;262" dur="16s" repeatCount="indefinite"/>
                      </line>
                      
                      {/* Paramedic Legs - Walking animation */}
                      <line x1="199" y1="377" x2="197" y2="387" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="x1" values="199;199;199;199;199;234;249;259;259;259" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="197;197;197;197;197;232;247;257;257;257" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="y2" values="387;387;387;387;387;387;390;387;387;387" dur="16s" repeatCount="indefinite"/>
                      </line>
                      <line x1="203" y1="377" x2="205" y2="387" stroke="#059669" strokeWidth="2.5" strokeLinecap="round">
                        <animate attributeName="x1" values="203;203;203;203;203;238;253;263;263;263" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="205;205;205;205;205;240;255;265;265;265" dur="16s" repeatCount="indefinite"/>
                        <animate attributeName="y2" values="387;387;387;387;387;390;387;387;387;387" dur="16s" repeatCount="indefinite"/>
                      </line>
                    </g>
                  </g>

                  {/* Trees - Enhanced with Multiple Layers */}
                  <g opacity="0.75">
                    {/* Tree 1 - Left */}
                    <g>
                      {/* Shadow */}
                      <ellipse cx="485" cy="395" rx="20" ry="5" fill="#000" opacity="0.15"/>
                      
                      {/* Trunk */}
                      <rect x="478" y="365" width="14" height="30" fill="#78350f" rx="2">
                        <animate attributeName="x" values="478;477;478;479;478" dur="4s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="480" y="365" width="10" height="30" fill="#92400e" rx="1" opacity="0.6"/>
                      
                      {/* Foliage - Back Layer */}
                      <ellipse cx="485" cy="360" rx="32" ry="42" fill="#16a34a" opacity="0.6">
                        <animate attributeName="ry" values="42;44;42" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="rx" values="32;30;32" dur="4s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Foliage - Middle Layer */}
                      <ellipse cx="482" cy="355" rx="28" ry="38" fill="#22c55e">
                        <animate attributeName="ry" values="38;40;38" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="rx" values="28;26;28" dur="4s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Foliage - Front Layer */}
                      <ellipse cx="488" cy="352" rx="24" ry="32" fill="#34d399" opacity="0.8">
                        <animate attributeName="ry" values="32;34;32" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="rx" values="24;22;24" dur="4s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Highlights */}
                      <ellipse cx="478" cy="345" rx="8" ry="12" fill="#6ee7b7" opacity="0.5"/>
                      <ellipse cx="492" cy="350" rx="6" ry="10" fill="#6ee7b7" opacity="0.4"/>
                    </g>
                    
                    {/* Tree 2 - Right */}
                    <g>
                      {/* Shadow */}
                      <ellipse cx="525" cy="395" rx="18" ry="5" fill="#000" opacity="0.15"/>
                      
                      {/* Trunk */}
                      <rect x="520" y="360" width="12" height="35" fill="#78350f" rx="2">
                        <animate attributeName="x" values="520;519;520;521;520" dur="4.5s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="522" y="360" width="8" height="35" fill="#92400e" rx="1" opacity="0.6"/>
                      
                      {/* Foliage - Back Layer */}
                      <ellipse cx="526" cy="355" rx="28" ry="38" fill="#16a34a" opacity="0.6">
                        <animate attributeName="ry" values="38;40;38" dur="4.5s" repeatCount="indefinite"/>
                        <animate attributeName="rx" values="28;26;28" dur="4.5s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Foliage - Middle Layer */}
                      <ellipse cx="524" cy="350" rx="24" ry="34" fill="#22c55e">
                        <animate attributeName="ry" values="34;36;34" dur="4.5s" repeatCount="indefinite"/>
                        <animate attributeName="rx" values="24;22;24" dur="4.5s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Foliage - Front Layer */}
                      <ellipse cx="528" cy="348" rx="20" ry="28" fill="#34d399" opacity="0.8">
                        <animate attributeName="ry" values="28;30;28" dur="4.5s" repeatCount="indefinite"/>
                        <animate attributeName="rx" values="20;18;20" dur="4.5s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Highlights */}
                      <ellipse cx="520" cy="342" rx="7" ry="10" fill="#6ee7b7" opacity="0.5"/>
                      <ellipse cx="532" cy="346" rx="5" ry="8" fill="#6ee7b7" opacity="0.4"/>
                    </g>
                    
                    {/* Tree 3 - Far Right (Smaller) */}
                    <g>
                      {/* Shadow */}
                      <ellipse cx="560" cy="395" rx="14" ry="4" fill="#000" opacity="0.15"/>
                      
                      {/* Trunk */}
                      <rect x="556" y="370" width="10" height="25" fill="#78350f" rx="2">
                        <animate attributeName="x" values="556;555;556;557;556" dur="5s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="558" y="370" width="6" height="25" fill="#92400e" rx="1" opacity="0.6"/>
                      
                      {/* Foliage - Back Layer */}
                      <ellipse cx="561" cy="365" rx="22" ry="30" fill="#16a34a" opacity="0.6">
                        <animate attributeName="ry" values="30;32;30" dur="5s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Foliage - Front Layer */}
                      <ellipse cx="561" cy="362" rx="18" ry="26" fill="#22c55e">
                        <animate attributeName="ry" values="26;28;26" dur="5s" repeatCount="indefinite"/>
                      </ellipse>
                      
                      {/* Highlight */}
                      <ellipse cx="558" cy="356" rx="6" ry="9" fill="#34d399" opacity="0.6"/>
                    </g>
                  </g>

                  {/* Floating Medical Icons */}
                  <g opacity="0.3">
                    {/* Plus Signs */}
                    <g transform="translate(80, 200)">
                      <line x1="-6" y1="0" x2="6" y2="0" stroke="#06b6d4" strokeWidth="2"/>
                      <line x1="0" y1="-6" x2="0" y2="6" stroke="#06b6d4" strokeWidth="2"/>
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite"/>
                      <animateTransform attributeName="transform" type="rotate" values="0 80 200;360 80 200" dur="20s" repeatCount="indefinite"/>
                    </g>
                    
                    <g transform="translate(520, 250)">
                      <line x1="-6" y1="0" x2="6" y2="0" stroke="#3b82f6" strokeWidth="2"/>
                      <line x1="0" y1="-6" x2="0" y2="6" stroke="#3b82f6" strokeWidth="2"/>
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
                      <animateTransform attributeName="transform" type="rotate" values="0 520 250;360 520 250" dur="15s" repeatCount="indefinite"/>
                    </g>

                    {/* Heartbeat */}
                    <path d="M30 280 L50 280 L60 265 L70 295 L80 280 L100 280" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="3s" repeatCount="indefinite"/>
                    </path>
                  </g>
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Buttons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700"
            >
              <Play className="w-5 h-5" />
              Watch Overview Video
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 max-w-3xl w-full"
          >
            <StatCard value="500+" label="Hospitals" delay={0.7} />
            <StatCard value="1M+" label="Patients" delay={0.8} />
            <StatCard value="99.9%" label="Uptime" delay={0.9} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebHeroSection;
