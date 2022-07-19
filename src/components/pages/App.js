import React from "react";
import SliderImage from "./sliderImages/SliderImage";
import { store } from "../store/store";
import { Provider } from "react-redux";
import s from "./style.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={s.container}>
        <div className={s.containerOffer}>
          <div className={s.title}>Интересные предложения</div>
          <SliderImage />
        </div>
      </div>
    </Provider>
  );
}

export default App;
