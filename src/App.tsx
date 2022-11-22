import Header from './layout/header/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import ResultDetails from './pages/result-details/result-details';
import { RequireAuth } from 'react-auth-kit';

function App() {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth loginPath='/se-connecter'>
                <>
                  <Header />
                  <Home />
                </>
              </RequireAuth>
            }
          />
          <Route path='/se-connecter' element={<Login />} />
          <Route path='/:categories/:id' element={<ResultDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
