import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Logo from './src/components/AppLogo';
import AppNavigation from './src/navigation/AppNavigation';
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
        handleSetCachedVideos: store.handleSetCachedVideos,
        cachedVideos: store.cachedVideos,
        setCachedVideos: store.setCachedVideos,
        playVideo: store.playVideo,
        setIndex: store.setIndex,
        handleChangeVideo: store.handleChangeVideo,
        isLoading: store.isLoading,
        setIsLoading: store.setIsLoading,
        downloaded: store.downloaded,
        setDownloaded: store.setDownloaded,
        isEnabled: store.isEnabled,
        setIsEnabled: store.setIsEnabled,
        toggleSwitch: store.toggleSwitch,
        colors: store.colors(),
      }}>
      <Logo />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SongsContext.Provider>
  );
}
