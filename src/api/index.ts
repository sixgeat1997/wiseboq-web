import axios from "axios";
const WISEBOQ_BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_HOST || "http://localhost:3333";

export const api = () =>
  axios.create({
    baseURL: WISEBOQ_BACKEND,
  });
