import React, { useState } from 'react';
import axios from 'axios';

const TableProdExcep = (props) => {
  const [prodExcepPostCard, setProdExcepPostCard] = useState({ pictureUrl: '', name: '', price: '' });

  const handleChange = (e) => {
    setProdExcepPostCard({ ...prodExcepPostCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/picture/produitsExcep', prodExcepPostCard)
      .then((res) => {
        console.log(res);
        setProdExcepPostCard({ pictureUrl: '', name: '', price: '' });
        props.addCardProduitExcep(prodExcepPostCard);
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
          <input type='text' placeholder='Photo URL' name='pictureUrl' value={prodExcepPostCard.pictureUrl} onChange={handleChange} />

          <input type='text' placeholder='Nom' name='name' value={prodExcepPostCard.name} onChange={handleChange} />

          <input type='text' placeholder='Prix' name='price' value={prodExcepPostCard.price} onChange={handleChange} />
          <button>AJOUTER</button>
        </form>
      </div>
      <h3>Données actuelles : GALLERIE PRODUITS EXCEPTIONNELS</h3>
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
          {props.prodexcep.length > 0 ? (
            props.prodexcep.map((index) => (
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

export default TableProdExcep;
