import axios from "axios";

export default axios.create({
  baseURL: "https://burger-builder-1e0c5-default-rtdb.firebaseio.com/"
});
