import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [upload, setUpload] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5500/upload').then((res) => {
      const data = res.data.users;
      setUpload(data);
      console.log(data);
    });
  }, []);

  if (!upload) return null;

  return (
    <div className='App' style={{ height: '20rem' }}>
      <h1>requete API</h1>
      <div> {upload.profileImg} </div>
    </div>
  );
}

export default App;
