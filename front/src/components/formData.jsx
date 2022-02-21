import React from 'react';
import axios from 'axios';

function App() {
  axios.get('http://localhost:5500/api/stuff').then((res) => {
    console.log(res);
  });

  return (
    <div className='App'>
      <h1>requete API</h1>
      <form method='post' encType='multipart/form-data'>
        <input type='file' name='file' placeholder='Select file' />
        <br />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default App;
