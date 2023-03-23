import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import threadsReducer from "./threads/reducer";
import detailThreadReducer from "./detailThread/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    threads: threadsReducer,
    detailThread: detailThreadReducer,
  },
});

export default store;
