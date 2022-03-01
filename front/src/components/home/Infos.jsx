import React, { useState, useEffect } from "react";

const Infos = () => {
    const [display, setDisplay] = useState('second-half-left');
        const handleClick = () => {
        const button = document.querySelector('.svg-button-left');
        setDisplay('animationClick');
        button.addEventListener("click", handleClick);
    }
    const [display2, setDisplay2] = useState('second-half-right');
        const handleClick2 = () => {
        const button = document.querySelector('.svg-button-right');
        setDisplay2('animationClick');
        button.addEventListener("click", handleClick2);
    }
    const [display3, setDisplay3] = useState('second-half-center');
        const handleClick3 = () => {
        const button = document.querySelector('.svg-button-center');
        setDisplay3('animationClickCenter');
        button.addEventListener("click", handleClick3);
    }
    return (
        <div className="panels-infos">
            <div className="panel-left">
                <div className="content-container">
                    <div className="global-infos">
                        <div className="first-half">
                            <div className="spacing"></div>
                            <img className="infos-img" src="/assets/proche-colorv1-112.png" alt="" />
                            <p className="first-half-text">Proximité</p>
                            <p className="first-half-text-second">Profitez des saveurs de notre magnifique région</p>
                            <div className="round">
                                <img className="svg-button-left" src="/assets/add-svgrepo-com.svg" alt="" onClick={handleClick}/>
                            </div>
                        </div>
                        <div className={display}>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates, eveniet recusandae facilis tempora, expedita hic voluptatibus nesciunt est tempore quia dolores mollitia doloremque. Neque libero itaque quos dolore non.
                            In pariatur, tempore ab eius voluptates a neque quibusdam dolorem corporis molestiae, voluptatum soluta blanditiis numquam fuga doloribus commodi! Quo adipisci dignissimos impedit, tempore a iure fugiat nemo amet expedita?
                            In, omnis nemo placeat natus adipisci quo nesciunt expedita ea veritatis harum, numquam dolore temporibus mollitia commodi recusandae reiciendis ad voluptatibus pariatur ex. Iste magni quibusdam dolorem porro eaque</p>
                        </div>
                    </div>
                </div>
                <div className="panel-left-overlay">
                </div>
            </div>
            <div className="panel-center">
                <div className="content-center-container">
                    <div className="global-infos-center">
                        <div className="first-half">
                            <div className="spacing-center"></div>
                            <img className="infos-img" src="/assets/ecologie-colorv1-112.png" alt="" />
                            <p className="first-half-text">Ecologie</p>
                            <p className="first-half-text-second">Nous faisons attention à l'envirronement</p>
                            <div className="round-center">
                                <img className="svg-button-center" src="/assets/add-svgrepo-com.svg" alt="" onClick={handleClick3}/>
                            </div>
                        </div>
                        <div className={display3}>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea cupiditate eum nisi velit eius maxime tempore. Tempore sapiente quidem excepturi laboriosam omnis ducimus corporis voluptatibus, recusandae, facere, voluptatem optio odio?
                            Voluptas repudiandae illum non pariatur numquam animi ab esse eum eaque.</p>
                        </div>
                    </div>
                </div>
                <div className="panel-center-img-bg">
                    <div className="panel-center-overlay"></div>
                </div>
            </div>
            <div className="panel-right">
                <div className="content-container">
                    <div className="global-infos">
                        <div className="first-half">
                            <div className="spacing"></div>
                            <img className="infos-img" src="/assets/cupcake-white-112.png" alt="" />
                            <p className="first-half-text">Pâtisserie</p>
                            <p className="first-half-text-second">Découvrez nos nouveaux gâteaux succulents</p>
                            <div className="round">
                                <img className="svg-button-right" src="/assets/add-svgrepo-com.svg" alt="" onClick={handleClick2}/>
                            </div>
                        </div>
                        <div className={display2}>
                            <h2>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates, eveniet recusandae facilis tempora, expedita hic voluptatibus nesciunt est tempore quia dolores mollitia doloremque. Neque libero itaque quos dolore non.
                            In pariatur, tempore ab eius voluptates a neque quibusdam dolorem corporis molestiae, voluptatum soluta blanditiis numquam fuga doloribus commodi! Quo adipisci dignissimos impedit, tempore a iure fugiat nemo amet expedita?
                            In, omnis nemo placeat natus adipisci quo nesciunt expedita ea veritatis harum, numquam dolore temporibus mollitia commodi recusandae reiciendis ad voluptatibus pariatur ex. Iste magni quibusdam dolorem porro eaque</p>
                        </div>
                    </div>
                </div>
                <div className="panel-right-overlay">
                </div>
            </div>
        </div>
    );
};

export default Infos;

