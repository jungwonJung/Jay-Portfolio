import React from 'react';

const IOSProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-4 px-4">
      {/* Avatar */}
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '8px',
          flexShrink: 0,
        }}
      >
        <img
          src="/Jay.png"
          alt="JungWon JUNG"
          style={{ width: '64px', height: '64px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Name */}
      <h1 className="text-[24px] font-semibold text-iosLabel-light mb-0.5">
        JungWon JUNG
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] text-iosSecondaryLabel-light mb-1">
        iOS Developer · Backend Engineer
      </p>

      {/* App Store badge */}
      <p className="text-[12px] text-blue-500 font-medium tracking-wide">
        3 Apps on the App Store
      </p>
    </div>
  );
};

export default IOSProfile;

