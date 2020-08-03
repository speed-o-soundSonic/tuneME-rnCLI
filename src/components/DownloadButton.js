import React, {useRef, useContext} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';

import Screen from './Screen';
import SongsContext from '../contexts/songsContext';

const DownloadButton = ({handleDownload, style}) => {
  const {isLoading} = useContext(SongsContext);
  console.log(isLoading);
  const pan = useRef(new Animated.ValueXY()).current;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // if (
        //   pan.x._value > 385 ||
        //   pan.y._value > 705 ||
        //   pan.x._value < -15 ||
        //   pan.y._value < -15
        // ) {
        //   pan.setOffset({
        //     x: 0,
        //     y: 0,
        //   });
        // } else
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {transform: [{translateX: pan.x}, {translateY: pan.y}]},
      ]}
      {...panResponder.panHandlers}>
      <AnimatedTouchable onPress={handleDownload}>
        <View hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
          {isLoading === true ? (
            <Lottie
              autoPlay
              loop={false}
              source={require('../assets/animations/downloading.json')}
              style={{width: 75}}
            />
          ) : (
            <MaterialCommunityIcons name="download-circle" size={50} />
          )}
        </View>
      </AnimatedTouchable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    position: 'relative',
  },
});

export default DownloadButton;
