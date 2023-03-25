/**
 * test scenario for talksReducer
 *
 * - threads function reducer
 * - should return the initial state when given by unknown action
 * - should return the threads data with action payload, isError equal to false, and error equal to null when given by GET_THREADS_SUCCESS action
 * - should return the threads data equal to [], isError equal to true, and error equal to action payload when given by GET_THREADS_ERROR action
 *
 */

import threadsReducer from "./reducer";

describe("threadsReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = {
      isLoading: true,
      isError: false,
      data: [],
      error: null,
    };
    const action = { type: "UNKNOWN" };

    // action
    const returnState = threadsReducer(initialState, action);

    // assert
    expect(returnState).toEqual(initialState);
  });

  it("should return the threads data with action payload, isError equal to false, and error equal to null when given by GET_THREADS_SUCCESS action", () => {
    // arrange
    const initialState = {
      isLoading: true,
      isError: false,
      data: [],
      error: null,
    };
    const expectedState = {
      isLoading: false,
      isError: false,
      data: [
        {
          id: "thread-08_nUU2fhu1P5nre",
          title: "Pengalaman Belajar React di Dicoding",
          body: "Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.",
          category: "react",
          createdAt: "2022-11-13T09:59:31.019Z",
          ownerId: "user-5PqX6Ldhnk_ifroq",
          totalComments: 1,
          upVotesBy: ["user-6oWew2w2Wx5xLUTU", "user-5PqX6Ldhnk_ifroq"],
          downVotesBy: [],
          name: "Dimas Saputra",
          avatar:
            "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
        },
        {
          id: "thread-B3N9KGa87vfMHyBQ",
          title: "Halo! Selamat datang dan silakan perkenalkan diri kamu!",
          body: "<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>",
          category: "introduction",
          createdAt: "2022-11-13T09:55:55.353Z",
          ownerId: "user-6oWew2w2Wx5xLUTU",
          totalComments: 1,
          upVotesBy: ["user-5PqX6Ldhnk_ifroq", "user-6oWew2w2Wx5xLUTU"],
          downVotesBy: [],
          name: "Dicoding",
          avatar: "https://ui-avatars.com/api/?name=Dicoding&background=random",
        },
      ],
      error: null,
    };
    const action = { type: "GET_THREADS_SUCCESS", payload: expectedState.data };

    // action
    const returnState = threadsReducer(initialState, action);

    // assert
    expect(returnState).toEqual(expectedState);
  });

  it("should return the threads data equal to [], isError equal to true, and error equal to action payload when given by GET_THREADS_ERROR action", () => {
    // arrange
    const initialState = {
      isLoading: true,
      isError: false,
      data: [],
      error: null,
    };
    const expectedState = {
      isLoading: false,
      isError: true,
      data: [],
      error: "Something went wrong",
    };
    const action = { type: "GET_THREADS_ERROR", payload: expectedState.error };

    // action
    const returnState = threadsReducer(initialState, action);

    // assert
    expect(returnState).toEqual(expectedState);
  });
});
