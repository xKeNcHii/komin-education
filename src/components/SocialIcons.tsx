
import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

interface SocialIconsProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'social' | 'contact';
}

const SocialIcons = ({ variant = 'horizontal', size = 'md', className = '', type = 'contact' }: SocialIconsProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const containerClasses = variant === 'horizontal' 
    ? 'flex items-center space-x-4' 
    : 'flex flex-col items-center space-y-4';

  const iconSize = sizeClasses[size];

  if (type === 'contact') {
    return (
      <div className={`${containerClasses} ${className}`}>
        <a
          href="mailto:info@komin-education.com"
          className="group p-3 bg-gray-100 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="Email"
        >
          <Mail className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
        </a>
        
        <a
          href="tel:+6591234567"
          className="group p-3 bg-gray-100 hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="Phone"
        >
          <Phone className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
        </a>
        
        <a
          href="https://wa.me/6591234567"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 bg-gray-100 hover:bg-green-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="WhatsApp"
        >
          <MessageCircle className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
        </a>
        
        <a
          href="https://t.me/KoMinEducation"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 bg-gray-100 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="Telegram"
        >
          <MessageCircle className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
        </a>
      </div>
    );
  }

  // Default social media icons
  return (
    <div className={`${containerClasses} ${className}`}>
      <a
        href="https://linkedin.com/company/komin-education"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="LinkedIn"
      >
        <MessageCircle className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
      
      <a
        href="https://instagram.com/komineducation"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="Instagram"
      >
        <MessageCircle className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
      
      <a
        href="https://youtube.com/@komineducation"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-gray-100 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        aria-label="YouTube"
      >
        <MessageCircle className={`${iconSize} text-gray-600 group-hover:text-white transition-colors duration-300`} />
      </a>
    </div>
  );
};

export default SocialIcons;
