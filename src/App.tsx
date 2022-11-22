import Header from './components/layout/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ResultDetails from './pages/result-details/ResultDetails';
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
