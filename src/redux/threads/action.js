import api from "../../utils/api";

const ActionType = {
  GET_THREADS_SUCCESS: "GET_THREADS_SUCCESS",
  GET_THREADS_ERROR: "GET_THREADS_ERROR",
};

const getThreadsProcess = () => async (dispatch) => {
  try {
    const threadsData = await api.getThreads();

    dispatch({
      type: ActionType.GET_THREADS_SUCCESS,
      payload: threadsData,
    });
  } catch (error) {
    dispatch({
      type: ActionType.GET_THREADS_ERROR,
      payload: error.message,
    });
  }
};

const postThreadsProcess = ({ title, category, body }) => async (dispatch) => {
  try {
    await api.createThread({ title, category, body });

    dispatch(getThreadsProcess());
  } catch (error) {
    dispatch(getThreadsProcess());
  }
};

export { ActionType, getThreadsProcess, postThreadsProcess };
