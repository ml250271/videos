import axios from "axios";

const KEY = "AIzaSyBGSEKp9o-Hkn3EEzb1jpyZtoeRTGz2ERc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
