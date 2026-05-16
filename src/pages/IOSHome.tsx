import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineMail, HiOutlineDocumentText, HiOutlineAcademicCap } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Smartphone, Server } from 'lucide-react';
import IOSProfile from '../components/IOSProfile';
import IOSGroup from '../components/IOSGroup';
import IOSRow from '../components/IOSRow';
import IPhoneMockup from '../components/IPhoneMockup';
import { projects } from '../data/projects';
import { careerItems } from '../data/career';

const iosSkills = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Combine',
  'CoreLocation',
  'MapKit',
  'Firebase',
  'MVVM',
];

const backendSkills = [
  'NestJS',
  'TypeScript',
  'MySQL · MongoDB',
  'Elasticsearch',
  'REST APIs',
];

const IOSHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <IPhoneMockup>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full flex flex-col bg-[#F2F2F7]"
        style={{ paddingTop: '0px' }}
      >
        {/* Content starts below Status Bar */}
        <div className="w-full pb-4" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '0px', marginTop: '0px' }}>

          {/* Profile Section */}
          <div className="py-0.5">
            <IOSProfile />
          </div>

          {/* About Section */}
          <IOSGroup title="ABOUT" className="mb-2">
            <IOSRow label="Name" value="JungWon JUNG" />
            <div className="ios-separator" />
            <IOSRow label="Role" value="iOS Developer" />
            <div className="ios-separator" />
            <IOSRow label="Location" value="Katowice, Poland" />
            <div className="ios-separator" />
            {/* Bio */}
            <div className="px-4 py-3">
              <p style={{ fontSize: '14px', lineHeight: '1.75', letterSpacing: '0.01em', color: '#3C3C43' }}>
                Spent a few years as a backend developer in Seoul — building APIs, optimizing queries, learning how real products work under the hood.
                At some point I wanted to build the parts users actually touch.
                Moved to Poland, picked up Swift, and shipped{' '}
                <span style={{ fontWeight: 600, color: '#000' }}>3 apps to the App Store</span>
                {' '}— including PARKinPL, built specifically for navigating parking in Polish cities.
              </p>
            </div>
          </IOSGroup>

          {/* iOS Skills Section */}
          <IOSGroup title="iOS DEVELOPMENT" className="mb-2">
            {iosSkills.map((skill, index) => (
              <React.Fragment key={skill}>
                <IOSRow
                  leftIcon={<Smartphone className="w-4 h-4 text-blue-500" />}
                  label={skill}
                />
                {index < iosSkills.length - 1 && <div className="ios-separator" />}
              </React.Fragment>
            ))}
          </IOSGroup>

          {/* Backend Skills Section */}
          <IOSGroup title="BACKEND & WEB" className="mb-2">
            {backendSkills.map((skill, index) => (
              <React.Fragment key={skill}>
                <IOSRow
                  leftIcon={<Server className="w-4 h-4 text-orange-500" />}
                  label={skill}
                />
                {index < backendSkills.length - 1 && <div className="ios-separator" />}
              </React.Fragment>
            ))}
          </IOSGroup>

          {/* Projects Section */}
          <IOSGroup title="PROJECTS" className="mb-2">
            {projects.map((project, index) => (
              <React.Fragment key={project.id}>
                <IOSRow
                  leftIcon={<Smartphone className="w-4 h-4 text-iosLabel-light" />}
                  label={project.name}
                  value={project.appStoreUrl ? 'App Store' : undefined}
                  onClick={() => navigate(`/project/${project.id}`)}
                  showChevron
                />
                {index < projects.length - 1 && <div className="ios-separator" />}
              </React.Fragment>
            ))}
          </IOSGroup>

          {/* Career Section */}
          <IOSGroup title="CAREER" className="mb-2">
            {careerItems.map((career, index) => (
              <React.Fragment key={career.id}>
                <IOSRow
                  leftIcon={<HiOutlineBriefcase className="w-5 h-5 text-iosLabel-light" />}
                  label={career.company}
                  value={career.period.split('—')[0].trim().split(' ').pop()}
                  onClick={() => navigate(`/career/${career.id}`)}
                  showChevron
                />
                {index < careerItems.length - 1 && <div className="ios-separator" />}
              </React.Fragment>
            ))}
          </IOSGroup>

          {/* Education Section */}
          <IOSGroup title="EDUCATION" className="mb-2">
            <IOSRow
              leftIcon={<HiOutlineAcademicCap className="w-5 h-5 text-iosLabel-light" />}
              label="WSB University"
            />
            <div className="ios-separator" />
            <IOSRow
              label="Major"
              value="Computer Science"
            />
            <div className="ios-separator" />
            <IOSRow
              label="Degree"
              value="B.Sc."
            />
            <div className="ios-separator" />
            <IOSRow
              label="Expected"
              value="Winter 2026"
            />
          </IOSGroup>

          {/* Contact Section */}
          <IOSGroup title="CONTACT" className="mb-2">
            <IOSRow
              leftIcon={<BsLinkedin className="w-5 h-5 text-iosLabel-light" />}
              label="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com/in/jungwon-jung-218750232/', '_blank')}
              showChevron
            />
            <div className="ios-separator" />
            <IOSRow
              leftIcon={<BsGithub className="w-5 h-5 text-iosLabel-light" />}
              label="GitHub"
              onClick={() => window.open('https://github.com/jungwonJung', '_blank')}
              showChevron
            />
            <div className="ios-separator" />
            <IOSRow
              leftIcon={<HiOutlineMail className="w-5 h-5 text-iosLabel-light" />}
              label="Email"
              value="wjdwjd1501@gmail.com"
              onClick={() => window.location.href = 'mailto:wjdwjd1501@gmail.com'}
              showChevron={false}
            />
            <div className="ios-separator" />
            <IOSRow
              leftIcon={<HiOutlineDocumentText className="w-5 h-5 text-iosLabel-light" />}
              label="Resume"
              onClick={() => window.open('/JUNGWON_JUNG_CV_2026.pdf', '_blank')}
              showChevron
            />
          </IOSGroup>

        </div>
      </motion.div>
    </IPhoneMockup>
  );
};

export default IOSHome;

