import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface LandingHeroProps {
  onScrollDown: () => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onScrollDown }) => {
  const handleScrollDown = () => {
    onScrollDown();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #D1E9FF 0%, #FFFFFF 50%, #E8D5FF 100%)',
        pointerEvents: 'auto'
      }}
    >
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center px-4 w-full max-w-4xl"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}
      >
        {/* Welcome Text with Apple-style Animation */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 mb-4"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1], // Apple's custom easing curve
            delay: 0.2
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4
            }}
          >
            Welcome
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6
          }}
        >
          iOS Developer
        </motion.h2>
        
        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8
          }}
        >
          Jay's Portfolio
        </motion.h3>
      </motion.div>

      {/* Bouncing Arrow - Responsive positioning */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
        style={{ 
          bottom: 'calc(5rem + env(safe-area-inset-bottom))',
          marginBottom: 'env(safe-area-inset-bottom)'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.2, duration: 0.5 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <HiChevronDown className="w-10 h-10 text-gray-700" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default LandingHero;

