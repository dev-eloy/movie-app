import * as React from 'react';
import '../sass/main.scss';

interface NotFoundMessageProps {
  message: string;
}

const NotFoundMessage: React.FC<NotFoundMessageProps> = ({ message }) => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-text">{message}</h1>
    </div>
  );
};

export default NotFoundMessage;
