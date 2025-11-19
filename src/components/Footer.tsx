import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} JungWon (Jay). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jungwonJung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand transition-colors"
              aria-label="GitHub"
            >
              <BsGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jungwon-jung-218750232/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:wjdwjd1501@gmail.com"
              className="text-gray-600 hover:text-brand transition-colors"
              aria-label="Email"
            >
              <AiOutlineMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
