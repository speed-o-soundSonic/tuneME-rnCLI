import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const [value, setValue] = useState('');
  const [videos, setVideos] = useState([]);
  const [playVideo, setPlayVideo] = useState(null);
  const [index, setIndex] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [firstFetchData, setFirstFetchData] = useState([]);
  const [cachedVideos, setCachedVideos] = useState({
    path: [],
    videoDetails: [],
  });

  useEffect(() => {
    AsyncStorage.getItem('videoData').then((videoData) => {
      if (videoData) setCachedVideos(JSON.parse(videoData));
    });
  }, []);

  useEffect(() => {
    handleSecondFetch();
  }, [firstFetchData]);

  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);

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
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${value}&regionCode=de&type=video&key=AIzaSyDGal0YABa7HH1mnTQoJWxTt_OyD1aby3o`,
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        if (data) {
          setFirstFetchData(data.items);
        }
      })
      .catch((err) => console.log({error: err}));
  };

  const handleSecondFetch = async () => {
    const result = [];
    for (let video = 0; video < firstFetchData.length; video++) {
      await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${firstFetchData[video].id.videoId}&key=AIzaSyDGal0YABa7HH1mnTQoJWxTt_OyD1aby3o`,
      )
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          if (data) {
            let newVideoData = firstFetchData[video];
            newVideoData = data.items;
            result.push(newVideoData);
            if (video === firstFetchData.length - 1) setVideos(result.flat());
          }
        })
        .catch((err) => console.log(err));
    }
  };
  console.log('firstFetchData', firstFetchData);
  console.log('videos', videos);
  const handleValue = () => (e) => {
    setValue(e.nativeEvent.text);
  };

  const handlePress = (index, navigation, video) => () => {
    setIndex(index);
    setPlayVideo(video);
    navigation.navigate('Playing');
  };

  const colors = () => {
    return {
      primary: isEnabled ? '#65b854' : '#c40027',
      secondary: isEnabled ? '#889efc' : '#776103',
      black: isEnabled ? '#000' : '#fff',
      dark: isEnabled ? '#2f2f2f' : '#f0f0f0',
      medium: isEnabled ? '#7e7979' : '#818686',
      light: isEnabled ? '#f8f4f4' : '#070B0B',
      logo: isEnabled ? '#c40027' : '#65b854',
      white: isEnabled ? '#fff' : '#000',
      searchField: isEnabled ? '#020' : 'hsl(0, 0%, 92%)',
      searchIcon: isEnabled ? '#010' : 'hsl(0, 0%, 89%)',
    };
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
    isEnabled,
    setIsEnabled,
    toggleSwitch,
    colors,
  };
};
