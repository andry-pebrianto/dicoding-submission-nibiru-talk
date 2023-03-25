/**
 * test scenario for detailThread
 *
 * - should return the initial state when given by unknown action
 * - should return the threads data with action payload, isError equal to false, and error equal to null when given by GET_DETAIL_THREAD_SUCCESS action
 * - should return the threads data equal to null, isError equal to true, and error equal to action payload when given by GET_DETAIL_THREAD_ERROR action
 *
 */

import detailThreadReducer from "./reducer";

describe("detailThreadReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = {
      isLoading: true,
      isError: false,
      data: {},
      error: null,
    };
    const action = { type: "UNKNOWN" };

    // action
    const returnState = detailThreadReducer(initialState, action);

    // assert
    expect(returnState).toEqual(initialState);
  });

  it("should return the threads data with action payload, isError equal to false, and error equal to null when given by GET_DETAIL_THREAD_SUCCESS action", () => {
    // arrange
    const initialState = {
      isLoading: true,
      isError: false,
      data: {},
      error: null,
    };
    const expectedState = {
      isLoading: false,
      isError: false,
      data: {
        id: "thread-08_nUU2fhu1P5nre",
        title: "Pengalaman Belajar React di Dicoding",
        body: "Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.",
        createdAt: "2022-11-13T09:59:31.019Z",
        owner: {
          id: "user-5PqX6Ldhnk_ifroq",
          name: "Dimas Saputra",
          avatar:
            "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
        },
        category: "react",
        comments: [
          {
            id: "comment-YTSJSqOj7XQgFB33",
            content: "test",
            createdAt: "2022-12-13T04:32:25.594Z",
            owner: {
              id: "user-5PqX6Ldhnk_ifroq",
              name: "Dimas Saputra",
              avatar:
                "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
            },
            upVotesBy: [],
            downVotesBy: ["user-5PqX6Ldhnk_ifroq"],
          },
        ],
        upVotesBy: ["user-6oWew2w2Wx5xLUTU", "user-5PqX6Ldhnk_ifroq"],
        downVotesBy: [],
      },
      error: null,
    };
    const action = {
      type: "GET_DETAIL_THREAD_SUCCESS",
      payload: expectedState.data,
    };

    // action
    const returnState = detailThreadReducer(initialState, action);

    // assert
    expect(returnState).toEqual(expectedState);
  });

  it("should return the threads data equal to null, isError equal to true, and error equal to action payload when given by GET_DETAIL_THREAD_ERROR action", () => {
    // arrange
    const initialState = {
      isLoading: true,
      isError: false,
      data: {},
      error: null,
    };
    const expectedState = {
      isLoading: false,
      isError: true,
      data: null,
      error: "Something went wrong",
    };
    const action = {
      type: "GET_DETAIL_THREAD_ERROR",
      payload: expectedState.error,
    };

    // action
    const returnState = detailThreadReducer(initialState, action);

    // assert
    expect(returnState).toEqual(expectedState);
  });
});
