
// import {
//   getallAppData,
//   getallCuopneData,
//   getallHomeData,
//   getallSuperdealData,
//   getNEWData,
// } from "../redux/action";

import { APPLY_ONLY, COUPON, HOME_DATA, SUPER_DEALS ,NEW_ARRIVAlS} from "../redux/action";

const initState = {
  productHome: [],
  productCoupen: [],
  productApp: [],
  productSuper: [],
  productNew: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case HOME_DATA:
      return {
        ...state,
        productHome: action.payload,
      };
    case COUPON:
      return {
        ...state,
        productCoupen: action.payload,
      };
    case  APPLY_ONLY:
      return {
        ...state,
        productApp: action.payload,
      };
    case SUPER_DEALS:
      return {
        ...state,
        productSuper: action.payload,
      };
    case NEW_ARRIVAlS:
      return {
        ...state,
        productNew: action.payload,
      };
    default:
      return state;
  }
};
