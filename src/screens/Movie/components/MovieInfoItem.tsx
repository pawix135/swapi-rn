import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sectionsImages} from '../../../utils/movieSections';
import {useNavigation} from '@react-navigation/native';
import {MovieScreenNavigationProp} from '../../../types/navigations';

type Props = {
  section: MovieSection;
};

const MovieInfoItem: React.FC<Props> = ({section}) => {
  let navigation = useNavigation<MovieScreenNavigationProp>();

  const goToMoreInfo = () => {
    navigation.navigate('Info', {data: section.data, name: section.title});
  };

  return (
    <TouchableOpacity onPress={goToMoreInfo}>
      <Card>
        <Card.Image
          source={sectionsImages[section.title]}
          style={styles.cardImageStyles}
          containerStyle={styles.cardImageContainerStyles}
          resizeMode="contain"
        />
        <Card.Title>{section.title}</Card.Title>
      </Card>
    </TouchableOpacity>
  );
};

export default MovieInfoItem;

const styles = StyleSheet.create({
  cardImageContainerStyles: {flex: 1, width: '100%', aspectRatio: 1},
  cardImageStyles: {height: '100%'},
});
