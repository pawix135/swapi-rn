import {useNavigation} from '@react-navigation/native';
import {Card, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MoviecreenNavigationProp} from '../../../types/navigations';
type Props = {
  movie: Film;
};

const MovieListItem: React.FC<Props> = ({movie}) => {
  let navigation = useNavigation<MoviecreenNavigationProp>();

  const navigateToMovie = () => {
    navigation.navigate('Movie', {movie});
  };

  return (
    <TouchableOpacity onPress={navigateToMovie}>
      <Card>
        <Card.Image
          source={movie.poster}
          style={styles.cardImageStyles}
          containerStyle={styles.cardImageContainerStyles}
          resizeMode="contain"
        />
        <Card.Divider />
        <Card.Title>
          {movie.title} - ({movie.release_date.substring(0, 4)})
        </Card.Title>
        <Text style={styles.director}>{movie.director}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default MovieListItem;

export const styles = StyleSheet.create({
  cardImageContainerStyles: {flex: 1, width: '100%', aspectRatio: 1},
  cardImageStyles: {height: '100%'},
  director: {textAlign: 'center'},
});
