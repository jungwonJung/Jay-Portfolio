import React from 'react';

interface IOSRowProps {
  leftIcon?: React.ReactNode;
  label: string | React.ReactNode;
  value?: string;
  rightElement?: React.ReactNode;
  onClick?: () => void;
  showChevron?: boolean;
  className?: string;
  fontSize?: string; // Optional font size override
}

const IOSRow: React.FC<IOSRowProps> = ({
  leftIcon,
  label,
  value,
  rightElement,
  onClick,
  showChevron = false,
  className = '',
  fontSize = '17px',
}) => {
  const isClickable = onClick !== undefined;

  const content = (
    <>
      {/* Left Icon */}
      {leftIcon && (
        <div className="flex items-center justify-center flex-shrink-0 self-start" style={{ width: '20px', height: '20px', marginTop: '2px' }}>
          {leftIcon}
        </div>
      )}

      {/* Label */}
      <span className="text-iosLabel-light flex-1 text-left min-w-0" style={{ fontSize }}>
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
        <div className="flex items-center justify-center flex-shrink-0" style={{ marginLeft: '4px' }}>
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

