import React from 'react';

import Logo from './src/components/AppLogo';
import SearchScreen from './src/screens/SearchScreen';
import AppPlaying from './src/screens/PlayingScreen';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=eros%20ramazzotti&type=video&key=AIzaSyBNrPNjDGE4NZstgOdUhPkqhxn7ZssBgPE

export default function App() {
  return (
    <>
      <Logo />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
