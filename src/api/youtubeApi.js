import { useState } from "react";

export default youtubeApi = () => {
  const [videos, setVideos] = useState([]);

  const handleFetch = async () => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}&type=video&key=AIzaSyBNrPNjDGE4NZstgOdUhPkqhxn7ZssBgPE`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  };

  return { videos, handleFetch };
};
