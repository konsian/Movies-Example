import axios from "axios";

export default axios.create({
    // need to find proper baseURL to take the movies for the front-end or else to find different way to take the movies data (json form)
    baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"} 
})