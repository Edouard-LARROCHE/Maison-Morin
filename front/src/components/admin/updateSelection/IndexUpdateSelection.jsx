import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const IndexUpdateSelection = () => {
  const [selection, setSelection] = useState([]);
  // eslint-disable-next-line
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('http://localhost:5500/picture/selection')
        .then((res) => {
          setSelection(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const addCardSelection = (index) => {
    index._id = selection.length + 1;
    setSelection([...selection, index]);
  };

  const deleteCard = (id) => {
    setEditing(false);
    setSelection(selection.filter((index) => index._id !== id));
  };

  return (
    <div className='update'>
      <div className='inline-flex'>
        <h2>2. MODIFIER / AJOUTER (MAXIMUM 4) / SUPPRIMER DES CARTES : </h2>
        <h3>SELECTIONNÉ POUR VOUS</h3>
      </div>
      <div>
        <div className='table'>
          <Table selection={selection} setSelection={setSelection} deleteCard={deleteCard} addCardSelection={addCardSelection} />
        </div>
      </div>
    </div>
  );
};

export default IndexUpdateSelection;
