import React from "react";

const Infos = () => {
    return (
        <div className="wrapper-info">
            <div className="eco">
                <img class="eco-img" src="/assets/ecologie.png" alt="" />
                <h3>Ecologie</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem exercitationem sequi non officiis odit.</p>
            </div>
            <div className="proxi">
                <img class="proxi-img" src="/assets/proche.png" alt="" />
                <h3>Proximité</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem exercitationem sequi non officiis odit.</p>
            </div>
            <div className="pat">
                <img class="pat-img" src="/assets/cupcake.png" alt="" />
                <h3>Patiserrie</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem exercitationem sequi non officiis odit.</p>
            </div>
        </div>
    );
};

export default Infos;
