import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:5080"
})
export default instance
// /process.env.REACT_APP_API_URL