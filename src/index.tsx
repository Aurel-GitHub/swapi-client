import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AuthProvider
    authType={'cookie'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    authName={'_auth'}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
);
