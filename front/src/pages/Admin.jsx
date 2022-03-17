import React from 'react';
import { Link } from 'react-router-dom';
import IndexAdmin from '../components/admin/updateAdmin/IndexAdmin';
import IndexUpdateGallery from '../components/admin/updateGallery/update/IndexUpdateGallery';

const Admin = () => {
  return (
    <div className='admin'>
      <Link to='/'>
        <button>DECONNEXION</button>
      </Link>
      <button onClick={() => window.location.reload(false)}>RAFRAICHIR</button>
      <IndexAdmin />
      <IndexUpdateGallery />
    </div>
  );
};

export default Admin;
