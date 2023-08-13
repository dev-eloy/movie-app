import * as React from 'react';
import { Text } from '@fluentui/react/lib/Text';
import '../sass/main.scss';


interface ErrorTextProps {
  message: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ message }) => {
  return (
    <div className="error-text-container">
      <Text variant="xxLarge" block>
        {message}
      </Text>
    </div>
  );
};

export default ErrorText;
