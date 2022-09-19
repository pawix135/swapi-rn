import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoviesScreen from '../screens/Movies/MoviesScreen';
import {StackNavPropsList} from '../types/navigations';
import MovieScreen from '../screens/Movie/MovieScreen';

const Stack = createStackNavigator<StackNavPropsList>();

const MoviesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{title: 'Choose movie'}}
        component={MoviesScreen}
      />
      <Stack.Screen name="Movie" options={{title: 'Pick movie'}}>
        {props => <MovieScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MoviesStackNavigation;
