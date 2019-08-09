import axios from 'axios';
const KEY='AIzaSyAL0PXO8OY9556hk5EpIVeNENrjgYXKt34';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:5,
        key : KEY
     }
  });