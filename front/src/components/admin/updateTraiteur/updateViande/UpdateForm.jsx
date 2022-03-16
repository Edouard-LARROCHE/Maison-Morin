import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UpdateForm = (props) => {
  const [card, setCard] = useState(props.currentCard);
  const [id, setId] = useState(card.id);
  console.log(card);

  useEffect(() => {
    setCard(props.currentCard);
  }, [props]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!card.pictureUrl || !card.name || !card.price) return;
    props.updateCard(card.id, card);

    await axios
      .put(`http://localhost:5500/picture/traiteur/viande/${id}`, card)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Photo URL' name='pictureUrl' value={card.pictureUrl} onChange={handleChange} />

        <input type='text' placeholder='Nom' name='name' value={card.name} onChange={handleChange} />

        <input type='text' placeholder='Prix' name='price' value={card.price} onChange={handleChange} />

        <button>MODIFIER</button>
        <button onClick={() => props.setEditing(false)}>ANNULER</button>
      </form>
    </div>
  );
};

export default UpdateForm;
