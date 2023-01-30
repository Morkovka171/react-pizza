import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const getCartItemsCountById = (id: string) => (state: RootState) =>
  state.cart.items
    .filter((obj) => obj.id === id)
    .reduce((sum, obj) => sum + obj.count, 0);
