import {createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import PlayingScreen from '../screens/PlayingScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
      <Stack.Screen name="Playing" component={PlayingScreen} />
      <Stack.Screen name="Searc" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
