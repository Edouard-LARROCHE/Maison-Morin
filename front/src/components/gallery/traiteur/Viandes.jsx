import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Loader';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Card from '../Card';

const Viandes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [itemsMore, setItemsMore] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('http://localhost:5500/picture/traiteur/viande');
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
    let value = e.target.value.replace(/\s/g, '');
    setSearch(value);
  };

  const handleShowMore = () => {
    setItemsMore(data.length);
  };

  const handleShowLess = () => {
    setItemsMore(6);
  };

  return (
    <>
      <div className='text-acceuil-fetch'>
        <div className='flex-position'>
          <p>PRODUITS ARTISANAUX ELABORÉS DANS NOS CUISINES, AU QUOTIDIEN.</p>
          <div className='search-bar'>
            <TextField className='text-field' type='text' onChange={handleSearch} placeholder='Rechercher' style={{ color: '#f6fbf8' }} />
            <SearchIcon style={{ cursor: 'pointer', color: '#012f6b' }} />

            <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>PAR NOM</p>
          </div>
        </div>
        <p style={{ fontSize: '10px' }}>NOTRE GAMME TRAITEUR</p>
        <br />
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
      {itemsMore === 6 ? <button onClick={handleShowMore}>+</button> : <button onClick={handleShowLess}>-</button>}
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

export default Viandes;
