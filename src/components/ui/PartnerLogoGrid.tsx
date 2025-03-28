
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PartnerLogoGridProps {
  logos: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }>;
  className?: string;
}

const PartnerLogoGrid: React.FC<PartnerLogoGridProps> = ({ logos, className }) => {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center", className)}>
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 flex items-center justify-center h-24
                    shadow-[0_10px_20px_-5px_rgba(139,92,246,0.15)] transition-all duration-300
                    hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.25)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            transition: { duration: 0.2 }
          }}
        >
          <img 
            src={logo.src} 
            alt={logo.alt} 
            className="max-h-16 max-w-full object-contain" 
            width={logo.width || 'auto'} 
            height={logo.height || 'auto'} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PartnerLogoGrid;
