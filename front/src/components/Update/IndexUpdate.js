import React from 'react';
import { Link } from 'react-router-dom';

const IndexUpdate = () => {
  return (
    <div>
      <h1>Crud update data</h1>
      <Link to='/'>
        <button>Retour</button>
      </Link>
    </div>
  );
};

export default IndexUpdate;
