import axios from 'axios'

const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: process.env.REACT_APP_INDER_YT_API_KEY,
   },
})

export default request
