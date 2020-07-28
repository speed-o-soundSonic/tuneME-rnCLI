import React, {useState} from 'react';

import Logo from './src/components/AppLogo';
import SearchScreen from './src/screens/SearchScreen';
import AppPlaying from './src/screens/PlayingScreen';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SongsContext from './src/contexts/songsContext';
import {Text, View, SafeAreaView} from 'react-native';

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=eros%20ramazzotti&type=video&key=AIzaSyBNrPNjDGE4NZstgOdUhPkqhxn7ZssBgPE

export default function App() {
  const [value, setValue] = useState('');
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);

  const handleFetch = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${value}&type=video&key=AIzaSyBNrPNjDGE4NZstgOdUhPkqhxn7ZssBgPE`,
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  };

  const handleValue = () => (e) => {
    setValue(e.nativeEvent.text);
  };

  const handlePress = (index, navigation) => () => {
    setIndex(index);
    navigation.navigate('Playing');
  };

  return (
    <SongsContext.Provider
      value={{value, videos, handleValue, handleFetch, index, handlePress}}>
      <Logo />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SongsContext.Provider>
  );
}
