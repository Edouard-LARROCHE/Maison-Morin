import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <h1>SELECTIONNÉ POUR VOUS</h1>
      <div className='display-selection'>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          dataSelection.map((selection) => (
            <div className='selection-card' key={selection._id}>
              <div className='selection-picture'>
                <img src={selection.pictureUrl} alt='MAISON-MORIN' />
              </div>
              <div className='selection-info'>
                <h2> {selection.name} </h2>
                <h4> {selection.price} </h4>
              </div>
              <div className='selection-button'>
                <Link to='/contact'>
                  <div className='btn-selection'>
                    <p>COMMANDER</p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Selection;