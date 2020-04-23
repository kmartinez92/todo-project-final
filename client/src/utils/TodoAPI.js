import axios from "axios";

export default {
  getTodo: () => {
    return axios.get("/api");
  },
  createTodo: (data) => {
    return axios.post("/api/create", data);
  },
  updateTodo: (data) => {
    return axios.put("/api/update", data);
  },
  deleteFruit: (data) => {
    return axios.post("/api/delete", data);
  },
};
