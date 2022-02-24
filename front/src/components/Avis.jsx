import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Style Swiper
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export default function Avis() {
    return (
        <div className="container-avis">
            <div className="add-avis">
                {/* <h1>Quelques avis de nos clients</h1> */}
            </div>                
            <div className='avis-btn' href="#">
                <a href="">Donner un avis Google</a>
            </div>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>
            <div className="comment-box-sp">
                <h3> “ Toujours excellent, un vrai plaisir pour les papilles. Un accueil extra et une équipe fort sympathique. ”</h3>
                <div className="arrow-sp"></div>
                <div className="comment-author-sp">
                    <h1>Stéphanie Pestel</h1>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="comment-box-stp">
                <h3> “ Super accueil et de très bon conseils. Une cuisine délicieuse et raffinée. Je recommande a 100% ”</h3>
                <div className="arrow-stp"></div>
                <div className="comment-author-stp">
                    <h1>Cauline Rolmilaguet</h1>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="comment-box-sl">
                <h3> “ Très bon traiteur et en plus très accueillant!Je recommande!! ”</h3>
                <div className="arrow-sl"></div>
                <div className="comment-author-sl">
                    <h1>Stéphane Leblanc</h1>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="comment-box-kn">
                <h3> “ Très bon traiteur sur Barbizon. Les produits sont frais et de qualité. Tout est fait maison, 
                    c'est très agréable, nous nous sommes régalés ! Accueil chaleureux. Bons conseils. Je recommande sans hésiter ! ”</h3>
                <div className="arrow-kn"></div>
                <div className="comment-author-kn">
                    <h1>Kelly Naar</h1>
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
}
    