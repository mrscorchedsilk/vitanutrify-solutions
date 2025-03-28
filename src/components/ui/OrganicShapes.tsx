
import React from 'react';

interface OrganicShapesProps {
  variant?: 'default' | 'bubbles' | 'leaves' | 'waves';
  className?: string;
  color?: string;
}

const OrganicShapes: React.FC<OrganicShapesProps> = ({
  variant = 'default',
  className = '',
  color = 'emerald',
}) => {
  const colorClasses = {
    emerald: 'text-emerald-500/20',
    vitanium: 'text-vitanium-500/20',
    amber: 'text-amber-500/20',
    coral: 'text-coral-500/20',
  }[color as keyof typeof colorClasses] || 'text-emerald-500/20';

  const getShape = () => {
    switch (variant) {
      case 'bubbles':
        return (
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className={`${className} ${colorClasses} fill-current`}>
            <path d="M384.5,694.5c82.9,0,150-67.1,150-150s-67.1-150-150-150s-150,67.1-150,150S301.6,694.5,384.5,694.5z M736.5,452.5
              c57.3,0,104-46.7,104-104s-46.7-104-104-104s-104,46.7-104,104S679.2,452.5,736.5,452.5z M683.5,771.5c42.6,0,77-34.4,77-77
              s-34.4-77-77-77s-77,34.4-77,77S640.9,771.5,683.5,771.5z M249.5,380.5c32.9,0,59.5-26.6,59.5-59.5s-26.6-59.5-59.5-59.5
              s-59.5,26.6-59.5,59.5S216.6,380.5,249.5,380.5z M487.5,255.5c24.5,0,44.5-20,44.5-44.5s-20-44.5-44.5-44.5s-44.5,20-44.5,44.5
              S463,255.5,487.5,255.5z M771.5,644.5c24.5,0,44.5-20,44.5-44.5s-20-44.5-44.5-44.5s-44.5,20-44.5,44.5
              S747,644.5,771.5,644.5z M883.5,539.5c18.2,0,33-14.8,33-33s-14.8-33-33-33s-33,14.8-33,33S865.3,539.5,883.5,539.5z
              M217.5,539.5c18.2,0,33-14.8,33-33s-14.8-33-33-33s-33,14.8-33,33S199.3,539.5,217.5,539.5z M487.5,849.5
              c18.2,0,33-14.8,33-33s-14.8-33-33-33s-33,14.8-33,33S469.3,849.5,487.5,849.5z"/>
          </svg>
        );
      case 'leaves':
        return (
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className={`${className} ${colorClasses} fill-current`}>
            <path d="M707.9,759.3c-19.8-50.4-47.1-97.8-81.6-141.9c-34.5-44.1-75.6-82.8-122.7-115.2c-47.1-32.4-98.1-58.2-152.7-76.8
              c-54.6-19.2-111.9-29.7-170.1-31.8c40.2,10.2,79.5,23.4,117.6,39.9c38.1,16.5,74.4,36.6,108,60c33.9,23.4,65.1,49.5,93.6,78.3
              c28.5,28.8,53.4,60.3,75,94.5c21.6,34.2,39.6,70.8,54,109.5c14.1,38.4,24.3,78.9,30.3,120.6c1.8-7.2,3.3-14.7,4.8-21.9
              c1.5-7.5,2.7-15,3.9-22.5c1.2-7.5,2.1-15,3-22.5c0.9-7.5,1.5-15,2.4-22.5C673.3,817.5,689.7,789,707.9,759.3z"/>
            <path d="M308.9,724.5c30.6-11.4,60-26.1,87.9-44.1c27.9-18,53.7-39,77.7-62.4c24-23.4,45.9-48.9,65.7-76.5
              c19.8-27.6,37.2-57,51.9-88.2c14.7-31.2,26.7-63.9,35.7-97.8c9-33.9,15-69,18-105c-4.5,6.6-8.7,13.5-12.9,20.1
              c-4.2,6.9-8.1,13.8-12.3,20.7c-4.2,6.9-8.1,13.8-12,20.7c-3.9,6.9-8.1,13.8-12,20.4c-15.6,27.3-34.5,53.1-56.4,76.2
              c-21.9,23.1-46.8,43.8-73.8,61.2c-27,17.4-56.4,31.5-87,41.7s-63,16.5-95.4,19.5c32.1,12.9,65.4,22.5,99.3,28.8
              c33.9,6.3,68.7,9.3,103.5,9.3c-34.8,9-70.8,13.5-106.8,13.5c-36,0-72-4.5-107.1-13.5c15.3,11.4,31.5,21.9,48.3,30.9
              c16.8,9,34.5,16.8,52.5,23.1C291.3,714.9,310.1,720,328.9,723.9L308.9,724.5z"/>
            <path d="M726.5,342.3c-19.5-7.5-39.9-13.5-60.3-18.3c-20.7-4.8-41.7-8.4-63-10.5c-21.3-2.1-42.6-3-64.2-2.4
              c-21.3,0.6-42.9,2.7-64.2,6.3c-21.3,3.6-42.3,8.7-63,15.3c-20.7,6.6-40.8,14.7-60.6,24.3c5.7-1.5,11.7-2.7,17.7-3.9
              c6-1.2,12-2.1,17.7-3c6-0.9,12-1.8,18-2.4c6-0.6,12-1.2,18-1.5c24-1.2,48-0.3,72,2.7c24,3,47.7,8.1,71.1,15
              c23.4,6.9,46.2,15.6,68.4,25.8c22.2,10.2,43.5,22.2,63.6,35.7c-12-19.8-26.1-38.7-41.7-56.4c-15.6-17.7-32.7-34.2-51-49.2
              C639.7,369.9,684.1,359.7,726.5,342.3z"/>
            <path d="M794.9,610.5c-19.2,15.3-40.8,27.9-63.9,37.8c-23.1,9.9-47.4,17.1-72.3,21.6c-24.9,4.5-50.4,6.3-75.9,5.7
              c-25.5-0.6-51-3.9-75.6-9.9c-24.6-6-48.6-14.7-71.4-25.5c-22.8-10.8-44.1-24-63.9-39c5.1,3,10.5,5.7,15.9,8.4
              c5.4,2.7,10.8,5.1,16.2,7.5c5.4,2.4,10.8,4.5,16.2,6.6c5.4,2.1,11.1,3.9,16.5,5.7c21.9,7.2,44.7,12,67.8,14.1
              c23.1,2.1,46.5,1.8,69.6-1.2c23.1-3,45.9-8.4,68.1-15.9c22.2-7.5,43.5-17.1,63.6-28.8c-4.5,9.9-9.6,19.5-15.3,28.8
              c-5.7,9.3-11.7,18.3-18.3,27c-6.6,8.7-13.5,17.1-21,25.2c-7.5,8.1-15.3,15.9-23.4,23.1C676.1,664.5,739.7,644.1,794.9,610.5z"/>
          </svg>
        );
      case 'waves':
        return (
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className={`${className} ${colorClasses} fill-current`}>
            <path d="M0,717.3c0,0,76.9-135.1,228.8-90.1s173.1,62.5,284.6,16.3s161.5-173.1,332.7-178.8S1000,519,1000,519v481H0V717.3z"/>
            <path d="M0,798.1c0,0,65.4-115.4,207.7-75s163.5,54.8,261.5,23.1S623.1,655,765.4,636.5S1000,682.7,1000,682.7V1000H0V798.1z"/>
            <path d="M1000,634.6c0,0-75-109.6-224-67.3s-173.1,59.6-284.6,28.8S336.5,505.8,159.6,495.2S0,561.5,0,561.5v438.5h1000V634.6z"/>
          </svg>
        );
      case 'default':
      default:
        return (
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className={`${className} ${colorClasses} fill-current`}>
            <path d="M0,637.2c93.3-39.7,193.9-63.5,298.1-64.1c23.9-0.1,47.9,1.1,71.7,3.5C429.1,583.4,488,597,542.1,619.7
              c48.6,20.3,93.9,47.1,135.1,79.5c20.6,16.2,40.2,33.8,58.6,52.6c18.4,18.8,35.6,38.7,51.6,59.6c31.8,41.8,58.8,87.6,80,136.1
              c10.6,24.2,20,49,28.3,74.2c6.6,20.2,12.5,40.6,17.8,61.2h-914V637.2z"/>
            <path d="M1000,534.3c-48.7,9.7-96.1,23.4-141.6,40.7c-126.2,48-238.3,126.6-323.1,230.5c-42.4,52-77.7,109.4-105,170.7
              c-5,11.2-9.8,22.5-14.3,33.9h584V534.3z"/>
            <path d="M0,389.7c57.5,18.3,113.1,42.7,164.2,73.8c25.6,15.6,50.3,32.8,73.7,51.5c23.5,18.7,45.7,38.9,66,60.4
              c20.3,21.6,39,44.4,55.6,68.4c8.3,12,16.1,24.3,23.4,36.9c13.9,24.2,25.7,49.4,35.4,75.6c5.9,15.9,11.2,32,15.9,48.4
              c3.6,12.8,6.9,25.7,9.8,38.6c3.7,16.4,7,33,9.7,49.6c0.8,5.2,1.6,10.5,2.3,15.7c1.7,11.9,3.1,23.8,4.2,35.7
              c1.4,15.1,2.5,30.2,3,45.4c0.1,1.6,0.1,3.3,0.1,4.9c0.1,1.9,0.2,3.7,0.2,5.6H0V389.7z"/>
          </svg>
        );
    }
  };

  return getShape();
};

export default OrganicShapes;
