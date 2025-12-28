import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { 
  Smartphone, 
  MapPin, 
  CloudOff, 
  Map, 
  Code, 
  Server, 
  ShoppingCart,
  MessageCircle,
  Cpu,
  Navigation,
  CheckCircle
} from 'lucide-react';
import IOSNavbar from '../components/IOSNavbar';
import IOSGroup from '../components/IOSGroup';
import IOSRow from '../components/IOSRow';
import IPhoneMockup from '../components/IPhoneMockup';
import { projects } from '../data/projects';

// Helper function to format text with bold keywords
const formatDescriptionText = (text: string): React.ReactNode => {
  // Order matters: longer phrases first to avoid partial matches
  const keywords = [
    'App Store', 'Privacy-first', 'on-device', 'MapKit', 'CoreLocation',
    'SwiftUI', 'TypeScript', 'NestJS', 'UIKit',
    'Swift', 'React', 'iOS', 'UI/UX', 'GPS', 'MVVM', 'offline'
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

// Helper function to get icon for project highlights
const getProjectHighlightIcon = (highlight: string, projectId: string): React.ReactNode => {
  const iconClass = "w-5 h-5 text-blue-500";
  
  // PARKinPL specific icons
  if (projectId === 'parkinpl') {
    const lowerHighlight = highlight.toLowerCase();
    // Check in order of specificity
    if (lowerHighlight.includes('zone detection') || lowerHighlight.includes('gps') || lowerHighlight.includes('mapkit') || lowerHighlight.includes('real-time')) {
      return <MapPin className={iconClass} />;
    }
    if (lowerHighlight.includes('offline') || (lowerHighlight.includes('on-device') && lowerHighlight.includes('processing')) || lowerHighlight.includes('100%')) {
      return <CloudOff className={iconClass} />;
    }
    if (lowerHighlight.includes('cities') || lowerHighlight.includes('warsaw') || lowerHighlight.includes('kraków') || lowerHighlight.includes('pricing') || lowerHighlight.includes('operating hours')) {
      return <Map className={iconClass} />;
    }
    if (lowerHighlight.includes('native') || lowerHighlight.includes('uikit') || lowerHighlight.includes('built with')) {
      return <Smartphone className={iconClass} />;
    }
    if (lowerHighlight.includes('app store') || lowerHighlight.includes('released') || lowerHighlight.includes('no ads')) {
      return <CheckCircle className={iconClass} />;
    }
  }
  
  // Generic icons for other projects
  if (highlight.toLowerCase().includes('api') || highlight.toLowerCase().includes('backend')) {
    return <Server className={iconClass} />;
  }
  if (highlight.toLowerCase().includes('cart') || highlight.toLowerCase().includes('shopping')) {
    return <ShoppingCart className={iconClass} />;
  }
  if (highlight.toLowerCase().includes('real-time') || highlight.toLowerCase().includes('update')) {
    return <MessageCircle className={iconClass} />;
  }
  if (highlight.toLowerCase().includes('architecture') || highlight.toLowerCase().includes('scalable')) {
    return <Code className={iconClass} />;
  }
  
  // Default icon
  return <Cpu className={iconClass} />;
};

// Helper function to get icon for technologies
const getTechnologyIcon = (tech: string): React.ReactNode => {
  const iconClass = "w-5 h-5 text-indigo-500";
  
  if (tech.toLowerCase().includes('swift') || tech.toLowerCase().includes('ios')) {
    return <Smartphone className={iconClass} />;
  }
  if (tech.toLowerCase().includes('api') || tech.toLowerCase().includes('backend') || tech.toLowerCase().includes('nestjs')) {
    return <Server className={iconClass} />;
  }
  if (tech.toLowerCase().includes('react') || tech.toLowerCase().includes('frontend')) {
    return <Code className={iconClass} />;
  }
  
  return <Cpu className={iconClass} />;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
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

  if (!project) {
    return (
      <IPhoneMockup>
        <div className="min-h-screen bg-[#F2F2F7]">
          <IOSNavbar title="Project" showBackButton onBack={() => navigate('/')} />
          <div className="px-4 pt-8 text-center">
            <p className="text-iosSecondaryLabel-light">
              Project not found
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
          title={project.name} 
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
                {project.name}
              </h1>
            </motion.div>
          )}

          {/* Hero Image Section */}
          <div className="w-full mb-4 mt-2">
            <div 
              className="w-full rounded-ios overflow-hidden bg-iosGroupedBg-light"
              style={{ 
                aspectRatio: '16/9',
                minHeight: '200px',
                border: '0.5px solid rgba(198, 198, 200, 0.3)',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Header Information */}
          <div className="mb-4">
            <div className="flex items-start gap-4 mb-3">
              {/* App Icon */}
              <div 
                className="w-[60px] h-[60px] rounded-xl bg-iosSecondaryBg-light overflow-hidden flex-shrink-0"
                style={{ borderRadius: '12px' }}
              >
                <img
                  src={project.appIcon || project.imageSrc}
                  alt={`${project.name} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* App Name and Tagline */}
              <div className="flex-1">
                {scrolled && (
                  <h1 className="text-[22px] font-bold text-iosLabel-light mb-1">
                    {project.name}
                  </h1>
                )}
                <p className="text-[15px] text-iosSecondaryLabel-light">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            {/* External Links Row */}
            {(project.appStoreUrl || project.githubUrl) && (
              <div className="flex gap-2">
                {project.appStoreUrl && (
                  <button
                    onClick={() => window.open(project.appStoreUrl, '_blank')}
                    className="flex-1 px-4 py-2.5 rounded-full bg-blue-500 text-white text-[15px] font-medium active:bg-blue-600 transition-colors"
                  >
                    View on App Store
                  </button>
                )}
                {project.githubUrl && (
                  <button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="px-4 py-2.5 rounded-full text-blue-500 border border-blue-500 text-[15px] font-medium active:bg-blue-50 transition-colors"
                    style={{ 
                      backgroundColor: 'transparent'
                    }}
                  >
                    View on GitHub
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Description Section */}
          <IOSGroup title="DESCRIPTION" className="mb-2">
            <div className="px-4 py-3">
              {project.descriptionBullets ? (
                <ul className="list-none space-y-2.5" style={{ paddingLeft: '0' }}>
                  {project.descriptionBullets.map((bullet, index) => (
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
                  {project.description}
                </p>
              )}
            </div>
          </IOSGroup>

          {/* Key Features Section */}
          {project.highlights && project.highlights.length > 0 && (
            <IOSGroup title="KEY FEATURES" className="mb-2">
              {project.highlights.map((highlight, index) => (
                <React.Fragment key={index}>
                  <IOSRow 
                    leftIcon={getProjectHighlightIcon(highlight, project.id)}
                    label={formatDescriptionText(highlight)}
                    fontSize="0.9rem"
                  />
                  {index < project.highlights.length - 1 && <div className="ios-separator" />}
                </React.Fragment>
              ))}
            </IOSGroup>
          )}

          {/* Technologies Section */}
          {project.technologies && project.technologies.length > 0 && (
            <IOSGroup title="TECHNOLOGIES" className="mb-2">
              {project.technologies.map((tech, index) => (
                <React.Fragment key={index}>
                  <IOSRow 
                    leftIcon={getTechnologyIcon(tech)}
                    label={tech} 
                  />
                  {index < project.technologies.length - 1 && <div className="ios-separator" />}
                </React.Fragment>
              ))}
            </IOSGroup>
          )}

          {/* Additional Links */}
          {project.links && project.links.length > 0 && (
            <IOSGroup title="LINKS" className="mb-4">
              {project.links.map((link, index) => (
                <React.Fragment key={index}>
                  <IOSRow
                    leftIcon={<HiOutlineExternalLink className="w-5 h-5 text-iosLabel-light" />}
                    label={link.label}
                    onClick={() => window.open(link.url, '_blank')}
                    showChevron
                  />
                  {index < project.links.length - 1 && <div className="ios-separator" />}
                </React.Fragment>
              ))}
            </IOSGroup>
          )}
        </div>
      </motion.div>
    </IPhoneMockup>
  );
};

export default ProjectDetail;
