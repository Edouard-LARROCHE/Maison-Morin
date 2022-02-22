import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [imgFile, setImgFile] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5500/upload')

      .then((res) => {
        const data = res.data.img[0];
        console.log(data);
        setImgFile('http://localhost:5500/' + data.uploadImg);
        console.log(imgFile);
      });
  });

  return (
    <div className='App' style={{ height: '20rem' }}>
      <input type='file' name='image' accept='image/*' multiple={false} />

      {imgFile && <img src={imgFile} alt='img' />}
    </div>
  );
}

export default App;
