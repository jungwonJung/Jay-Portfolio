import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLink } from "react-icons/hi";

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  url: string;
  description: string;
}

const Contact: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      icon: <BsLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jungwon-jung/",
      description: "Professional network profile",
    },
    {
      icon: <BsGithub className="w-6 h-6" />,
      title: "GitHub",
      url: "https://github.com/jungwonJung",
      description: "Source code repository",
    },
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      title: "Email",
      url: "mailto:wjdwjd1501@gmail.com",
      description: "Get in touch",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ background: "#E8F4F8" }}>
      <div className="max-w-4xl mx-auto">
        {/* Title with icon and underline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <HiOutlineLink className="w-5 h-5 text-gray-900" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            CONTACT
          </h2>
        </div>
        <div className="w-full h-px bg-gray-900 mb-12 sm:mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
              rel={item.url.startsWith("mailto:") ? "" : "noopener noreferrer"}
              className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 hover:border-gray-400 transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-gray-900 opacity-100">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-2">{item.description}</p>
              <p className="text-gray-400 text-xs sm:text-sm break-all">{item.url.replace("mailto:", "")}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

