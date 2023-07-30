import axios from "axios";
import store from "../../redux";
import { server } from "../../constants";
import handleErrors from "./_handleErrors";

axios.defaults.baseURL = `${server}/api`;
axios.defaults.headers["Content-Type"] = "application/json";

const token = localStorage.getItem("token");
const handleLoading = (type = "") => {
  store.dispatch({ type, data: [] });
};

if (token) axios.defaults.headers.Authorization = token;

axios.interceptors.request.use(
  (request) => {
    handleLoading("SHOW_LOADING");
    return request;
  },
  (error) => {
    handleLoading("SHOW_LOADING");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    handleLoading("HIDE_LOADING");
    return response;
  },
  (error) => {
    handleErrors(error);
    handleLoading("HIDE_LOADING");
    return Promise.reject(error);
  }
);

export default axios;
