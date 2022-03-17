import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table';
import UpdateForm from './UpdateForm';
import PostForm from './PostForm';

const IndexTraiteurViande = () => {
  const [viandes, setViandes] = useState([]);
  const [poissons, setPoissons] = useState([]);
  const [charcuteries, setCharcuteries] = useState([]);

  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);

  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [currentCard, setCurrentCard] = useState(initialForm);

  const fetchData = async () => {
    let urls = [
      'http://localhost:5500/picture/traiteur/viande',
      'http://localhost:5500/picture/traiteur/poisson',
      'http://localhost:5500/picture/traiteur/charcuterie',
    ];

    Promise.all(urls.map((url) => axios.get(url)))
      .then(([{ data: viande }, { data: poisson }, { data: charcuterie }]) => {
        setViandes(viande);
        setPoissons(poisson);
        setCharcuteries(charcuterie);
        console.log(poissons);
        console.log(viandes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const addCard = (index) => {
    index._id = viandes.length + 1 && poissons.length + 1;
    setViandes([...viandes, index]);
    setPoissons([...poissons, index]);
  };

  const deleteCard = (id) => {
    setEditing(false);
    setData(data.filter((index) => index._id !== id));
  };

  const updateCard = (id, updateCard) => {
    setEditing(false);
    setData(data.map((index) => (index._id === id ? updateCard : index)));
  };

  const editRow = (index) => {
    setEditing(true);
    setCurrentCard({ id: index._id, pictureUrl: index.pictureUrl, name: index.name, price: index.price });
  };

  return (
    <div className='update-traiteur-viande'>
      <div className='inline-flex'>
        <h2>2. MODIFIER / AJOUTER / SUPPRIMER DES CARTES : </h2>
        <h3>GALLERIE</h3>
      </div>
      <div>
        {editing ? (
          <div>
            <h1>MODIFIER</h1>
            <UpdateForm editing={editing} setEditing={setEditing} currentCard={currentCard} updateCard={updateCard} />
          </div>
        ) : (
          <div>
            <h1>AJOUTER</h1>
            <PostForm addCard={addCard} />
          </div>
        )}
      </div>
      <div className='table'>
        <Table viandes={viandes} poissons={poissons} editRow={editRow} deleteCard={deleteCard} />
      </div>
    </div>
  );
};

export default IndexTraiteurViande;
