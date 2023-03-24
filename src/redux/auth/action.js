import api from "../../utils/api";

const ActionType = {
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_ERROR: "AUTH_ERROR",
};

const authProcess = () => async (dispatch) => {
  try {
    const authData = await api.getOwnProfile();

    dispatch({
      type: ActionType.AUTH_SUCCESS,
      payload: authData,
    });
  } catch (error) {
    dispatch({
      type: ActionType.AUTH_ERROR,
      payload: error.message,
    });
  }
};

const loginProcess = ({ email, password }) => async (dispatch) => {
  try {
    await api.login({ email, password });

    dispatch(authProcess());
  } catch (error) {
    console.log(error);
  }
};

const registerProcess = ({ name, email, password }) => async (dispatch) => {
  try {
    await api.register({ name, email, password });

    dispatch(authProcess());
  } catch (error) {
    console.log(error);
  }
};

const logoutProcess = () => async (dispatch) => {
  try {
    api.putAccessToken("");

    dispatch(authProcess());
  } catch (error) {
    console.log(error);
  }
};

export {
  ActionType, authProcess, loginProcess, registerProcess, logoutProcess,
};
