import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// IMPORT
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';
import FormContact from './pages/FormContact';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
import MaisonMorin from './pages/MaisonMorin';
import Transition from './pages/Transition';
// IMPORT GALLERY
import TraiteurCharcuterie from './pages/gallery/traiteur/TraiteurCharcuterie';
import TraiteurViande from './pages/gallery/traiteur/TraiteurViande';
import TraiteurPoisson from './pages/gallery/traiteur/TraiteurPoisson';
import NosPatisseries from './pages/gallery/patisserie/NosPatisseries';
import PatisserieMacaron from './pages/gallery/patisserie/PatisserieMacaron';
import PageCaveVins from './pages/gallery/PageCaveVins';
import PageCocktails from './pages/gallery/PageCocktails';
import PageProduitsDexception from './pages/gallery/PageProduitsDexception';
// DARK MODE
import { ThemeContext } from './components/darkMode/ThemeContext';
// SCROLL TO TOP
import ScrollToTop from './components/ScrollToTop';
// AUTH
import Login from './components/log/Login';
import Purchase from './components/log/Purchase';
import Register from './components/log/Register';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [transition, setTransition] = useState(true);
  const user = localStorage.getItem('token');

  useEffect(() => {
    const trans = () => {
      setTransition(true);
    };
    setTimeout(() => {
      trans();
      setTransition(false);
    }, 3000);
  }, []);

  return (
    <>
      {transition ? (
        <div>
          <Transition />
        </div>
      ) : (
        <div className={`bg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
          <div className={`para ${darkMode ? 'para-dark' : 'para-light'}`}>
            <Cookie />
            <ScrollToTop>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/mentions-legales' element={<LegalNotice />} />
                <Route path='/cookie' element={<Cookies />} />
                <Route path='/contact' element={<FormContact />} />
                <Route path='/update' element={<Admin />} />
                <Route path='/boutique' element={<Shop />} />
                <Route path='/maison-morin' element={<MaisonMorin />} />
                <Route path='/traiteur-viandes' element={<TraiteurViande />} />
                <Route path='/traiteur-poissons' element={<TraiteurPoisson />} />
                <Route path='/traiteur-charcuterie' element={<TraiteurCharcuterie />} />
                <Route path='/patisseries' element={<NosPatisseries />} />
                <Route path='/patisseries-macarons' element={<PatisserieMacaron />} />
                <Route path='/cave-a-vins' element={<PageCaveVins />} />
                <Route path='/cocktails' element={<PageCocktails />} />
                <Route path="/produits-d'exception" element={<PageProduitsDexception />} />
                {user && <Route path='/' exact element={<Purchase />} />}
                <Route path='/signup' exact element={<Register />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/' element={<Navigate replace to='/login' />} />
              </Routes>
            </ScrollToTop>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
