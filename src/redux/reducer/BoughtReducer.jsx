import { ADD_BOUGHT } from "../types";

const initialState = {
  boughtData: [],
};
const boughtProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOUGHT:
      return {
        boughtData: [...state.boughtData, action.data],
      };
    default:
      return state;
  }
};

export { initialState, boughtProduct };
