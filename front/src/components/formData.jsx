import React, { useState } from 'react';

function App() {
  const [postPicture, setPostPicture] = useState(null);
  const [setFile] = useState();

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  return (
    <div className='App'>
      <input type='file' id='file-upload' name='file' accept='.jpg, .jpeg, .png' onChange={(e) => handlePicture(e)} />
      <img src={postPicture} alt='test' />
      <img src='/upload/devanture.jpeg' alt='test' />
    </div>
  );
}

export default App;
