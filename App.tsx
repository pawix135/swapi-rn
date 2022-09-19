import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, StatusBar} from 'react-native';

import Navigation from './src/navigations/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createTheme, ThemeProvider} from '@rneui/themed';

import starsBackground from './src/bg.jpg';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

//RNE Theme
const theme = createTheme({
  mode: 'dark',
});

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <ImageBackground
          source={starsBackground}
          style={{flex: 1, justifyContent: 'center'}}
          resizeMode="cover">
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <Navigation />
              <StatusBar barStyle={'light-content'} />
            </SafeAreaProvider>
          </BottomSheetModalProvider>
        </ImageBackground>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
