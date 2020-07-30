import {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

export default () => {
  const [value, setValue] = useState('');
  const [videos, setVideos] = useState([]);

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

  const [index, setIndex] = useState(null);

  const handleFetch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${value}&regionCode=de&type=video&key=AIzaSyAldwXu66J78b4iCenM5WY0wIxExou0RXo`,
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

  const handlePress = (index, navigation, item) => () => {
    setIndex(index);
    navigation.navigate('Playing');
  };

  return {
    value,
    setValue,
    videos,
    setVideos,
    cachedVideos,
    setCachedVideos: handleSetCachedVideos,
    index,
    setIndex,
    handleFetch,
    handleValue,
    handlePress,
  };
};
