/**
 * testing scenario
 *
 * - Thunk function getThreadsProcess
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed */

import api from "../../utils/api";
import { getThreadsProcess } from "./action";

const fakeThreadsResponse = [
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
    avatar: "https://ui-avatars.com/api/?name=Dimas Saputra&background=random",
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
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("getThreadsProcess", () => {
  beforeEach(() => {
    // backup original implementation
    api._getThreads = api.getThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getThreads = api._getThreads;

    // delete backup
    delete api._getThreads;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    api.getThreads = () => Promise.resolve(fakeThreadsResponse);

    const dispatch = jest.fn();

    await getThreadsProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: "GET_THREADS_SUCCESS",
      payload: fakeThreadsResponse,
    });
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    // arrange
    api.getThreads = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    await getThreadsProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: "GET_THREADS_ERROR",
      payload: fakeErrorResponse.message,
    });
  });
});
