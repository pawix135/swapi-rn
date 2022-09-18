import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, StatusBar, useColorScheme} from 'react-native';

import Navigation from './src/navigations/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTheme, ThemeProvider} from '@rneui/themed';

import starsBackground from './src/bg.jpg';

const theme = createTheme({
  mode: 'dark',
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ImageBackground
        source={starsBackground}
        style={{flex: 1, justifyContent: 'center'}}
        resizeMode="cover">
        <SafeAreaProvider>
          <Navigation />
          <StatusBar barStyle={'light-content'} />
        </SafeAreaProvider>
      </ImageBackground>
    </ThemeProvider>
  );
};

export default App;
