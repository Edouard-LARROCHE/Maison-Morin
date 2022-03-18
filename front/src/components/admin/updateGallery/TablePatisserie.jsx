import React, { useState } from 'react';
import axios from 'axios';

const TablePatisserie = (props) => {
  const [patisseriePostCard, setPatisseriePostCard] = useState({ pictureUrl: '', name: '', price: '' });

  const handleChange = (e) => {
    setPatisseriePostCard({ ...patisseriePostCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:5500/picture/patisserie/patisseries', patisseriePostCard)
      .then((res) => {
        console.log(res);
        setPatisseriePostCard({ pictureUrl: '', name: '', price: '' });
        props.addCardPatisserie(patisseriePostCard);
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
          <input type='text' placeholder='Photo URL' name='pictureUrl' value={patisseriePostCard.pictureUrl} onChange={handleChange} />

          <input type='text' placeholder='Nom' name='name' value={patisseriePostCard.name} onChange={handleChange} />

          <input type='text' placeholder='Prix' name='price' value={patisseriePostCard.price} onChange={handleChange} />
          <button>AJOUTER</button>
        </form>
      </div>
      <h3>Données actuelles : GALLERIE PÂTISSERIE</h3>
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
          {props.patisseries.length > 0 ? (
            props.patisseries.map((index) => (
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

export default TablePatisserie;
