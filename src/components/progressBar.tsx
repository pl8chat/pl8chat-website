import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Ensure progress is within bounds (0 to 100)
  const validProgress = Math.max(0, Math.min(100, progress));

  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">Migrating MySQL database...</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: `${validProgress}%` }} className="h-2 rounded-full bg-indigo-600" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div className={validProgress >= 25 ? 'text-indigo-600' : ''}>Copying files</div>
          <div className={`text-center ${validProgress >= 50 ? 'text-indigo-600' : ''}`}>Migrating database</div>
          <div className={`text-center ${validProgress >= 75 ? 'text-indigo-600' : ''}`}>Compiling assets</div>
          <div className={`text-right ${validProgress === 100 ? 'text-indigo-600' : ''}`}>Deployed</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
