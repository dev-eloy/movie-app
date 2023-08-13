import * as React from 'react';
import '../sass/main.scss';

interface LogoSVGProps {}

const LogoSVG: React.FC<LogoSVGProps> = () => {
  return (
    <div className="logo-container">
      <img src="/images/logo-raona.svg" alt="Logo" className="logo-image" />
    </div>
  );
};

export default LogoSVG;
