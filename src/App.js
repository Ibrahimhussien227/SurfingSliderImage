import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Main from "./components/pages/Main";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
