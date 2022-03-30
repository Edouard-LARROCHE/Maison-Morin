import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Loader';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Card from '../Card';

const Charcuterie = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [itemsMore, setItemsMore] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('/picture/traiteur/charcuterie');
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
      <div className='Charcuterie-headBand'>
        <div className='Infos-enterText'>
          <h1>CHARCUTERIE</h1>
          <p className='Presentation-gallery'>
            Nous vous proposons ce qu'il se fait de mieux en charcuterie, un jambon blanc sans nitrite, sans gluten, cuit au bouillon de légume puis
            desossé avec bien évidemment du Porc français.
            <br></br> Maison Morin a fait le choix de vous proposer également une sélection de Jambon cru d'exception comme le véritable San Daniel,
            Pata negra Jimenez 100% Ibérique de Bellota, Serrano Grand 30 mois Duroc, chorizo ibérique de Bellota, la rosette de Lyon porc français,
            du saucisson d'Auvergne, de la viande de grison...de quoi satisfaire les amateurs de charcuterie haut de gamme.
          </p>
        </div>
      </div>
      <div className='plus-text'>
        <h3 className='t-eT'>Mais aussi</h3>
        <p>
          Maison Morin vous propose sur commande des planches de charcuterie à votre convenance, pour plus de renseignement, n'hésitez pas à nous
          contacter.Vous préférez un apéritif sans charcuterie? Maison Morin vous propose des planches de la mer, parfaites pour un apero gourmant et
          raffiné avec des gambas marinés à l'aneth et sa crème citronné des tranches de saumon fumés écossais, mini blinis, caviar d'aquitaine Maison
          Nordique. <br></br>
          <br></br> Vous êtes Végan? Maison Morin vous propose des planches de crudités avec des légumes frais en Bâtonnets.
        </p>
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

export default Charcuterie;
