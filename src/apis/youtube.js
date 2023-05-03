import axios from 'axios';

const KEY = 'AIzaSyBcPionobQBkuK5ka_Luacd315W5bs1VDw';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    playlistId: 'PLz-73W3QjbNsIk0RAkKEhgHLVSzTXExy-',
    key: KEY,
  },
});



/*
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 50,
    key: KEY,
  },
});
*/
