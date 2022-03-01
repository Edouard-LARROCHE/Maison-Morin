import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const TypingText = ({ content = '', speed = 0 }) => {
  const [typing, setTyping] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animType = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animType);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, [content.length, speed]);

  useEffect(() => {
    setTyping((typing) => typing + content[index]);
  }, [index, content]);

  return <div className='text-typing'>{typing}</div>;
};

const textTyping = `MAISON-MORIN`;

const Transition = () => {
  return (
    <>
      <div className='transition-pages'>
        <div className='transition-position-typing'>
          <TypingText content={textTyping} speed={120} />
        </div>
        <div className='transition-position-spinner'>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default Transition;
