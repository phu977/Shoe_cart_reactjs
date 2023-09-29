import { shoeArr } from "../Data";
import {
  BUY_SHOE,
  CHANGEQUANTITY,
  REMOVE_ITEM,
  VIEW,
} from "./constant/constant";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cartShoe: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHOE: {
      let cloneCart = [...state.cartShoe];
      var index = cloneCart.findIndex((item) => {
        return item.id == action.payload.id;
      });
      if (index == -1) {
        let newShoe = { ...action.payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }
      state.cartShoe = cloneCart;
      return { ...state };
    }
    case REMOVE_ITEM: {
      let cloneCart = [...state.cartShoe];
      let index = cloneCart.findIndex((item) => {
        return item.id == action.payload.id;
      });
      cloneCart.splice(index, 1);
      state.cartShoe = cloneCart;
      return { ...state };
    }
    case CHANGEQUANTITY: {
      let { id, option } = action.payload;
      let cloneCart = [...state.cartShoe];
      let index = cloneCart.findIndex((item) => {
        return item.id == id;
      });
      cloneCart[index].soLuong = cloneCart[index].soLuong + option;
      cloneCart[index].soLuong == 0 && cloneCart.splice(index, 1);
      return { ...state, cartShoe: cloneCart };
    }
    case VIEW: {
      state.detail = action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
