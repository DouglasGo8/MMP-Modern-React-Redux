import axios from "axios";

/**
 * @author dbatista
 */
export default axios.create({
  baseURL: "http://localhost:3666/streams",
  headers: {
    "Access-Control-Allow-Origin": true,
  },
});
