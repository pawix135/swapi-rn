import * as React from 'react';
import {ImageSourcePropType, View} from 'react-native';
import MovieList from './components/MovieList';
import {episodIdToPoster} from '../../utils/moviePosters';

const MoviesScreen: React.FC = () => {
  const [movies, setMovies] = React.useState<Film[] | []>([]);

  React.useEffect(() => {
    let fetchMovies = async () => {
      let response = await fetch('https://swapi.dev/api/films');
      let data: SWAPI_RESPONSE<Film> = await response.json();

      if (!data.results) return;

      setMovies(
        data.results
          .sort((a, b) => {
            if (a.episode_id < b.episode_id) return -1;
            return 1;
          })
          .map((item, i) => {
            item.poster = episodIdToPoster[item.episode_id];
            return item;
          }),
      );
    };

    fetchMovies();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MovieList movies={movies} />
    </View>
  );
};

export default MoviesScreen;
