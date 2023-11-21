import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-aliceford-6a660d3de5c7.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true