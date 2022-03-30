import React from 'react';
import axios from 'axios';
import TableSelection from './TableSelection';

const Table = (props) => {
  const handleDelete = async (id) => {
    let popUp = window.confirm('Tu es sûr ?');
    if (popUp) {
      props.deleteCard(id);
      await axios
        .delete(`http://localhost:5500/picture/selection/${id}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <TableSelection
        selection={props.selection}
        editRow={props.editRow}
        deleteCard={props.deleteCard}
        handleDelete={handleDelete}
        addCardSelection={props.addCardSelection}
      />
    </div>
  );
};

export default Table;
