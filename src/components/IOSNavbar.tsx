import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface IOSNavbarProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
  scrolled?: boolean;
}

const IOSNavbar: React.FC<IOSNavbarProps> = ({ 
  title, 
  showBackButton = false,
  onBack,
  scrolled: externalScrolled
}) => {
  const [internalScrolled, setInternalScrolled] = useState(false);
  const navigate = useNavigate();
  
  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled;

  useEffect(() => {
    if (externalScrolled !== undefined) return; // Use external scroll state if provided
    
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [externalScrolled]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <nav 
      className="sticky border-b border-iosSeparator-light/30"
      style={{
        top: '0px', // Always stick to top of scrollable container (works in both mobile scaled mockup and desktop)
        height: '44px',
        zIndex: 90, // Below Status Bar (100), above content (1)
        backgroundColor: '#F2F2F7',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        marginTop: '0px',
        position: 'sticky'
      }}
    >
      <div className="flex items-center justify-center h-full relative" style={{ height: '100%' }}>
        {/* Back Button - Vertically centered */}
        {showBackButton && (
          <button
            onClick={handleBack}
            className="absolute left-4 flex items-center justify-center"
            style={{
              height: '44px', // Match Navigation Bar height
              width: '44px', // Touch target size
              marginLeft: '-4px' // Slight left offset for visual alignment
            }}
            aria-label="Back"
          >
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              className="text-iosLabel-light"
            >
              <path
                d="M11 2L3 10L11 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Inline Title (shown when scrolled) */}
        <AnimatePresence mode="wait">
          {scrolled && (
            <motion.h1
              key="small"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-[17px] font-semibold text-iosLabel-light"
            >
              {title}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default IOSNavbar;

