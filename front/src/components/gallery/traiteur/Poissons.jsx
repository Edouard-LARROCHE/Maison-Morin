import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Loader';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Card from '../Card';

const Poissons = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [itemsMore, setItemsMore] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('/picture/traiteur/poisson');
        setData(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
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
      <div className='Poisson-headBand'>
        <div className='Infos-enterText'>
          <h1>POISSON</h1>
          <p className='Presentation-gallery'>
            Nos plats cuisinés à base de poissons et fruits de mer sont élaborés exclusivement avec des produits frais. Un arrivage journalier de
            poisson frais nous permet de vous concocté n’importes quel met en fonctions des arrivages et des saisons.
          </p>
        </div>
      </div>
      <div className='text-acceuil-fetch'>
        <p>PRODUITS ARTISANAUX ELABORÉS DANS NOS CUISINES, AU QUOTIDIEN.</p>
        <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>NOTRE GAMME TRAITEUR</p>
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

export default Poissons;
