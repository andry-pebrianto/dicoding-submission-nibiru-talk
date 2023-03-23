import { ActionType } from "./action";

const initialState = {
  isLoading: true,
  isError: false,
  data: {},
  error: null,
};

const detailThreadReducer = (detailThread = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.GET_DETAIL_THREAD_SUCCESS:
      return {
        ...detailThread,
        isLoading: false,
        isError: false,
        data: payload,
        error: null,
      };
    case ActionType.GET_DETAIL_THREAD_ERROR:
      return {
        ...detailThread,
        isLoading: false,
        isError: true,
        data: null,
        error: payload,
      };
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
