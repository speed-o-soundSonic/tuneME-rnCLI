import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen from './Screen';

const DownloadButton = ({handleDownload}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        if (
          pan.x._value > 385 ||
          pan.y._value > 705 ||
          pan.x._value < -15 ||
          pan.y._value < -15
        ) {
          pan.setOffset({
            x: 0,
            y: 0,
          });
        } else
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
        styles.button,
        {transform: [{translateX: pan.x}, {translateY: pan.y}]},
      ]}
      {...panResponder.panHandlers}>
      <TouchableOpacity onPress={handleDownload}>
        <View>
          <MaterialCommunityIcons name="download-circle" size={40} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
  },
  button: {
    backgroundColor: 'yellow',
    width: 40,
    position: 'absolute',
    zIndex: 1000,
    borderRadius: 20,
    bottom: 695,
    right: 375,
  },
});

export default DownloadButton;
