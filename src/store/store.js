import { configureStore } from "@reduxjs/toolkit";
import { offersReducer } from "./reducer/offers.reducer";

export const store = configureStore({
  reducer: {
    offers: offersReducer.reducer,
  },
});
