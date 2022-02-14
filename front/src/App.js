import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';
import FormContact from './pages/FormContact';
import IndexUpdate from './components/Update/IndexUpdate';
// DARK MODE
import { ThemeContext } from './components/darkMode/ThemeContext';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`bg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className={`para ${darkMode ? 'para-dark' : 'para-light'}`}>
        <Cookie />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mentions-legales' element={<LegalNotice />} />
          <Route path='/cookie' element={<Cookies />} />
          <Route path='/contact' element={<FormContact />} />
          <Route path='/update' element={<IndexUpdate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
