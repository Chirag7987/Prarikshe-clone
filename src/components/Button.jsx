import React from 'react';

const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '' }) => {
  const baseClasses = 'btn';
  const variantClasses = variant === 'secondary' ? 'btn-secondary' : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;