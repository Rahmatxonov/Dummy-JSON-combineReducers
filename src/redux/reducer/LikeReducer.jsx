import { ADD_LIKE } from "../types";

const initialState = {
  likeProData: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likeProData: [...state.likeProData, action.likeData],
      };
    default:
      return state;
  }
};

export { likeReducer, initialState };
