import React from 'react';

const TablePoisson = (props) => {
  return (
    <div>
      <h3>Données actuelles : GALLERIE POISSONS</h3>
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
          {props.poissons.length > 0 ? (
            props.poissons.map((index) => (
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

export default TablePoisson;
