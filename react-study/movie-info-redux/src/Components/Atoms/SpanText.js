import React from 'react';
import './style/SpanText.css';

const SpanText = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

export default SpanText;
