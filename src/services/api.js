import axios from "axios";

const api = axios.create({
    baseURL: 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes'
});

export default api;