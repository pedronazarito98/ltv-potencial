import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.hsforms.com/submissions/v3/integration/submit/",

  headers: { "Content-Type": "application/json" },
});
