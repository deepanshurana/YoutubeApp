import {useState, useEffect} from 'react';
import youtube from '../apis/youtubeapi';

const useVideos = (defaultsearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        search(defaultsearchTerm);
      }, []);


    const search =  async (term) => {
        const p = {
          params: {
            q: term
          }
        }
        const res = await youtube.get('/search', p);
        setVideos(res.data.items);
      }

    return [videos, search];
}


export default useVideos;