import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { settings } from "./SliderData";
import ICONS from "../../../../constants/icons/icons";
import s from "./style.module.scss";
import { fetchOffersAction } from "../../../../store/action/offers.action";

const SliderImage = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.offers);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const offersMap = () => {
    return offers.map((offer, index) => {
      const imgUrl = offer.image
        ? `https://goodsurfing.org${offer.image}`
        : require("./images/category(11).png");

      const city = offer.google_place_data.city;
      const country = offer.google_place_data.country;

      return (
        <div className={s.container} key={index}>
          <div className={s.card}>
            <div className={s.shadowContainer}>
              <img className={s.cover} src={imgUrl} alt={index} />
              <h2 className={s.title}>{offer.title}</h2>
              <p className={s.address}>{`${city}, ${country}`}</p>
              {/* <p className={s.work}>{offer.work}</p> */}
              <div>
                <p className={s.rateText}>{offer.rate ? offer.rate : 0}</p>
                <img src={ICONS.rate} className={s.rateIcon} alt="rate" />
              </div>
              <p className={s.reviews}>Отзывов: {offer.reviews_count}</p>
              <p className={s.departed}>
                Отправились: {offer.accepted_requests_count}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <Slider {...settings}>{offersMap()}</Slider>;
};

export default SliderImage;
