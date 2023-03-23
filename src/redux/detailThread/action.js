import api from "../../utils/api";

const ActionType = {
  GET_DETAIL_THREAD_SUCCESS: "GET_DETAIL_THREAD_SUCCESS",
  GET_DETAIL_THREAD_ERROR: "GET_DETAIL_THREAD_ERROR",
};

const getDetailThreadProcess = (id) => async (dispatch) => {
  try {
    const detailThreadData = await api.getDetailThread(id);

    dispatch({
      type: ActionType.GET_DETAIL_THREAD_SUCCESS,
      payload: detailThreadData,
    });
  } catch (error) {
    dispatch({
      type: ActionType.GET_DETAIL_THREAD_ERROR,
      payload: error.message,
    });
  }
};

const postCommentProcess = (id, comment) => async (dispatch) => {
  try {
    await api.createComment(id, comment);

    dispatch(getDetailThreadProcess(id));
  } catch (error) {
    dispatch(getDetailThreadProcess(id));
  }
};

export { ActionType, getDetailThreadProcess, postCommentProcess };
