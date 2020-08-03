import {useState} from 'react';

export default youtubeApi = () => {
  const [videos, setVideos] = useState([]);

  const handleFetch = async () => {
    console.log('fetching');
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${value}&type=video&key=AIzaSyAldwXu66J78b4iCenM5WY0wIxExou0RXo`,
    )
      .then((response) => {
        console.log(response.json());
        return response.json();
      })
      .then((data) => setVideos(data));
  };

  return {videos, handleFetch};
};
