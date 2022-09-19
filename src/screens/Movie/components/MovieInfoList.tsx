import {SectionList, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Card, Text} from '@rneui/themed';
import MovieInfoItem from './MovieInfoItem';

type Props = {
  movie: Film;
};

const MovieInfoList: React.FC<Props> = ({movie}) => {
  let sections: MovieSection[] = [
    {title: 'Vehicles', data: movie.vehicles},
    {title: 'Characters', data: movie.characters},
    {title: 'Species', data: movie.species},
    {title: 'Starships', data: movie.starships},
    {title: 'Planets', data: movie.planets},
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={item => `info-${item.title}}`}
      renderItem={({item}) => <MovieInfoItem section={item} />}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default MovieInfoList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
});
