import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import App from './App';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store/Store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AuthProvider
    authType={'cookie'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    authName={'_auth'}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthProvider>,
);
