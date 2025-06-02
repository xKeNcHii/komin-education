
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

interface SocialIconsProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialIcons = ({ variant = 'horizontal', size = 'md', className = '' }: SocialIconsProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const containerClasses = variant === 'horizontal' 
    ? 'flex items-center space-x-4' 
    : 'flex flex-col items-center space-y-4';

  const iconSize = sizeClasses[size];

  return (
    <div className={`${containerClasses} ${className}`}>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-gray-900 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="GitHub"
      >
        <Github className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
      
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="LinkedIn"
      >
        <Linkedin className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
      
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-black rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="Twitter/X"
      >
        <Twitter className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
      
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="Instagram"
      >
        <Instagram className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
      
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="YouTube"
      >
        <Youtube className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
    </div>
  );
};

export default SocialIcons;
