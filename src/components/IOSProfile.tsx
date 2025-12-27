import React from 'react';

const IOSProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-4 px-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-iosSecondaryBg-light mb-2 overflow-hidden">
        <img
          src="/Jay.png"
          alt="JungWon JUNG"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-[24px] font-semibold text-iosLabel-light mb-0.5">
        JungWon JUNG
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] text-iosSecondaryLabel-light">
        iOS Developer
      </p>
    </div>
  );
};

export default IOSProfile;

