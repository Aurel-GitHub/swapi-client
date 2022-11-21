import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import ResultDetails from './pages/result-details/result-details';

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/se-connecter' element={<Login />} />
          <Route path='/:categories/:id' element={<ResultDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
