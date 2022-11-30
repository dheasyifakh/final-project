import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

// export const fetchURL = 'https://www.omdbapi.com/?s=man&apikey=65525897'