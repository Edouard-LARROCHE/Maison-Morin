import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditSelection = (props) => {
  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [data, setData] = useState(props.editing ? props.currentCard : initialForm);

  axios
    .put('http://localhost:5500/picture/selection', data)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    setData(props.currentCard);
  }, [props]);

  const resetCardSelection = () => {
    props.setEditing(false);
    setData(initialForm);
    props.setCurrentCard(initialForm);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!data.pictureUrl || !data.name || !data.price) return;
          props.editing ? props.updateCardSelection(data._id, data) : props.addCardSelection(data);
          resetCardSelection();
        }}>
        <input type='text' placeholder='Photo URL' name='pictureUrl' value={data.pictureUrl} onChange={handleChange} />

        <input type='text' placeholder='Nom' name='name' value={data.name} onChange={handleChange} />

        <input type='text' placeholder='Prix' name='price' value={data.price} onChange={handleChange} />

        <button> {props.editing ? 'MODIFIER' : 'AJOUTER'} </button>
        {props.editing && <button onClick={resetCardSelection}>ANNULER</button>}
      </form>
    </div>
  );
};

export default EditSelection;
