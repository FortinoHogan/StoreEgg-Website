import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IProduct from "../../interfaces/IProduct";

export interface ProductState {
  data: IProduct[];
}

const initialState: ProductState = {
  data: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    BUY_PRODUCT: (state: any, action: PayloadAction<IProduct>) => {
      state.data.push(action.payload);
    },
    SELL_PRODUCT: (state, action: PayloadAction<number>) => {
      const productIndex = action.payload;
      
      if (productIndex >= 0 && productIndex < state.data.length) {
        state.data.splice(productIndex, 1);
      }
    }    
  },
});

export const { BUY_PRODUCT, SELL_PRODUCT } = productSlice.actions;
export default productSlice.reducer;
