import React from 'react';
import { Link } from 'react-router-dom';
import IndexAdmin from '../components/admin/updateAdmin/IndexAdmin';
import Index from '../components/admin/updateTraiteur/Index';

const Admin = () => {
  return (
    <div className='admin'>
      <Link to='/'>
        <button>DECONNEXION</button>
      </Link>
      <button onClick={() => window.location.reload(false)}>RAFRAICHIR</button>
      <IndexAdmin />
      <Index />
    </div>
  );
};

export default Admin;
