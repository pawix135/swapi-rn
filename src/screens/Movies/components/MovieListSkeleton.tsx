import * as React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import MovieListSkeletonItem from './MovieListSkeletonItem';

let skeletonArray = [1, 2, 3, 4, 5, 6];

const MovieListSkeleton: React.FC = () => {
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 20}}
      data={skeletonArray}
      keyExtractor={item => `skeleton-${item}`}
      renderItem={({item}) => <MovieListSkeletonItem />}
    />
  );
};

export default MovieListSkeleton;
