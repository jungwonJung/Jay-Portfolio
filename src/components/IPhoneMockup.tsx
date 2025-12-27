import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IPhoneMockupProps {
  children: React.ReactNode;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Responsive breakpoint detection
  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
      setCurrentTime(formattedTime);
    };

    // Update immediately
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !contentRef.current) return;
      
      const target = e.target as Node;
      
      // Skip scroll synchronization for elements inside contentRef
      if (contentRef.current.contains(target)) {
        return;
      }
      
      // Only handle scrolling from outside the mockup
      if (!scrollContainerRef.current.contains(target)) {
        e.preventDefault();
        
        const currentScroll = contentRef.current.scrollTop;
        const newScroll = currentScroll + e.deltaY;
        const maxScroll = contentRef.current.scrollHeight - contentRef.current.clientHeight;
        
        contentRef.current.scrollTop = Math.max(0, Math.min(newScroll, maxScroll));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Calculate scale for mobile to fit iPhone mockup
  const calculateMobileScale = () => {
    if (!isMobile) return 1;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 20; // Padding around mockup
    const mockupWidth = 393 + 24; // 393px + 12px border on each side
    const mockupHeight = 852 + 24; // 852px + 12px border on each side
    
    const availableWidth = viewportWidth - (padding * 2);
    const availableHeight = viewportHeight - (padding * 2);
    
    const scaleX = availableWidth / mockupWidth;
    const scaleY = availableHeight / mockupHeight;
    
    // Use the smaller scale to ensure it fits both dimensions
    const scale = Math.min(scaleX, scaleY, 1); // Don't scale up, only down
    return Math.max(scale, 0.5); // Minimum scale of 0.5
  };

  const mobileScale = calculateMobileScale();

  // Calculate scale for tablet
  const calculateTabletScale = () => {
    if (!isTablet) return 1;
    const viewportHeight = window.innerHeight;
    const maxHeight = viewportHeight * 0.85;
    const scale = Math.min(maxHeight / 852, 1);
    return Math.max(scale, 0.7); // Minimum scale of 0.7
  };

  const tabletScale = calculateTabletScale();
  const finalScale = isMobile ? mobileScale : (isTablet ? tabletScale : 1);
  
  const mockupStyle = {
    width: '393px',
    height: '852px',
    transform: `scale(${finalScale})`,
    transformOrigin: 'center center'
  };

  return (
    <motion.div 
      ref={scrollContainerRef}
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #D1E9FF 0%, #FFFFFF 50%, #E8D5FF 100%)',
        backgroundAttachment: 'fixed',
        padding: isMobile ? '20px' : (isTablet ? '2rem' : '1rem'),
        paddingTop: isMobile ? `calc(20px + env(safe-area-inset-top))` : undefined,
        paddingBottom: isMobile ? `calc(20px + env(safe-area-inset-bottom))` : undefined
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* iPhone Frame Container */}
      <div 
        className="relative"
        style={{
          ...mockupStyle,
          border: isTablet ? '8px solid #1C1C1E' : '12px solid #1C1C1E',
          borderRadius: isTablet ? '40px' : '50px',
          boxShadow: isTablet 
            ? '0 30px 60px -20px rgba(0, 0, 0, 0.15), 0 15px 40px rgba(0, 0, 0, 0.1)'
            : '0 50px 100px -20px rgba(0, 0, 0, 0.15), 0 20px 60px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#000000'
        }}
      >
        {/* Screen Content Area */}
        <div 
          className="w-full h-full bg-[#F2F2F7] relative flex flex-col overflow-hidden"
          style={{
            borderRadius: isTablet ? '32px' : '38px'
          }}
        >
          {/* Status Bar - Fixed at top with highest z-index */}
          <div 
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none"
            style={{ 
              height: '44px',
              zIndex: 100, // Status Bar level
              backgroundColor: '#F2F2F7', // iOS system background color
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div className="text-black text-[15px] font-semibold">
              {currentTime || '9:41'}
            </div>
            <div className="flex items-center gap-1.5">
              {/* Cellular Signal Strength - 4 bars */}
              <div className="flex items-end gap-[2px]" style={{ width: '18px', height: '10px' }}>
                <div className="bg-black" style={{ width: '2px', height: '3px' }}></div>
                <div className="bg-black" style={{ width: '2px', height: '5px' }}></div>
                <div className="bg-black" style={{ width: '2px', height: '7px' }}></div>
                <div className="bg-black" style={{ width: '2px', height: '10px' }}></div>
              </div>
              
              {/* Battery Icon - iOS style with accurate proportions */}
              <svg 
                width="25" 
                height="12" 
                viewBox="0 0 25 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                {/* Battery outline with rounded corners */}
                <rect 
                  x="0.5" 
                  y="1" 
                  width="19" 
                  height="10" 
                  rx="1.5" 
                  stroke="black" 
                  strokeWidth="1"
                  fill="none"
                />
                {/* Battery fill (almost full - showing ~95%) */}
                <rect 
                  x="1.5" 
                  y="2" 
                  width="17" 
                  height="8" 
                  rx="1" 
                  fill="black"
                />
                {/* Battery terminal (right side small rectangle) */}
                <rect 
                  x="20" 
                  y="3.5" 
                  width="1.5" 
                  height="5" 
                  rx="0.3" 
                  fill="black"
                />
              </svg>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto"
            style={{
              marginTop: '44px', // Start below Status Bar
              marginBottom: '34px',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              zIndex: 10
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {children}
          </div>

          {/* Home Indicator - Fixed at bottom (always visible, even on mobile) */}
          <div 
            className="absolute bottom-0 left-0 right-0 z-30 flex justify-center pointer-events-none"
            style={{ 
              height: '34px',
              paddingBottom: '8px'
            }}
          >
            <div 
              className="bg-black rounded-full"
              style={{
                width: '134px',
                height: '5px'
              }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IPhoneMockup;

