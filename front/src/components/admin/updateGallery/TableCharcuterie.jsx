import React, { useState } from 'react';
import axios from 'axios';

const TableCharcuterie = (props) => {
  const [charcuteriePostCard, setCharcuteriePostCard] = useState({ pictureUrl: '', name: '', price: '' });

  const handleChange = (e) => {
    setCharcuteriePostCard({ ...charcuteriePostCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/picture/traiteur/charcuterie', charcuteriePostCard)
      .then((res) => {
        console.log(res);
        setCharcuteriePostCard({ pictureUrl: '', name: '', price: '' });
        props.addCardCharcuterie(charcuteriePostCard);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>AJOUTER</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Photo URL' name='pictureUrl' value={charcuteriePostCard.pictureUrl} onChange={handleChange} />

          <input type='text' placeholder='Nom' name='name' value={charcuteriePostCard.name} onChange={handleChange} />

          <input type='text' placeholder='Prix' name='price' value={charcuteriePostCard.price} onChange={handleChange} />
          <button>AJOUTER</button>
        </form>
      </div>
      <h3>Données actuelles : GALLERIE CHARCUTERIES</h3>
      <table>
        <thead>
          <tr>
            <th>Photo URL</th>
            <th>Nom</th>
            <th>Prix</th>
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
                      props.editRow(index);
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
