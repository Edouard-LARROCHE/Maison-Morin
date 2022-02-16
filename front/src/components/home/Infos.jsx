import React from "react";

const Infos = () => {
    return (
        <div className="wrapper-info">
            <div className="global-infos">
            <div className="eco">
                <img className="eco-img" src="/assets/ecologie.png" alt="" />
            </div>
            <h2>Ecologie</h2>
            <p>Nos packaging sont recyclables</p>
            </div>
            <div className="global-infos">
            <div className="proxi">
                <img className="proxi-img" src="/assets/proche.png" alt="" />
            </div>
            <h2>Proximité</h2>
            <p>Un circuit court, traditionnel</p>
            </div>
            <div className="global-infos">
            <div className="pat">
                <img className="pat-img" src="/assets/cupcake.png" alt="" />
            </div>
            <h2>Patisserie</h2>
            <p>Goûtez notre délicieuse patisserie</p>
            </div>                
        </div>
    );
};

export default Infos;
