import React, { useState } from 'react';
import axios from 'axios';

const PostForm = (props) => {
  const [card, setCard] = useState({ pictureUrl: '', name: '', price: '' });

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/picture/traiteur/viande', card)
      .then((res) => {
        console.log(res);
        setCard({ pictureUrl: '', name: '', price: '' });
        props.addCard(card);
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

        <button>AJOUTER</button>
      </form>
    </div>
  );
};

export default PostForm;
