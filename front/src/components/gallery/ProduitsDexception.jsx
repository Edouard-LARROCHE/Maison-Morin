import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '.././Loader';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Card from './Card';

const ProduitsDexception = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [itemsMore, setItemsMore] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('http://localhost:5500/posts');
        setData(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleShowStep1 = () => {
    setItemsMore(9, data.length);
  };

  const handleShowStep2 = () => {
    setItemsMore(12, data.length);
  };

  const handleShowAll = () => {
    setItemsMore(data.length);
  };

  return (
    <>
      <div className='Produits-headBand'>
        <div className='Infos-enterText'>
          <h1>PRODUITS D'EXCEPTION</h1>
          <p className='Presentation-gallery'>
            Maison Morin propose le meilleur pour ses clients, d'une qualitée rare, nos caviars, saumons fumés, foies gras, sauront raviver vos
            papilles pour des moments de pur bonheur et pour accompagner ses mêts, Victorien Morin vous propose en exclusivité le champagne Barons de
            Rothschild Brut, blanc de Blanc, ou Rosé.
          </p>
        </div>
      </div>
      <div className="plus-text">
        <h3 className='t-eT'>Mais aussi</h3>
      <p>
        Maison Morin vous propose son Saumon écossais fumé au bois de hêtre, un saumon fondant à chair rosée et ferme avec des notes douces et dorées, un équilibre idéal, disponible
        en boutique tranchés par nos soins! <br></br><br></br> Craquez pour le caviar d'exception Impérial de Sologne by Maison Nordique
      </p>
    </div>
      <div className='text-acceuil-fetch'>
        <p>PRODUITS ARTISANAUX ELABORÉS DANS NOS CUISINES, AU QUOTIDIEN.</p>
        <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>NOTRE GAMME D'EXCEPTION</p>
        <br />
        <div className='line2' />
        <br />
        <div className='option-gallery'>
          <div className='filter-display'>
            <span>AFFICHER :</span>
            <p onClick={handleShowStep1}>
              <span>&#183;</span> 9
            </p>
            <p onClick={handleShowStep2}>
              <span>&#183;</span> 12
            </p>
            <p onClick={handleShowAll}>
              <span>&#183;</span> 24
            </p>
          </div>
          <div className='search-bar'>
            <TextField className='text-field' type='text' onChange={handleSearch} placeholder='Rechercher' style={{ color: '#f6fbf8' }} />
            <SearchIcon style={{ cursor: 'pointer', color: '#012f6b' }} />
            <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>PAR NOM</p>
          </div>
        </div>
        <div className='line2' />
      </div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className='fetch-card'>
          {data
            .slice(0, itemsMore)
            .filter((gallery) => {
              return gallery.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((gallery) => (
              <Card key={gallery._id} gallery={gallery} />
            ))}
        </div>
      )}

      <div className='text-order'>
        <p>PASSER COMMANDE.</p>
        <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>
          EN PRÉVISION D'UN FUTUR SERVICE DE COMMANDE, MERCI DE COMMANDER POUR L'INSTANT DIRECTEMENT PAR MAIL OU TÉLÉPHONE.
        </p>
        <br />
        <div className='line2' />
      </div>
    </>
  );
};

export default ProduitsDexception;
