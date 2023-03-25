import { ActionType } from "./action";

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
  error: null,
};

const threadsReducer = (threads = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.GET_THREADS_SUCCESS:
      return {
        ...threads,
        isLoading: false,
        isError: false,
        data: payload,
        error: null,
      };
    case ActionType.GET_THREADS_ERROR:
      return {
        ...threads,
        isLoading: false,
        isError: true,
        data: [],
        error: payload,
      };
    default:
      return threads;
  }
};

export default threadsReducer;
