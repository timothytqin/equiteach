import axios from "axios";

export default axios.create({
  baseURL: "https://fh9lh7e7oi.execute-api.us-east-2.amazonaws.com",
  responseType: "json",
});
