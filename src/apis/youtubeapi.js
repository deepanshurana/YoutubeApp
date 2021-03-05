import axios from 'axios';

const KEY = "AIzaSyC4-Bps6PH6HXr8sYUSyLeyfj8gU8Hqgto";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 10,
        key: KEY,

    }


})