import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';

function App() {
  return (
    <div>
      <Cookie />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mentions-legales' element={<LegalNotice />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
