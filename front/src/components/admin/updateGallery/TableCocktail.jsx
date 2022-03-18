import React, { useState } from 'react';
import axios from 'axios';

const TableCocktails = (props) => {
  const [cocktailsPostCard, setCocktailsPostCard] = useState({ pictureUrl: '', name: '', price: '' });

  const handleChange = (e) => {
    setCocktailsPostCard({ ...cocktailsPostCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/picture/cocktails', cocktailsPostCard)
      .then((res) => {
        console.log(res);
        setCocktailsPostCard({ pictureUrl: '', name: '', price: '' });
        props.addCardCocktail(cocktailsPostCard);
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
          <input type='text' placeholder='Photo URL' name='pictureUrl' value={cocktailsPostCard.pictureUrl} onChange={handleChange} />

          <input type='text' placeholder='Nom' name='name' value={cocktailsPostCard.name} onChange={handleChange} />

          <input type='text' placeholder='Prix' name='price' value={cocktailsPostCard.price} onChange={handleChange} />
          <button>AJOUTER</button>
        </form>
      </div>
      <h3>Données actuelles : GALLERIE COCKTAILS</h3>
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
          {props.cocktails.length > 0 ? (
            props.cocktails.map((index) => (
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

export default TableCocktails;
