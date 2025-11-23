import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';

gsap.registerPlugin(ScrollTrigger);

const StickyScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.card-item');
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
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
      title: 'Doctor Performance Overview',
      points: [
        'Track revenue and commission in real-time',
        'Monitor patient count and appointments',
        'View detailed doctor performance metrics',
        'Analyze fee structures and commission rates',
      ],
    },
    {
      id: 2,
      image: img2,
      title: 'Token Management System',
      points: [
        'Generate and manage patient tokens',
        'Real-time token tracking and analytics',
        "View today's appointments and revenue",
        'Export data for reporting and analysis',
      ],
    },
    {
      id: 3,
      image: img3,
      title: 'Patient Registration',
      points: [
        'Quick patient information entry',
        'Search by MR number or phone',
        'Select doctor and department easily',
        'Manage billing and fee details',
      ],
    },
    {
      id: 4,
      image: img4,
      title: 'Data Backup & Security',
      points: [
        'Automated backup scheduling',
        'Export and import data securely',
        'Never lose important patient records',
        'Manual and automatic backup options',
      ],
    },
    {
      id: 5,
      image: img5,
      title: 'Analytics Dashboard',
      points: [
        'Doctor-wise revenue analysis',
        'Patient count and trends',
        'Custom date range filtering',
        'Comprehensive performance insights',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative">
      <div className="w-full py-16 bg-white dark:bg-gray-900 flex justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
          Powerful Features
        </h2>
      </div>

      {cards.map((card) => (
        <div key={card.id} className="card-item w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <div className="w-[90%] md:w-[80%] h-auto md:h-[85vh] flex-shrink-0 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-[30%] md:h-[63%] bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{card.title}</h3>
              <div className="space-y-4">
                {card.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[70%] h-auto md:h-full overflow-hidden flex justify-center items-center mt-6 md:mt-0">
              <div className="w-full md:w-[90%] h-auto md:h-[100%]">
                <img src={card.image} alt={card.title} className="w-full h-auto md:h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StickyScrollSection;
