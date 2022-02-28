import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';
import FormContact from './pages/FormContact';
import IndexUpdate from './components/Update/IndexUpdate';
import Shop from './pages/Shop';
import MaisonMorin from './pages/MaisonMorin';
import Traiteur from './components/gallery/Traiteur';
// DARK MODE
import { ThemeContext } from './components/darkMode/ThemeContext';
import TopArrow from './components/TopArrow';
// SCROLL TO TOP
import ScrollToTop from './components/ScrollToTop';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={400} classNames='fade'>
        <div className={`bg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
          <div className={`para ${darkMode ? 'para-dark' : 'para-light'}`}>
            <ScrollToTop>
              <TopArrow />
              <Cookie />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/mentions-legales' element={<LegalNotice />} />
                <Route path='/cookie' element={<Cookies />} />
                <Route path='/contact' element={<FormContact />} />
                <Route path='/update' element={<IndexUpdate />} />
                <Route path='/boutique' element={<Shop />} />
                <Route path='/maison-morin' element={<MaisonMorin />} />
                <Route path='/traiteur' element={<Traiteur />} />
              </Routes>
            </ScrollToTop>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
