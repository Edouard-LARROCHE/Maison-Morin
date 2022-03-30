import React, { useState } from 'react';
import axios from 'axios';

const TableCharcuterie = (props) => {
  const [charcuteriePostCard, setCharcuteriePostCard] = useState({ pictureUrl: '', name: '', price: '' });
  const [editing, setEditing] = useState(false);
  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [currentCard, setCurrentCard] = useState(initialForm);
  const id = currentCard.id;

  const editRow = (index) => {
    setEditing(true);
    setCurrentCard({ id: index._id, pictureUrl: index.pictureUrl, name: index.name, price: index.price });
  };

  const handleChangePost = (e) => {
    setCharcuteriePostCard({ ...charcuteriePostCard, [e.target.name]: e.target.value });
  };

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setCurrentCard({ ...currentCard, [name]: value });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/picture/traiteur/charcuterie', charcuteriePostCard)
      .then((res) => {
        console.log(res.data);
        setCharcuteriePostCard({ pictureUrl: '', name: '', price: '' });
        props.addCardCharcuterie(charcuteriePostCard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:5500/picture/traiteur/charcuterie/${id}`, currentCard)
      .then((res) => {
        console.log(res.data);
        setEditing(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {editing ? (
        <div>
          <h1>MODIFIER</h1>
          <form onSubmit={handleSubmitUpdate}>
            <input type='text' placeholder='Photo URL' name='pictureUrl' value={currentCard.pictureUrl} onChange={handleChangeUpdate} />

            <input type='text' placeholder='Nom' name='name' value={currentCard.name} onChange={handleChangeUpdate} />

            <input type='text' placeholder='Description' name='price' value={currentCard.price} onChange={handleChangeUpdate} />

            <button>MODIFIER</button>
            <button onClick={() => setEditing(false)}>ANNULER</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>AJOUTER</h1>
          <form onSubmit={handleSubmitPost}>
            <input type='text' placeholder='Photo URL' name='pictureUrl' value={charcuteriePostCard.pictureUrl} onChange={handleChangePost} />

            <input type='text' placeholder='Nom' name='name' value={charcuteriePostCard.name} onChange={handleChangePost} />

            <input type='text' placeholder='Description' name='price' value={charcuteriePostCard.price} onChange={handleChangePost} />
            <button>AJOUTER</button>
          </form>
        </div>
      )}

      <h3>Données actuelles : GALLERIE VIANDES</h3>
      <table>
        <thead>
          <tr>
            <th>Photo URL</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.charcuteries.length > 0 ? (
            props.charcuteries.map((index) => (
              <tr key={index._id}>
                <td>
                  <a className='url-picture' href={index.pictureUrl} target='_blank' rel='noopener noreferrer'>
                    {index.pictureUrl}
                  </a>
                </td>
                <td>
                  <p> {index.name}</p>
                </td>
                <td>
                  <p>{index.price}</p>
                </td>
                <td>
                  <button
                    onClick={() => {
                      editRow(index);
                    }}>
                    MODIFIER
                  </button>
                  <button onClick={() => props.handleDelete(index._id)}>SUPPRIMER</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>AUCUNE DONNÉE </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCharcuterie;
