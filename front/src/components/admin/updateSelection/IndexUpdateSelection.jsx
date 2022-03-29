import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';

const IndexUpdateSelection = () => {
  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };

  const [selection, setSelection] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentCard, setCurrentCard] = useState(initialForm);

  const fetchData = () => {
    axios
      .get('http://localhost:5500/picture/selection')
      .then((res) => {
        console.log(res.data);
        setSelection(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const addCardSelection = (index) => {
    index._id = selection.length + 1;
    setSelection([...selection, index]);
  };

  const deleteCardSelection = (id) => {
    setEditing(false);
    setSelection(selection.filter((index) => index._id !== id));
  };

  const editRow = (index) => {
    setEditing(true);
    setSelection(index);
  };

  const updateCardSelection = (id, updateCardSelection) => {
    setEditing(false);
    setSelection(selection.map((index) => (index._id === id ? updateCardSelection : index)));
  };

  return (
    <div className='update'>
      <div className='inline-flex'>
        <h2>3. MODIFIER / AJOUTER (! MAXIMUM 4) / SUPPRIMER DES CARTES : </h2>
        <h3>SELECTIONNÉ POUR VOUS</h3>
      </div>
      <div className='table'>
        <Table selection={selection} editRow={editRow} deleteCardSelection={deleteCardSelection} />
      </div>
    </div>
  );
};

export default IndexUpdateSelection;
