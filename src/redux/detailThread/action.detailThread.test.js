/**
 * test scenario for getDetailThreadProcess
 *
 * - should dispatch action correctly when data fetching success
 * - should dispatch action and call alert correctly when data fetching failed
 *
 */

import api from "../../utils/api";
import { getDetailThreadProcess } from "./action";

const fakeThreadsResponse = {
  id: "thread-08_nUU2fhu1P5nre",
  title: "Pengalaman Belajar React di Dicoding",
  body: "Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.",
  createdAt: "2022-11-13T09:59:31.019Z",
  owner: {
    id: "user-5PqX6Ldhnk_ifroq",
    name: "Dimas Saputra",
    avatar: "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
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
};

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("getDetailThreadProcess", () => {
  beforeEach(() => {
    // backup original implementation
    api._getDetailThread = api.getDetailThread;
  });

  afterEach(() => {
    // restore original implementation
    api.getDetailThread = api._getDetailThread;

    // delete backup
    delete api._getDetailThread;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    api.getDetailThread = () => Promise.resolve(fakeThreadsResponse);

    const dispatch = jest.fn();

    await getDetailThreadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: "GET_DETAIL_THREAD_SUCCESS",
      payload: fakeThreadsResponse,
    });
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    api.getDetailThread = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    await getDetailThreadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: "GET_DETAIL_THREAD_ERROR",
      payload: fakeErrorResponse.message,
    });
  });
});
