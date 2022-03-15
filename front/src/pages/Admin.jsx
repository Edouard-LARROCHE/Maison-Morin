import React from 'react';
import { Link } from 'react-router-dom';
import IndexAdmin from '../components/admin/updateAdmin/IndexAdmin';
import Index from '../components/admin/updateTraiteur/Index';

const Admin = () => {
  return (
    <div className='admin'>
      <Link to='/'>
        <button>RETOUR SUR LE SITE</button>
      </Link>
      <IndexAdmin />
      <Index />
    </div>
  );
};

export default Admin;
