import React from "react";
import SliderImage from "./sliderImages/SliderImage";
import s from "./style.module.scss";

const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.containerOffer}>
        <div className={s.title}>Интересные предложения</div>
        <SliderImage />
      </div>
    </div>
  );
};

export default Main;
