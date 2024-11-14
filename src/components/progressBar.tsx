import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Ensure progress is within bounds (0 to 100)
  const validProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className='w-11/12'>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: `${validProgress}%` }} className="h-2 rounded-full bg-pl8Green" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
