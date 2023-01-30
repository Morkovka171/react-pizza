import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = getCartFromLS();
type TfindSameObject = (objToFind: CartItem, array: CartItem[]) => CartItem | undefined;

// Функция для поиска одинакового объекта в массиве объектов
const findSameObject: TfindSameObject = (objToFind, array) => {
  return array.find(
    (obj) =>
      JSON.stringify({ ...obj, count: 0 }) ===
      JSON.stringify({ ...objToFind, count: 0 })
  );
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = findSameObject(action.payload, state.items);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<CartItem>) {
      const findItem = findSameObject(action.payload, state.items);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const itemToRemoveIndex = state.items.findIndex(
        (obj) =>
          JSON.stringify({ ...obj, count: 0 }) ===
          JSON.stringify({ ...action.payload, count: 0 })
      );
      state.items.splice(itemToRemoveIndex, 1);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
