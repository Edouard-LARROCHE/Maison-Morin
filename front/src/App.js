import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';

function App() {
  return (
    <div>
      <Cookie />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mentions-legales' element={<LegalNotice />} />
          <Route path='/cookie' element={<Cookies />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
