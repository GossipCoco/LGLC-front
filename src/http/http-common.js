import axios from "axios";
import Config from '../../server'

export default axios.create({
  baseURL: Config.Url,
  headers: {
    "Content-type": "application/json"
  }
});