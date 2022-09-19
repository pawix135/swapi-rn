import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DarkTheme, Theme} from '@react-navigation/native';
import * as React from 'react';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import {TabNavPropsList} from '../types/navigations';
import {handleIcon} from '../utils/tabBarIcons';
import MoviesStackNavigation from './MoviesStackNavigation';

const Tabs = createBottomTabNavigator<TabNavPropsList>();

type Props = {};

//React Native Navigation Theme
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
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tabs.Screen
          name="Movies"
          component={MoviesStackNavigation}
          options={{
            tabBarIcon: props => {
              return handleIcon({...props, name: 'movie'});
            },
          }}
        />
        <Tabs.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            tabBarIcon: props => {
              return handleIcon({...props, name: 'settings'});
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
