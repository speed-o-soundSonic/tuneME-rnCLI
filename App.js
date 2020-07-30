import React from 'react';

import Logo from './src/components/AppLogo';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SongsContext from './src/contexts/songsContext';
import useStore from './src/store';

export default function App() {
  const store = useStore();
  return (
    <SongsContext.Provider
      value={{
        value: store.value,
        videos: store.videos,
        handleValue: store.handleValue,
        handleFetch: store.handleFetch,
        index: store.index,
        handlePress: store.handlePress,
        cachedVideos: store.cachedVideos,
        setCachedVideos: store.setCachedVideos,
      }}>
      <Logo />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SongsContext.Provider>
  );
}
