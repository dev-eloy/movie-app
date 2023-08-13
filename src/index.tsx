// index.tsx
import * as ReactDOM from 'react-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App';

ReactDOM.render(
    <FluentProvider theme={webLightTheme}>
        <App />
    </FluentProvider>,
    document.getElementById('root'),
);
