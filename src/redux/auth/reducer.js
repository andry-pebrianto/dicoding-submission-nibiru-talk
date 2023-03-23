import { ActionType } from "./action";

const initialState = {
  isLoading: true,
  isError: false,
  data: null,
  error: null,
};

const authReducer = (auth = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.AUTH_SUCCESS:
      return {
        ...auth,
        isLoading: false,
        isError: false,
        data: payload,
        error: null,
      };
    case ActionType.AUTH_ERROR:
      return {
        ...auth,
        isLoading: false,
        isError: true,
        data: null,
        error: payload,
      };
    default:
      return auth;
  }
};

export default authReducer;
