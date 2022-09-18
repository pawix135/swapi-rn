import {useNavigation} from '@react-navigation/native';
import {Card, Image, Text} from '@rneui/themed';
import React from 'react';
import {View, Image as ImageRN} from 'react-native';
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
          style={{height: '100%'}}
          containerStyle={{flex: 1, width: '100%', aspectRatio: 1}}
          resizeMode="contain"
        />
        <Card.Divider />
        <Card.Title>
          {movie.title} - ({movie.release_date.substring(0, 4)})
        </Card.Title>
        <Text style={{textAlign: 'center'}}>{movie.director}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default MovieListItem;
