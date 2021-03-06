import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UidContext } from './AppContext';
import axios from 'axios';
// IMPORT GLOBAL
import Cookie from './components/Cookie';
import Home from './pages/Home';
import LegalNotice from './pages/LegalNotice';
import Cookies from './pages/Cookies';
import FormContact from './pages/FormContact';
import Admin from './pages/Admin';
import Shop from './pages/Shop';
import MaisonMorin from './pages/MaisonMorin';
import Transition from './pages/Transition';
import ShopCartIndex from './pages/ShopCartIndex';
import Purchase from './components/userInfo/Purchase';
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
import Register from './components/log/Register';
// REDUX
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';
import { getProductEffect } from './actions/productEffect.actions';

function App() {
  const url = process.env.REACT_APP_UPDATE;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [transition, setTransition] = useState(true);
  const [uid, setUid] = useState(null);
  const localStoreData = window.localStorage.Vins;
  const dispatch = useDispatch();

  useEffect(() => {
    const trans = () => {
      setTransition(true);
    };
    setTimeout(() => {
      trans();
      setTransition(false);
    }, 3000);

    const fetchToken = async () => {
      await axios
        .get('/jwtid')
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log('No token ' + err));
    };

    fetchToken();
    if (uid) {
      dispatch(getUser(uid));
      if (localStoreData) {
        let splitLocalStore = localStoreData.split([',']);
        const data = {
          shopCart: splitLocalStore,
        };

        axios
          .patch(`/api/user/addCard/${uid}`, data)
          .then((res) => {
            return res;
          })
          .catch((err) => console.log(err));
      }
    }

    if (localStoreData) {
      let splitLocalStore = localStoreData.split([',']);
      dispatch(getProductEffect(splitLocalStore));
    }
  }, [uid, dispatch]);

  return (
    <>
      <UidContext.Provider value={uid}>
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
                  <Route path={`/${url}`} element={<Admin />} />
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
                  {uid ? (
                    <Route path='/mon-compte' exact element={<Purchase />} />
                  ) : (
                    <Route path='/mon-compte' element={<Navigate replace to='/login' />} />
                  )}
                  <Route path='/signup' exact element={<Register />} />
                  <Route path='/login' exact element={<Login />} />
                  <Route path='/' element={<Navigate replace to='/login' />} />
                  <Route path='/mon-panier' element={<ShopCartIndex />} />
                </Routes>
              </ScrollToTop>
            </div>
          </div>
        )}
      </UidContext.Provider>
    </>
  );
}

export default App;
