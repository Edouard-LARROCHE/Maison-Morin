import React, { useState } from 'react';
import axios from 'axios';
import TableViande from './TableViande';
import TablePoisson from './TablePoisson';

const Table = (props) => {
  const [show, setShow] = useState('viande');

  const handleDelete = async (id) => {
    let popUp = window.confirm('Tu es sûr ?');
    if (popUp) {
      props.deleteCard(id);
      await axios
        .delete(`http://localhost:5500/picture/traiteur/viande/${id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <ul>
        <li onClick={() => setShow('viande')}>viande</li>
        <li onClick={() => setShow('poisson')}>poisson</li>
      </ul>
      {(() => {
        switch (show) {
          case 'viande':
            return (
              <div>
                <TableViande viandes={props.viandes} editRow={props.editRow} deleteCard={props.deleteCard} handleDelete={handleDelete} />
              </div>
            );

          case 'poisson':
            return (
              <div>
                <TablePoisson poissons={props.poissons} editRow={props.editRow} deleteCard={props.deleteCard} handleDelete={handleDelete} />
              </div>
            );

          default:
            return null;
        }
      })()}
      {/* <ul>
        <li onClick={() => setShow(true)}>viande</li>
        <li onClick={() => setShow(false)}>poisson</li>
      </ul>
      {show ? (
        <div>
          <TableViande viandes={props.viandes} editRow={props.editRow} deleteCard={props.deleteCard} handleDelete={handleDelete} />
        </div>
      ) : (
        <div>
          <TablePoisson poissons={props.poissons} editRow={props.editRow} deleteCard={props.deleteCard} handleDelete={handleDelete} />
        </div>
      )} */}
    </>
  );
};

export default Table;
