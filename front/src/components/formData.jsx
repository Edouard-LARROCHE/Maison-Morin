import React from 'react';
import axios from 'axios';

function App() {
  axios.get('http://localhost:5500/api/stuff').then((res) => {
    console.log(res);
  });

  return (
    <div className='App'>
      <h1>requete API</h1>
    </div>
  );
}

export default App;
