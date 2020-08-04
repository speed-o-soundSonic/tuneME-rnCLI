import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const [value, setValue] = useState('');
  const [videos, setVideos] = useState([]);
  const [playVideo, setPlayVideo] = useState(null);
  const [index, setIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [cachedVideos, setCachedVideos] = useState({
    path: [],
    videoDetails: [],
  });

  useEffect(() => {
    AsyncStorage.getItem('videoData').then((videoData) => {
      if (videoData) setCachedVideos(JSON.parse(videoData));
    });
  }, []);

  const handleSetCachedVideos = (videoData) => {
    AsyncStorage.setItem('videoData', JSON.stringify(videoData)).then(() =>
      setCachedVideos(videoData),
    );
  };

  const handleChangeVideo = (newVideo) => {
    setCachedVideos(newVideo);
  };

  const handleFetch = async () => {
    setPlayVideo(null);

    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${value}&regionCode=de&type=video&key=AIzaSyBNrPNjDGE4NZstgOdUhPkqhxn7ZssBgPE`,
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        if (data) {
          setVideos(data.items);
        }
      })
      .catch((err) => console.log({error: err}));
  };

  const handleValue = () => (e) => {
    setValue(e.nativeEvent.text);
  };

  const handlePress = (index, navigation, video) => () => {
    setIndex(index);
    setPlayVideo(video);
    navigation.navigate('Playing');
  };

  return {
    value,
    setValue,
    videos,
    setVideos,
    cachedVideos,
    handleSetCachedVideos,
    index,
    setIndex,
    handleFetch,
    handleValue,
    handlePress,
    playVideo,
    setCachedVideos,
    handleChangeVideo,
    isLoading,
    setIsLoading,
    downloaded,
    setDownloaded,
  };
};
