import {StyleSheet, Text, View, ActionSheetIOS} from 'react-native';
import React from 'react';
import {MovieScreenProps} from '../../types/navigations';
import {Icon} from '@rneui/themed';

const MovieScreen: React.FC<MovieScreenProps> = ({route, navigation}) => {
  let {movie} = route.params;

  //Fetch movies on initial load
  React.useEffect(() => {
    //Change title and looks of back button
    navigation.setOptions({
      title: route.params.movie.title,
      headerBackTitle: 'Back',
      headerBackTitleStyle: styles.headerBackTitleStyles,
      headerBackImage(props) {
        return (
          <Icon name="chevron-left" size={24} style={styles.backButtonIcon} />
        );
      },
    });
  }, []);

  return (
    <View>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  backButtonIcon: {
    paddingHorizontal: 10,
  },
  headerBackTitleStyles: {
    color: '#fff',
  },
});
