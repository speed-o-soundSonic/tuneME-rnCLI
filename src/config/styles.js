import {Platform} from 'react-native';

export default {
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
  },
  detailsContainer: {
    fontSize: 12,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    justifyContent: 'space-around',
    textShadowColor: '#fff',
    textShadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    textShadowRadius: 0.1,
    letterSpacing: 0.7,
    padding: 2,
  },
  duration: {
    fontSize: 12,
    fontFamily: Platform.OS === ' android' ? 'Roboto' : 'Arial',
    position: 'absolute',
    bottom: 3,
    right: 0,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '300',
    textShadowColor: '#fff',
    textShadowOffset: {
      width: 0.2,
      height: 0.2,
    },
    textShadowRadius: 0.8,
    width: 50,
    height: 15,
    textAlign: 'center',
    borderRadius: 3,
    overflow: 'hidden',
  },
};
