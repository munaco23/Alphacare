import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  hospital: string;
  image: string;
  rating: number;
  review: string;
  specialty?: string;
}

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr. Emily Chen',
      role: 'Chief of Surgery',
      hospital: 'St. Mary\'s Medical Center',
      specialty: 'Cardiothoracic Surgery',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      rating: 5,
      review: 'H4Health has completely transformed how we manage patient records and surgical schedules. The intuitive interface and robust features have increased our efficiency by 40%. Absolutely outstanding!'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      role: 'Hospital Administrator',
      hospital: 'Central City Hospital',
      specialty: 'Healthcare Management',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 5,
      review: 'The best healthcare management system we\'ve ever used. The analytics dashboard provides real-time insights that help us make better decisions. Customer support is exceptional!'
    },
    {
      id: 3,
      name: 'Dr. Sarah Thompson',
      role: 'Head of Pediatrics',
      hospital: 'Children\'s Healthcare Network',
      specialty: 'Pediatric Medicine',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      rating: 5,
      review: 'As a pediatrician, I need systems that are both powerful and easy to use. H4Health delivers on both fronts. Our patient satisfaction scores have improved significantly since implementation.'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      role: 'Laboratory Director',
      hospital: 'Advanced Diagnostics Lab',
      specialty: 'Clinical Pathology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      rating: 5,
      review: 'The laboratory management module is phenomenal. Sample tracking, result reporting, and quality control have never been easier. This platform is a game-changer for modern labs.'
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      role: 'Pharmacy Manager',
      hospital: 'Metro Health Pharmacy',
      specialty: 'Clinical Pharmacy',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      rating: 5,
      review: 'Inventory management and prescription processing are seamless with H4Health. The automated alerts for drug interactions have prevented several potential issues. Highly recommended!'
    },
    {
      id: 6,
      name: 'Dr. Robert Kumar',
      role: 'Emergency Medicine Director',
      hospital: 'Rapid Response Medical Center',
      specialty: 'Emergency Medicine',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 5,
      review: 'In emergency medicine, every second counts. H4Health\'s quick access to patient histories and real-time bed management has literally helped us save lives. Incredible system!'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating Quote Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <Quote className="w-8 h-8 text-cyan-300/20 dark:text-cyan-500/10" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        style={{ opacity }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6 shadow-lg"
          >
            <Star className="w-8 h-8 text-white fill-white" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Clients Say</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Hear from healthcare professionals who have transformed their operations with H4Health
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative h-[500px] md:h-[450px] perspective-1000">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.5 }
              }}
              className="absolute inset-0"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />
                
                {/* Quote Icon Background */}
                <div className="absolute top-8 right-8 opacity-5">
                  <Quote className="w-32 h-32 text-cyan-500" />
                </div>

                <div className="relative p-8 md:p-12 h-full flex flex-col">
                  {/* Header with Image and Info */}
                  <div className="flex items-start gap-6 mb-8">
                    {/* Profile Image */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="relative flex-shrink-0"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-4 ring-cyan-400/30 shadow-lg">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800" />
                    </motion.div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                      >
                        {testimonials[currentIndex].name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-cyan-500 font-semibold mb-1"
                      >
                        {testimonials[currentIndex].role}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 dark:text-gray-400 text-sm"
                      >
                        {testimonials[currentIndex].hospital}
                      </motion.p>
                      {testimonials[currentIndex].specialty && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                          className="inline-block mt-2 px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full"
                        >
                          {testimonials[currentIndex].specialty}
                        </motion.span>
                      )}
                    </div>

                    {/* Rating Stars */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                      className="flex gap-1"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Review Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex-1"
                  >
                    <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                      "{testimonials[currentIndex].review}"
                    </p>
                  </motion.div>

                  {/* Decorative bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Auto-playing • Click arrows or dots to navigate
            </p>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '2,500+', label: 'Reviews' },
            { value: '98%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
