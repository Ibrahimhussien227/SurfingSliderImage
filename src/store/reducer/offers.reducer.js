import { createSlice } from "@reduxjs/toolkit";
import { fetchOffersAction } from "../action/offers.action";

const initialState = {
  offers: [],
};

export const offersReducer = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { setOffers } = offersReducer.actions;
