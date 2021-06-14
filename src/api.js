import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "954501a7917537777d164694c45a2b2f",
    language: "en-US",
  },
});

export default api;
