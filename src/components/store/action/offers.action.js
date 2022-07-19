import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiUrls } from "../../../constants/urls";
import offers from "../../api/offers";
import { setOffers } from "../reducer/offers.reducer";

export const fetchOffersAction = createAsyncThunk(
  "/offers",
  async (_, { dispatch }) => {
    const response = await offers.get(ApiUrls.offers);
    dispatch(setOffers(response.data));
  }
);
