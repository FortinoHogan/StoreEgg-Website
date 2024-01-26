import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CoinsState {
  value: number;
}

const initialState: CoinsState = {
  value: 1000,
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    ADD_VALUE: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    SUBTRACT_VALUE: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { ADD_VALUE, SUBTRACT_VALUE } = coinsSlice.actions;
export default coinsSlice.reducer;
