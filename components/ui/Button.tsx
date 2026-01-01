import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-kairo-red hover:bg-kairo-red-hover text-white border border-transparent shadow-[0_0_15px_-5px_rgba(123,15,22,0.5)] hover:shadow-[0_0_20px_-3px_rgba(158,27,34,0.6)]",
    secondary: "bg-transparent border border-kairo-muted/20 text-kairo-text hover:border-kairo-red/50 hover:text-white",
    ghost: "bg-transparent text-kairo-muted hover:text-kairo-text"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 rounded-sm",
    md: "text-sm px-6 py-2.5 rounded-sm",
    lg: "text-base px-8 py-3.5 rounded-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};