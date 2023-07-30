import store from "../redux";
export default function logout() {
  localStorage.removeItem("token");
  store.dispatch({ type: "SET_IS_LOGGED", data: false });
  store.dispatch({ type: "REMOVE_PROFILE", data: {} });
}
