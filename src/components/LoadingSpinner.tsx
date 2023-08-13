import * as React from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import '../sass/main.scss';

interface LoadingSpinnerProps {
  label: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ label }) => {
  return (
    <div className="loading-spinner-container">
      <Spinner size={SpinnerSize.large} label={label} ariaLive="assertive" />
    </div>
  );
};

export default LoadingSpinner;
