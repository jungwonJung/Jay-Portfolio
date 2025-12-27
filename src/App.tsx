import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingHero from "./components/LandingHero";

const App: React.FC = () => {
  const location = useLocation();
  // Zero Logic Initialization - ALWAYS true on mount/refresh, NO conditionals
  const [showLanding, setShowLanding] = useState(true);
  const isInitialMountRef = React.useRef(true);
  const previousPathnameRef = React.useRef<string | null>(null);


  // Force light mode and responsive body styles
  React.useEffect(() => {
    document.documentElement.classList.remove('dark');
    
    // Always use gradient background (mockup is now visible on all screen sizes)
    document.body.style.background = 'linear-gradient(135deg, #D1E9FF 0%, #FFFFFF 50%, #E8D5FF 100%)';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100vh';
    
    // Reset scroll position to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Handle navigation and skipLanding flag
  useEffect(() => {
    // CRITICAL: On initial mount/refresh, ignore location.state completely
    // This ensures refresh always shows landing page, even if state persists
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      previousPathnameRef.current = location.pathname;
      return;
    }

    // After initial mount, only react to actual navigation changes
    // Check if pathname changed (user navigated)
    if (previousPathnameRef.current !== location.pathname) {
      previousPathnameRef.current = location.pathname;
      
      // If navigating away from home, hide landing page
      if (location.pathname !== '/') {
        setShowLanding(false);
      }
      // If navigating to home with skipLanding flag (user clicked back button), hide landing
      else if (location.state?.skipLanding) {
        setShowLanding(false);
      }
      // If navigating to home without skipLanding flag, keep landing visible
      // (This handles the case where user manually navigates to home)
    }
    // If pathname didn't change but state changed (e.g., refresh with state in history)
    // We ignore it on refresh - only react to actual navigation
  }, [location.pathname, location.state]);

  const handleScrollDown = () => {
    // Hide landing page and show main content
    setShowLanding(false);
    
    // If we're not on home route, navigate to home first
    if (location.pathname !== '/') {
      // Navigate to home without skipLanding flag (will show landing again on next refresh)
      window.location.href = '/';
      return;
    }
    
    // Smooth scroll to iPhone section
    setTimeout(() => {
      const iphoneSection = document.getElementById('iphone-section');
      if (iphoneSection) {
        iphoneSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  // Force render: Landing page must be rendered BEFORE Router/Outlet
  // showLanding must be false before any other content is mounted
  return (
    <>
      {showLanding ? (
        <LandingHero key="landing" onScrollDown={handleScrollDown} />
      ) : (
        <AnimatePresence mode="wait">
          <div 
            key="content"
            id="iphone-section" 
            className="relative z-10"
            style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}
          >
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
