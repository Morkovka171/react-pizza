import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.length > 0 ? items.reduce((sum, obj) => obj.price * obj.count + sum, 0) : 0;
};
