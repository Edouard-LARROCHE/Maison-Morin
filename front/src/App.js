import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';
import FormContact from './pages/FormContact';
import IndexUpdate from './components/Update/IndexUpdate';
import Shop from './pages/Shop';
import MaisonMorin from './pages/MaisonMorin';
import Gallery from './pages/Gallery';
import Transition from './pages/Transition';
// DARK MODE
import { ThemeContext } from './components/darkMode/ThemeContext';
// SCROLL TO TOP
import ScrollToTop from './components/ScrollToTop';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className={`bg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className={`para ${darkMode ? 'para-dark' : 'para-light'}`}>
          <Cookie />
          <ScrollToTop>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/mentions-legales' element={<LegalNotice />} />
              <Route path='/cookie' element={<Cookies />} />
              <Route path='/contact' element={<FormContact />} />
              <Route path='/update' element={<IndexUpdate />} />
              <Route path='/boutique' element={<Shop />} />
              <Route path='/maison-morin' element={<MaisonMorin />} />
              <Route path='/traiteur' element={<Gallery />} />
              <Route path='/transition' element={<Transition />} />
            </Routes>
          </ScrollToTop>
        </div>
      </div>
    </>
  );
}

export default App;
