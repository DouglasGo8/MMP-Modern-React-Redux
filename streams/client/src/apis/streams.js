import axios from "axios";

/**
 * @author dbatista
 */
export default axios.create({
  baseURL: "localhost:3666/streams"
})