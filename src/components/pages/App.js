import React from "react";
import SliderImage from "./sliderImages/SliderImage";
import { store } from "../store/store";
import { Provider } from "react-redux";
import s from "./style.module.scss";

const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
const textStyle = isMobile ? "text-mobile" : "text-mobile";

const MyWrapperComponent = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const textStyle = isMobile ? "text-mobile" : "text-mobile";

  return <div className={textStyle}>{props.children}</div>;
};

function App() {
  return (
    <Provider store={store}>
      <MyWrapperComponent>
        <div className={s.container}>
          <div className={s.containerOffer}>
            <div className={s.title}>Интересные предложения</div>
            <SliderImage />
          </div>
        </div>
      </MyWrapperComponent>
    </Provider>
  );
}

export default App;
