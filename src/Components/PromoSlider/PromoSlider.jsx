import React, { useContext } from "react";
import Slider from "react-slick";

import { Promotions } from "../App/App.jsx";

import "../../media/css/Components/PromoSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const promotionList = useContext(Promotions);
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {promotionList.map((promotion) => {
        return (
          <div className="slider-container" key={promotion.id}>
            <div
              className={`slider-container__promo slider-container__promo_${promotion.name}`}
            >
              <div className="slider-container__information">
                <h1 className="slider-container__title">{promotion.title}</h1>
                <p className="slider-container__description">
                  {promotion.description}
                </p>
                <button className="slider-container__button">
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
