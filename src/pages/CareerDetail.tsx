import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Code, 
  Database,
  Zap,
  Rocket,
  CheckCircle
} from 'lucide-react';
import IOSNavbar from '../components/IOSNavbar';
import IOSGroup from '../components/IOSGroup';
import IOSRow from '../components/IOSRow';
import IPhoneMockup from '../components/IPhoneMockup';
import { careerItems } from '../data/career';

// Helper function to format text with bold keywords
const formatDescriptionText = (text: string): React.ReactNode => {
  // Order matters: longer phrases first to avoid partial matches
  const keywords = [
    'Scalable Backend', 'RESTful APIs', 'REST APIs', 'Machine Learning',
    'App Store', 'Privacy-first', 'on-device', 'MapKit', 'CoreLocation',
    'SwiftUI', 'TypeScript', 'NestJS', 'Infrastructure', 'UIKit',
    'Swift', 'React', 'iOS', 'UI/UX', 'GPS', 'MVVM', 'offline',
    'MySQL', 'MongoDB', 'Elasticsearch', 'test coverage', 'API documentation'
  ];
  
  // Create a regex pattern that matches any of the keywords (case insensitive)
  const escapedKeywords = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
  
  // Split text by keywords and map to React elements
  const parts = text.split(pattern);
  
  return (
    <>
      {parts.map((part, index) => {
        // Check if this part is a keyword (case-insensitive check)
        const isKeyword = keywords.some(keyword => 
          part.toLowerCase() === keyword.toLowerCase()
        );
        
        if (isKeyword) {
          return <strong key={index} className="font-semibold">{part}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

// Helper function to get icon for career achievements
const getAchievementIcon = (achievement: string): React.ReactNode => {
  const iconClass = "w-5 h-5 text-blue-500";
  const lowerAchievement = achievement.toLowerCase();
  
  if (lowerAchievement.includes('api') || lowerAchievement.includes('backend') || lowerAchievement.includes('server')) {
    return <Code className={iconClass} />;
  }
  if (lowerAchievement.includes('database') || lowerAchievement.includes('mysql') || lowerAchievement.includes('mongodb') || lowerAchievement.includes('elasticsearch')) {
    return <Database className={iconClass} />;
  }
  if (lowerAchievement.includes('speed') || lowerAchievement.includes('latency') || lowerAchievement.includes('performance') || lowerAchievement.includes('time')) {
    return <Zap className={iconClass} />;
  }
  if (lowerAchievement.includes('test') || lowerAchievement.includes('coverage') || lowerAchievement.includes('reliability')) {
    return <CheckCircle className={iconClass} />;
  }
  if (lowerAchievement.includes('growth') || lowerAchievement.includes('funding') || lowerAchievement.includes('series')) {
    return <Rocket className={iconClass} />;
  }
  if (lowerAchievement.includes('team') || lowerAchievement.includes('collaborat') || lowerAchievement.includes('train')) {
    return <Users className={iconClass} />;
  }
  if (lowerAchievement.includes('accuracy') || lowerAchievement.includes('quality') || lowerAchievement.includes('standard')) {
    return <Award className={iconClass} />;
  }
  if (lowerAchievement.includes('improve') || lowerAchievement.includes('increase') || lowerAchievement.includes('reduce')) {
    return <TrendingUp className={iconClass} />;
  }
  
  // Default icon
  return <Target className={iconClass} />;
};

const CareerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const career = careerItems.find(c => c.id === id);
  const [scrolled, setScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrolled(scrollContainerRef.current.scrollTop > 50);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (!career) {
    return (
      <IPhoneMockup>
        <div className="min-h-screen bg-[#F2F2F7]">
          <IOSNavbar title="Career" showBackButton onBack={() => navigate('/')} />
          <div className="px-4 pt-8 text-center" style={{ paddingLeft: '16px', paddingRight: '16px' }}>
            <p className="text-iosSecondaryLabel-light">
              Career not found
            </p>
          </div>
        </div>
      </IPhoneMockup>
    );
  }

  return (
    <IPhoneMockup>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        className="w-full flex flex-col bg-[#F2F2F7] relative"
        style={{ 
          paddingTop: '0px',
          minHeight: '100%' // Ensure container has height for sticky to work
        }}
      >
        {/* Navigation Bar - Sticky, positioned right below Status Bar */}
        <IOSNavbar 
          title={career.company} 
          showBackButton 
          onBack={() => navigate('/', { state: { skipLanding: true } })}
          scrolled={scrolled}
        />

        {/* Scrollable Content Area - Starts below Navigation Bar */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto relative"
          style={{ 
            paddingLeft: '16px', 
            paddingRight: '16px',
            paddingTop: '0px', // Start directly below Navigation Bar
            zIndex: 10
          }}
        >
          {/* Large Title Section (shown when at top, scrolls with content) */}
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 pb-2"
            >
              <h1 className="text-[34px] font-bold text-iosLabel-light">
                {career.company}
              </h1>
            </motion.div>
          )}

          {/* Top Header Section */}
          <div className="mb-4 mt-2">
            <div className="flex items-start gap-4 mb-3">
              {/* Company Icon/Logo */}
              <div 
                className="w-[60px] h-[60px] rounded-xl bg-iosGroupedBg-light flex items-center justify-center flex-shrink-0"
                style={{ borderRadius: '12px' }}
              >
                <HiOutlineBriefcase className="w-8 h-8 text-iosLabel-light" />
              </div>
              
              {/* Company Name, Role, Period */}
              <div className="flex-1">
                {scrolled && (
                  <h1 className="text-[22px] font-bold text-iosLabel-light mb-1">
                    {career.company}
                  </h1>
                )}
                <p className="text-[17px] font-semibold text-iosLabel-light mb-1">
                  {career.role}
                </p>
                <p className="text-[15px] text-iosSecondaryLabel-light mb-0.5">
                  {career.period}
                </p>
                <p className="text-[15px] text-iosSecondaryLabel-light">
                  {career.location}
                </p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <IOSGroup title="DESCRIPTION" className="mb-2">
            <div className="px-4 py-3">
              {career.descriptionBullets ? (
                <ul className="list-none space-y-2.5" style={{ paddingLeft: '0' }}>
                  {career.descriptionBullets.map((bullet, index) => (
                    <li 
                      key={index} 
                      className="text-iosLabel-light flex items-start"
                      style={{ paddingLeft: '0', lineHeight: '1.6', fontSize: '0.9rem' }}
                    >
                      <span className="text-iosSecondaryLabel-light mr-3 flex-shrink-0" style={{ marginTop: '4px', fontSize: '20px' }}>
                        •
                      </span>
                      <span className="flex-1">
                        {formatDescriptionText(bullet)}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[17px] text-iosLabel-light leading-relaxed">
                  {career.description}
                </p>
              )}
            </div>
          </IOSGroup>

          {/* Key Achievements Section */}
          {career.achievements && career.achievements.length > 0 && (
            <IOSGroup title="KEY ACHIEVEMENTS" className="mb-2">
              {career.achievements.map((achievement, index) => (
                <React.Fragment key={index}>
                  <IOSRow 
                    leftIcon={getAchievementIcon(achievement)}
                    label={formatDescriptionText(achievement)}
                    fontSize="0.9rem"
                  />
                  {index < career.achievements.length - 1 && <div className="ios-separator" />}
                </React.Fragment>
              ))}
            </IOSGroup>
          )}
        </div>
      </motion.div>
    </IPhoneMockup>
  );
};

export default CareerDetail;
