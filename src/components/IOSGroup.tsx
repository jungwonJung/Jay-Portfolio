import React from 'react';

interface IOSGroupProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const IOSGroup: React.FC<IOSGroupProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`ios-group ${className}`}>
      {title && <div className="ios-group-title">{title}</div>}
      <div>{children}</div>
    </div>
  );
};

export default IOSGroup;

