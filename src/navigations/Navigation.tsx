import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DarkTheme, Theme} from '@react-navigation/native';
import * as React from 'react';
import {TabNavPropsList} from '../types/navigations';
import MoviesStackNavigation from './MoviesStackNavigation';

const Tabs = createBottomTabNavigator<TabNavPropsList>();

type Props = {};

const theme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'transparent',
  },
  dark: true,
};

const Navigation: React.FC<Props> = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen name="Movies" component={MoviesStackNavigation} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
