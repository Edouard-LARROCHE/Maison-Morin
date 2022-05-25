import React, { useState } from 'react';

const Infos = () => {
  const [display, setDisplay] = useState('second-half-left');
  const handleClick = () => {
    const button = document.querySelector('.svg-button-left');
    setDisplay('animationClick');
    button.addEventListener('click', handleClick);
  };
  const [display2, setDisplay2] = useState('second-half-right');
  const handleClick2 = () => {
    const button = document.querySelector('.svg-button-right');
    setDisplay2('animationClick');
    button.addEventListener('click', handleClick2);
  };
  const [display3, setDisplay3] = useState('second-half-center');
  const handleClick3 = () => {
    const button = document.querySelector('.svg-button-center');
    setDisplay3('animationClickCenter');
    button.addEventListener('click', handleClick3);
  };
  return (
    <div className='panels-infos'>
      <div className='panel-left'>
        <div className='content-container'>
          <div className='global-infos'>
            <div className='first-half-l'>
              <div className='spacing'></div>
              <img className='infos-img' src='/assets/proche-colorv1-112.png' alt='' />
              <p className='first-half-text'>Proximité</p>
              <p className='first-half-text-second'>Profitez des saveurs de notre magnifique région</p>
            </div>
            <div className='round-l'>
              <img className='svg-button-left' src='/svg/add-svgrepo-com.svg' alt='' onClick={handleClick} />
            </div>
            <div className='englo-anim-l'>
              <div className={display}>
                <h2>Des produits de qualité</h2>
                <p>
                  Chez Maison Morin, nous favorisons les circuits courts afin de faire vivre les producteurs proches de chez vous. Venez découvrir les
                  saveurs de notre magnifique région et tout ce qu'elle a à vous offrir, nos produits artisanaux de l'entrée au désert, nos plats
                  cuisiniés fait maison élaborés sur place ou encore nos vins, vous trouverez de quoi combler vos envies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='panel-left-overlay'></div>
      </div>
      <div className='panel-center'>
        <div className='content-center-container'>
          <div className='global-infos-center'>
            <div className='first-half-c'>
              <div className='spacing-center'></div>
              <img className='infos-img' src='/assets/ecologie-colorv1-112.png' alt='' />
              <p className='first-half-text'>Ecologie</p>
              <p className='first-half-text-second'>Nous faisons attention à l'envirronement</p>
            </div>
            <div className='round-center'>
              <img className='svg-button-center' src='/svg/add-svgrepo-com.svg' alt='' onClick={handleClick3} />
            </div>
            <div className='englo-anim-c'>
              <div className={display3}>
                <h2>La planète</h2>
                <p>
                  L'écologie occupe une part importante chez Maison Morin, nos packaging sont entièrement recyclables, favorisant un circuit court,
                  nous réduisons les distances de transport afin de limiter l'impact environnemental négatif.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='panel-center-img-bg'>
          <div className='panel-center-overlay'></div>
        </div>
      </div>
      <div className='panel-right'>
        <div className='content-container'>
          <div className='global-infos'>
            <div className='first-half-r'>
              <div className='spacing'></div>
              <img className='infos-img' src='/assets/cupcake-white-112.png' alt='' />
              <p className='first-half-text'>Pâtisserie</p>
              <p className='first-half-text-second'>Découvrez nos nouveaux gâteaux succulents</p>
            </div>
            <div className='round-r'>
              <img className='svg-button-right' src='/svg/add-svgrepo-com.svg' alt='' onClick={handleClick2} />
            </div>
            <div className='englo-anim-r'>
              <div className={display2}>
                <h2>De nouvelles gourmandises</h2>
                <p>
                  Avis aux becs sucrés ! Venez découvrir nos nouvelles pâtisseries qui vous feront frétiller les papilles. Chez Maison Morin, venez
                  découvrir sans cesse de nouvelles pâtisseries, nous nous efforçons de retranscrir le maximum de saveur dans nos gâteaux, de quoi
                  égayer votre journée, n'hésitez pas à venir prendre des viénoisseries pour le plaisir des enfants comme des plus grands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='panel-right-overlay'></div>
      </div>
    </div>
  );
};

export default Infos;
