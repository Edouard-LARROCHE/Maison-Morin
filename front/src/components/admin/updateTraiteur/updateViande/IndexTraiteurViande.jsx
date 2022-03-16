import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../Table';
import UpdateForm from './UpdateForm';
import PostForm from './PostForm';

const IndexTraiteurViande = () => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);

  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [currentCard, setCurrentCard] = useState(initialForm);

  const addCard = (index) => {
    index._id = data.length + 1;
    setData([...data, index]);
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
    setCurrentCard({ _id: index._id, pictureUrl: index.pictureUrl, name: index.name, price: index.price });
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:5500/picture/traiteur/viande')
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  console.log(data);

  return (
    <div>
      <h3>Mise à jour des cartes:</h3>
      <div>
        {editing ? (
          <div>
            <h2>Modifier</h2>
            <UpdateForm editing={editing} setEditing={setEditing} currentCard={currentCard} updateCard={updateCard} />
          </div>
        ) : (
          <div>
            <h2>Ajouter</h2>
            <PostForm addCard={addCard} />
          </div>
        )}
      </div>
      <div>
        <h2>Données actuelles:</h2>
        <Table data={data} editRow={editRow} deleteCard={deleteCard} />
      </div>
    </div>
  );
};

export default IndexTraiteurViande;
