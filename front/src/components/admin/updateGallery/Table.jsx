import React, { useState } from 'react';
import axios from 'axios';
import TableViande from './TableViande';
import TablePoisson from './TablePoisson';
import TableCharcuterie from './TableCharcuterie';
import TablePatisserie from './TablePatisserie';

const Table = (props) => {
  const [show, setShow] = useState('viande');

  const handleDelete = async (id) => {
    let urls = [
      `http://localhost:5500/picture/traiteur/viande/${id}`,
      `http://localhost:5500/picture/traiteur/poisson/${id}`,
      `http://localhost:5500/picture/traiteur/charcuterie/${id}`,
      `http://localhost:5500/picture/patisserie/patisseries/${id}`,
    ];

    let popUp = window.confirm('Tu es sûr ?');
    if (popUp) {
      props.deleteCard(id);
      Promise.all(urls.map((url) => axios.delete(url)))
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <ul className='switch-nav'>
        <li onClick={() => setShow('viande')}>viande</li>
        <li onClick={() => setShow('poisson')}>poisson</li>
        <li onClick={() => setShow('charcuterie')}>charcuterie</li>
        <li onClick={() => setShow('patisserie')}>pâtisserie</li>
      </ul>
      {(() => {
        switch (show) {
          case 'viande':
            return (
              <div>
                <TableViande
                  viandes={props.viandes}
                  editRow={props.editRow}
                  deleteCard={props.deleteCard}
                  handleDelete={handleDelete}
                  addCardViande={props.addCardViande}
                />
              </div>
            );

          case 'poisson':
            return (
              <div>
                <TablePoisson
                  poissons={props.poissons}
                  editRow={props.editRow}
                  deleteCard={props.deleteCard}
                  handleDelete={handleDelete}
                  addCardPoisson={props.addCardPoisson}
                />
              </div>
            );

          case 'charcuterie':
            return (
              <div>
                <TableCharcuterie
                  charcuteries={props.charcuteries}
                  editRow={props.editRow}
                  deleteCard={props.deleteCard}
                  handleDelete={handleDelete}
                  addCardCharcuterie={props.addCardCharcuterie}
                />
              </div>
            );

          case 'patisserie':
            return (
              <div>
                <TablePatisserie
                  patisseries={props.patisseries}
                  editRow={props.editRow}
                  deleteCard={props.deleteCard}
                  handleDelete={handleDelete}
                  addCardPatisserie={props.addCardPatisserie}
                />
              </div>
            );

          default:
            return null;
        }
      })()}
    </>
  );
};

export default Table;
