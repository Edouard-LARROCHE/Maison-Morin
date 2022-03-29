import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IndexUpdateSelection = () => {
  const [selection, setSelection] = useState([]);

  const fetchData = () => {
    axios
      .get('http://localhost:5500/picture/selection')
      .then((res) => {
        console.log(res.data);
        setSelection(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='update'>
      <div className='inline-flex'>
        <h2>3. MODIFIER / AJOUTER (! MAXIMUM 4) / SUPPRIMER DES CARTES : </h2>
        <h3>SELECTIONNÉ POUR VOUS</h3>
      </div>
      <div className='table'>
        {/* <Table
           
            /> */}
      </div>
    </div>
  );
};

export default IndexUpdateSelection;
