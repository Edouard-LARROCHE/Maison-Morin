import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableTraiteurViande from './TableTraiteurViande';

const IndexTraiteurViande = () => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get('http://localhost:5500/picture/traiteur/viande')
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [currentCard, setCurrentCard] = useState(initialForm);
  const addCard = (index) => {
    index.id = data.length + 1;
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
    setCurrentCard({ id: index._id, pictureUrl: index.pictureUrl, name: index.name, price: index.price });
  };

  return (
    <div>
      <h3>Mise à jour des cartes:</h3>
      <div>
        {editing ? (
          <div>
            <h2>Modifier</h2>
            <form></form>
          </div>
        ) : (
          <div>
            <h2>Ajouter</h2>
            <form></form>
          </div>
        )}
      </div>
      <div>
        <h2>Données actuelles:</h2>
        <TableTraiteurViande data={data} editRow={editRow} deleteCard={deleteCard} />
      </div>
    </div>
  );
};

export default IndexTraiteurViande;
