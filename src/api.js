import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

export const fetchUser = async () => {
  const storage = window.localStorage;
  const userId = storage.getItem("userId");

  let response;

  try {
    if (userId) {
      response = await axios.get(`${API}/users/${userId}`);
    } else {
      response = await axios.get(
        `${API}/users/${Math.ceil(Math.random() * 10)}`
      );
      storage.setItem("userId", response.data.id);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
