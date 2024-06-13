import axios from "axios";
import config from '../../server'
const instance = axios.create({
  baseURL: config.Url+":8081/Api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;