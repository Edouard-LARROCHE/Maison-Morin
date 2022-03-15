import React, { useState } from 'react';
import axios from 'axios';

const PostForm = (props) => {
  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [card, setCard] = useState(initialForm);
  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    const postData = {
      pictureUrl: pictureUrl,
      name: name,
      price: price,
    };
    await axios
      .post('http://localhost:5500/picture/traiteur/viande', postData)
      .then((res) => {
        setCard(res.data);
        console.log(card);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.currentTarget;
  //   setCard({ ...card, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.pictureUrl || !card.name || !card.price) return;
    props.addCard(card);
    setCard(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Photo URL' name='pictureUrl' value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)} />

        <input type='text' placeholder='Nom' name='name' value={name} onChange={(e) => setName(e.target.value)} />

        <input type='text' placeholder='Prix' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />

        <button onClick={handlePost}>AJOUTER</button>
      </form>
    </div>
  );
};

export default PostForm;
