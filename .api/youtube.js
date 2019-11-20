import axios from 'axios'
const KEY = "AIzaSyBjtTvziQsDJX9kzDiF4gXY3iWwJTHIaas"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:
    {
        maxResults:6,
        part : 'snippet',
        key : KEY
    }
})
