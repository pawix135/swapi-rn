import {StyleSheet, Text, View, ActionSheetIOS} from 'react-native';
import React from 'react';
import {MovieScreenProps} from '../../types/navigations';
import {Button, Icon} from '@rneui/themed';

const MovieScreen: React.FC<MovieScreenProps> = ({route, navigation}) => {
  let {movie} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: route.params.movie.title,
      headerBackTitle: 'Back',
      headerBackTitleStyle: {color: 'white'},
      headerBackImage(props) {
        return (
          <Icon name="chevron-left" size={24} style={{paddingHorizontal: 10}} />
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

const styles = StyleSheet.create({});
