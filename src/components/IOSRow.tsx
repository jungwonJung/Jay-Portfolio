import React from 'react';

interface IOSRowProps {
  leftIcon?: React.ReactNode;
  label: string;
  value?: string;
  rightElement?: React.ReactNode;
  onClick?: () => void;
  showChevron?: boolean;
  className?: string;
}

const IOSRow: React.FC<IOSRowProps> = ({
  leftIcon,
  label,
  value,
  rightElement,
  onClick,
  showChevron = false,
  className = '',
}) => {
  const isClickable = onClick !== undefined;

  const content = (
    <>
      {/* Left Icon */}
      {leftIcon && (
        <div className="w-[30px] h-[30px] rounded-lg bg-iosGroupedBg-light flex items-center justify-center mr-3 flex-shrink-0">
          {leftIcon}
        </div>
      )}

      {/* Label */}
      <span className="text-[17px] text-iosLabel-light flex-1 text-left min-w-0">
        {label}
      </span>

      {/* Value or Right Element */}
      {value && (
        <span className="text-[17px] text-iosSecondaryLabel-light ml-3 mr-3 flex-shrink-0">
          {value}
        </span>
      )}
      {rightElement && <div className="ml-3 mr-3 flex-shrink-0">{rightElement}</div>}

      {/* Chevron */}
      {showChevron && (
        <div className="ml-2 flex-shrink-0">
          <svg
            className="ios-chevron"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '8px', height: '12px' }}
          >
            <path
              d="M1 1L6 6L1 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );

  if (isClickable) {
    return (
      <button
        onClick={onClick}
        className={`ios-nav-row ${className}`}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <div className={`ios-info-row ${className}`}>
      {content}
    </div>
  );
};

export default IOSRow;

