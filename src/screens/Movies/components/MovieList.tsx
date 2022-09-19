import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import MovieListItem from './MovieListItem';
import MovieListSkeleton from './MovieListSkeleton';

type Props = {
  movies: Film[];
};

const MovieList: React.FC<Props> = ({movies}) => {
  return (
    //Renders list of movies
    <FlatList
      ListEmptyComponent={MovieListSkeleton}
      contentContainerStyle={{paddingBottom: 20}}
      data={movies}
      keyExtractor={item => item.title}
      renderItem={({item}) => <MovieListItem movie={item} />}
    />
  );
};

export default MovieList;
