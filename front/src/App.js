import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';
import FormContact from './pages/FormContact';
import IndexAdmin from './components/admin/IndexAdmin';
import Shop from './pages/Shop';
import MaisonMorin from './pages/MaisonMorin';
import Transition from './pages/Transition';
// ROUTES GALLERY
import TraiteurViande from './pages/gallery/traiteur/TraiteurViande';
import TraiteurPoisson from './pages/gallery/traiteur/TraiteurPoisson';
import PatisserieCake from './pages/gallery/patisserie/PatisserieCake';
import PatisserieFruit from './pages/gallery/patisserie/PattisserieFruit';
import PatisserieMacaron from './pages/gallery/patisserie/PatisserieMacaron';
import CaveRouge from './pages/gallery/cave/CaveRouge';
import CaveBlanc from './pages/gallery/cave/CaveBlanc';
import CaveRose from './pages/gallery/cave/CaveRose';
import CaveBulle from './pages/gallery/cave/CaveBulle';
import PageCocktails from './pages/gallery/PageCocktails';
import PageProduitsDexception from './pages/gallery/PageProduitsDexception';
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
              <Route path='/update' element={<IndexAdmin />} />
              <Route path='/boutique' element={<Shop />} />
              <Route path='/maison-morin' element={<MaisonMorin />} />
              <Route path='/transition' element={<Transition />} />
              <Route path='/traiteur-viandes' element={<TraiteurViande />} />
              <Route path='/traiteur-poissons' element={<TraiteurPoisson />} />
              <Route path='/patisseries-cakes' element={<PatisserieCake />} />
              <Route path='/patisseries-fruits' element={<PatisserieFruit />} />
              <Route path='/patisseries-macarons' element={<PatisserieMacaron />} />
              <Route path='/cave-rouge' element={<CaveRouge />} />
              <Route path='/cave-blanc' element={<CaveBlanc />} />
              <Route path='/cave-rose' element={<CaveRose />} />
              <Route path='/cave-bulle' element={<CaveBulle />} />
              <Route path='/cocktails' element={<PageCocktails />} />
              <Route path='/produits-dexception' element={<PageProduitsDexception />} />
            </Routes>
          </ScrollToTop>
        </div>
      </div>
    </>
  );
}

export default App;
