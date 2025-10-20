import React from 'react';

export const Badge = React.forwardRef(({ 
  className = '', 
  variant = 'default',
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    default: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300',
    destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700',
    outline: 'border-gray-300 text-gray-900 hover:bg-gray-100',
    success: 'border-transparent bg-green-600 text-white hover:bg-green-700',
    warning: 'border-transparent bg-yellow-500 text-white hover:bg-yellow-600',
  };
  
  return (
    <div
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';