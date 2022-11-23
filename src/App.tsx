import Header from './Layouts/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ResultDetails from './Pages/ResultDetails/ResultDetails';
import { RequireAuth } from 'react-auth-kit';

function App() {
  return (
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
        <Route
          path='/:categories/:id'
          element={
            <RequireAuth loginPath='/se-connecter'>
              <>
                <Header />
                <ResultDetails />
              </>
            </RequireAuth>
          }
        />
        <Route path='/se-connecter' element={<Login />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
