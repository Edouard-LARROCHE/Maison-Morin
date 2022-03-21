import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

const Selection = () => {
  const [dataSelection, setDataSelection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: res } = await axios.get('http://localhost:5500/picture/selection');
        setDataSelection(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='selection'>
      <h2>SELECTIONNÉ POUR VOUS</h2>
      <div className='display-selection'>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          dataSelection.map((selection) => (
            <div className='selection-card' key={selection._id}>
              <img src={selection.pictureUrl} alt='MAISON-MORIN' />
              <div className='info-card'>
                <h3> {selection.name} </h3>
                <h3> {selection.price} </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Selection;
