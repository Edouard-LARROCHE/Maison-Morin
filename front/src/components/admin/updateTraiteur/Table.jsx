import React from 'react';
import axios from 'axios';

const Table = (props) => {
  const handleDelete = async (id) => {
    let popUp = window.confirm('Tu es sûr ?');
    if (popUp) {
      props.deleteCard(id);
    }
  };

  const handleDeleteApi = async (id) => {
    await axios
      .delete(`http://localhost:5500/picture/traiteur/viande/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
          {props.data.length > 0 ? (
            props.data.map((index) => (
              <tr key={index._id}>
                <td> {index.pictureUrl} </td>
                <td> {index.name} </td>
                <td> {index.price} </td>
                <td>
                  <button
                    onClick={() => {
                      props.editRow(index);
                    }}>
                    MODIFIER
                  </button>
                  <button onClick={() => handleDelete(index._id) && handleDeleteApi(index._id)}>SUPPRIMER</button>
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

export default Table;
