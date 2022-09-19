import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieScreenProps} from '../../types/navigations';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MovieInfoList from './components/MovieInfoList';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import MovieBottomSheet from './components/MovieBottomSheet';

const MovieScreen: React.FC<MovieScreenProps> = ({route, navigation}) => {
  let {movie} = route.params;

  //Bottom Sheet ref
  let bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  //Opens Bottom Sheet
  const onInfoPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  //Fetch movies on initial load
  React.useEffect(() => {
    //Change title and styles of back button
    navigation.setOptions({
      title: route.params.movie.title,
      headerBackTitle: 'Back',
      headerRight(props) {
        return (
          <TouchableOpacity onPress={onInfoPress}>
            <Text style={styles.headerRight}>Info</Text>
          </TouchableOpacity>
        );
      },
      headerBackTitleStyle: styles.headerBackTitleStyles,
      headerBackImage(props) {
        return (
          <Icon name="chevron-left" size={24} style={styles.backButtonIcon} />
        );
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <MovieBottomSheet movie={movie} ref={bottomSheetModalRef} />
      <MovieInfoList movie={movie} />
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRight: {
    paddingRight: 20,
    fontSize: 16,
    color: '#fff',
  },
  backButtonIcon: {
    paddingHorizontal: 10,
  },
  headerBackTitleStyles: {
    color: '#fff',
  },
});
