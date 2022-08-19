import { actionTypes } from "../constants/action-types";

const initialState = {
  product: [
    {
      id: 1,
      title: "Dipesh",
      type: "programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
