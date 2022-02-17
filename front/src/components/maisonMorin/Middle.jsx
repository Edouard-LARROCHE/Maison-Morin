import React from 'react';

const Middle = () => {
  return (
    <div className='middle-content'>
      <div className='head-parent'>
        <img src='/assets/victorien3.png' alt='Victorien' style={{ width: '25rem' }} />
        <div className='child-content'>
          <h2>« C’était une évidence »</h2>
          <br />
          <h3>
            « Quand mon père a pris sa décision de partir à la retraite, c’est tout naturellement que j’ai pensé à prendre sa place. J’ai, depuis mes
            12 ans, baigné dans l’odeur de la boutique et de l’atelier, c’était pour moi une évidence ».
          </h3>
        </div>
      </div>
      <div className='head-parent2'>
        <img src='/assets/victorien.png' alt='Victorien' style={{ width: '25rem' }} />
        <div className='child-content2'>
          <h2>- La filiation -</h2>
          <br />
          <h3>
            On pourrait croire que tout a changé dans la Maison Morin. Mais une chose est restée : la filiation, car c’est Victorien, le fils de
            Laurent qui a repris les rênes de la boutique.
          </h3>
        </div>
      </div>
      <div className='head-parent3'>
        <img src='/assets/inte.jpeg' alt='Victorien' style={{ width: '35rem' }} />
        <div className='child-content3'>
          <h2>« Ma patte »</h2>
          <br />
          <h3>
            Une façade d’un blanc éclatant, un intérieur blanc-bleu aux lumières tamisées, la boutique sent le neuf. « J’ai voulu montrer qu’il y
            avait un changement pour affirmer ma patte, mais cela reste la Maison Morin. J’ai gardé quelques grands noms de la salaisons et bien sur
            des terrines maisons ».
          </h3>
        </div>
      </div>
      <div className='head-parent4'>
        <img src='/assets/devanture1.png' alt='Victorien' style={{ width: '35rem' }} />
      </div>
    </div>
  );
};

export default Middle;
