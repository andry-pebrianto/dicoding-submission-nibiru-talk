import { toast } from "react-toastify";

const api = (() => {
  const BASE_URL = "https://forum-api.dicoding.dev/v1";

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function register({ name, email, password }) {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const responseJson = await response.json();
      const { status, message } = responseJson;

      if (status !== "success") {
        throw new Error(message);
      }

      toast.success("Proses register berhasil, silahkan Login.");
    } catch (error) {
      toast.error("Proses register gagal.");
    }
  }

  async function login({ email, password }) {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== "success") {
        throw new Error(message);
      }

      const {
        data: { token },
      } = responseJson;

      putAccessToken(token);

      toast.success("Proses login berhasil.");
    } catch (error) {
      toast.error("Proses login gagal.");
    }
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function getThreads() {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { threads },
    } = responseJson;

    return threads;
  }

  async function getDetailThread(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { detailThread },
    } = responseJson;

    return detailThread;
  }

  async function createComment(id, comment) {
    try {
      const response = await _fetchWithAuth(
        `${BASE_URL}/threads/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: comment,
          }),
        }
      );

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== "success") {
        throw new Error(message);
      }

      toast.success("Berhasil membuat komentar.");
    } catch (error) {
      toast.error("Gagal membuat komentar.");
    }
  }

  async function createThread({ title, category, body }) {
    try {
      const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          category,
        }),
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== "success") {
        throw new Error(message);
      }

      toast.success("Berhasil membuat thread.");
    } catch (error) {
      toast.error("Gagal membuat thread.");
    }
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getThreads,
    getDetailThread,
    createComment,
    createThread,
  };
})();

export default api;
