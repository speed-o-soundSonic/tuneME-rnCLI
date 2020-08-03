import {Platform} from 'react-native';

import colors from './colors';

export default {
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Helvetica',
    color: colors.white,
  },
};
