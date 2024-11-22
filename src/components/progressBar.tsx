import React from 'react';
import BackArrow from './backArrow';

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
  onBack: () => void; // Callback for the "Back" button
  number: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onBack, number }) => {
  // Ensure progress is within bounds (0 to 100)
  const validProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='flex justify-between'>
        <button onClick={onBack} className='flex justify-center items-center gap-2'>
          <BackArrow />
          <p className="text-sm font-medium text-gray-900">Back</p>
        </button>
        <p className="text-sm font-medium text-gray-900">{number}</p>
      </div>
      <div aria-hidden="true" className="">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: `${validProgress}%` }}
            className="h-2 rounded-full bg-pl8Green"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
