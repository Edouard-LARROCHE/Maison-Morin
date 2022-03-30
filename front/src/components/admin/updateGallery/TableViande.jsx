import React, { useState } from 'react';
import axios from 'axios';

const TableViande = (props) => {
  const [viandePostCard, setViandePostCard] = useState({ pictureUrl: '', name: '', price: '' });
  const [editing, setEditing] = useState(false);
  const initialForm = { _id: null, pictureUrl: '', name: '', price: '' };
  const [currentCard, setCurrentCard] = useState(initialForm);

  const editRow = (index) => {
    setEditing(true);
    setCurrentCard({ id: index._id, pictureUrl: index.pictureUrl, name: index.name, price: index.price });
  };

  const handleChangePost = (e) => {
    setViandePostCard({ ...viandePostCard, [e.target.name]: e.target.value });
  };

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setCurrentCard({ ...currentCard, [name]: value });
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:5500/picture/traiteur/viande', viandePostCard)
      .then((res) => {
        console.log(res.data);
        setViandePostCard({ pictureUrl: '', name: '', price: '' });
        props.addCardViande(viandePostCard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const id = currentCard.id;

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:5500/picture/traiteur/viande/${id}`, currentCard)
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

            <input type='text' placeholder='Prix' name='price' value={currentCard.price} onChange={handleChangeUpdate} />

            <button>MODIFIER</button>
            <button onClick={() => setEditing(false)}>ANNULER</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>AJOUTER</h1>
          <form onSubmit={handleSubmitPost}>
            <input type='text' placeholder='Photo URL' name='pictureUrl' value={viandePostCard.pictureUrl} onChange={handleChangePost} />

            <input type='text' placeholder='Nom' name='name' value={viandePostCard.name} onChange={handleChangePost} />

            <input type='text' placeholder='Prix' name='price' value={viandePostCard.price} onChange={handleChangePost} />
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
          {props.viandes.length > 0 ? (
            props.viandes.map((index) => (
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

export default TableViande;
