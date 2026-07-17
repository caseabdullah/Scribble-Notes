import axios from "axios";

const api = axios.create({
    baseURL:"https://scribble-notes-delta.vercel.app/",
    withCredentials:true
});

export default api;