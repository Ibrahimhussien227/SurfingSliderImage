import React from "react";
import { useMediaQuery } from "react-responsive";
import SliderImage from "./sliderImages/SliderImage";
import s from "./style.module.scss";

const MyWrapperComponent = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const textStyle = isMobile ? "text-mobile" : "text-mobile";

  return <div className={textStyle}>{props.children}</div>;
};

function Main() {
  return (
    <MyWrapperComponent>
      <div className={s.container}>
        <div className={s.containerOffer}>
          <div className={s.title}>Интересные предложения</div>
          <SliderImage />
        </div>
      </div>
    </MyWrapperComponent>
  );
}

export default Main;
