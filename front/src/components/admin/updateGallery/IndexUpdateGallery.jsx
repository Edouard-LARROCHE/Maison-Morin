import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const IndexTraiteurViande = () => {
  const [viandes, setViandes] = useState([]);
  const [poissons, setPoissons] = useState([]);
  const [charcuteries, setCharcuteries] = useState([]);
  const [patisseries, setPatisseries] = useState([]);
  const [macarons, setMacarons] = useState([]);
  const [vins, setVins] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [prodexcep, setProdExcep] = useState([]);
  // eslint-disable-next-line
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let urls = [
        'http://localhost:5500/picture/traiteur/viande',
        'http://localhost:5500/picture/traiteur/poisson',
        'http://localhost:5500/picture/traiteur/charcuterie',
        'http://localhost:5500/picture/patisserie/macaron',
        'http://localhost:5500/picture/patisserie/patisseries',
        'http://localhost:5500/picture/cocktails',
        'http://localhost:5500/picture/produitsExcep',
        'http://localhost:5500/picture/cave/vins',
      ];

      Promise.all(urls.map((url) => axios.get(url)))
        .then(
          ([
            { data: viande },
            { data: poisson },
            { data: charcuterie },
            { data: macaron },
            { data: patisserie },
            { data: cocktails },
            { data: produitsexcep },
            { data: vins },
          ]) => {
            setViandes(viande);
            setPoissons(poisson);
            setCharcuteries(charcuterie);
            setMacarons(macaron);
            setPatisseries(patisserie);
            setCocktails(cocktails);
            setProdExcep(produitsexcep);
            setVins(vins);
          },
        )
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const addCardViande = (index) => {
    index._id = viandes.length + 1;
    setViandes([...viandes, index]);
  };

  const addCardPoisson = (index) => {
    index._id = poissons.length + 1;
    setPoissons([...poissons, index]);
  };

  const addCardCharcuterie = (index) => {
    index._id = charcuteries.length + 1;
    setCharcuteries([...charcuteries, index]);
  };

  const addCardMacaron = (index) => {
    index._id = macarons.length + 1;
    setMacarons([...macarons, index]);
  };

  const addCardPatisserie = (index) => {
    index._id = patisseries.length + 1;
    setPatisseries([...patisseries, index]);
  };

  const addCardCocktail = (index) => {
    index._id = cocktails.length + 1;
    setCocktails([...cocktails, index]);
  };

  const addCardProduitExcep = (index) => {
    index._id = prodexcep.length + 1;
    setProdExcep([...prodexcep, index]);
  };

  const addCardVin = (index) => {
    index._id = vins.length + 1;
    setVins([...vins, index]);
  };

  const deleteCard = (id) => {
    setEditing(false);
    setViandes(viandes.filter((index) => index._id !== id));
    setPoissons(poissons.filter((index) => index._id !== id));
    setCharcuteries(charcuteries.filter((index) => index._id !== id));
    setMacarons(macarons.filter((index) => index._id !== id));
    setPatisseries(patisseries.filter((index) => index._id !== id));
    setCocktails(cocktails.filter((index) => index._id !== id));
    setProdExcep(prodexcep.filter((index) => index._id !== id));
    setVins(vins.filter((index) => index._id !== id));
  };

  return (
    <div className='update'>
      <div className='inline-flex'>
        <h2>2. MODIFIER / AJOUTER / SUPPRIMER DES CARTES : </h2>
        <h3>GALLERIE</h3>
      </div>
      <div>
        <div className='table'>
          <Table
            viandes={viandes}
            setViandes={setViandes}
            poissons={poissons}
            charcuteries={charcuteries}
            patisseries={patisseries}
            macarons={macarons}
            vins={vins}
            cocktails={cocktails}
            prodexcep={prodexcep}
            deleteCard={deleteCard}
            addCardViande={addCardViande}
            addCardPoisson={addCardPoisson}
            addCardCharcuterie={addCardCharcuterie}
            addCardMacaron={addCardMacaron}
            addCardPatisserie={addCardPatisserie}
            addCardCocktail={addCardCocktail}
            addCardProduitExcep={addCardProduitExcep}
            addCardVin={addCardVin}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexTraiteurViande;
