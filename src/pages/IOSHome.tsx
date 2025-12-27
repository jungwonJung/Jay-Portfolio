import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineBriefcase, HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import IOSProfile from '../components/IOSProfile';
import IOSGroup from '../components/IOSGroup';
import IOSRow from '../components/IOSRow';
import IPhoneMockup from '../components/IPhoneMockup';
import { projects } from '../data/projects';
import { careerItems } from '../data/career';

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
        {/* Content starts below Status Bar (44px) */}
        <div className="w-full pb-2" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '0px', marginTop: '0px' }}>
          {/* Profile Section */}
          <div className="py-0.5">
            <IOSProfile />
          </div>

          {/* About Section */}
          <IOSGroup title="ABOUT" className="mb-2">
            <IOSRow
              label="Name"
              value="JungWon JUNG"
            />
            <div className="ios-separator" />
            <IOSRow
              label="Role"
              value="iOS Developer"
            />
            <div className="ios-separator" />
            <IOSRow
              label="Location"
              value="Katowice, Poland"
            />
          </IOSGroup>

          {/* Skills Section */}
          <IOSGroup title="SKILLS" className="mb-2">
            <IOSRow
              label="Swift"
            />
            <div className="ios-separator" />
            <IOSRow
              label="SwiftUI"
            />
            <div className="ios-separator" />
            <IOSRow
              label="NestJS"
            />
            <div className="ios-separator" />
            <IOSRow
              label="TypeScript"
            />
          </IOSGroup>

          {/* Projects Section */}
          <IOSGroup title="PROJECTS" className="mb-2">
            {projects.map((project, index) => (
              <React.Fragment key={project.id}>
                <IOSRow
                  leftIcon={<HiOutlineCode className="w-5 h-5 text-iosLabel-light" />}
                  label={project.name}
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
                  onClick={() => navigate(`/career/${career.id}`)}
                  showChevron
                />
                {index < careerItems.length - 1 && <div className="ios-separator" />}
              </React.Fragment>
            ))}
          </IOSGroup>

          {/* Contact Section */}
          <IOSGroup title="CONTACT" className="mb-2">
            <IOSRow
              leftIcon={<BsLinkedin className="w-5 h-5 text-iosLabel-light" />}
              label="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com/in/jungwon-jung/', '_blank')}
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

