import {Platform} from 'react-native';

export default {
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
  },
};
