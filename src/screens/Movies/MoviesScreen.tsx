import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import MovieList from './components/MovieList';
import {episodeIdToPoster, handleMovies} from '../../utils/moviePosters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MoviesScreen: React.FC = () => {
  //Stores movies from SWAPI call
  const [movies, setMovies] = React.useState<Film[] | []>([]);

  React.useEffect(() => {
    let _movies: Film[] = [];

    let fetchMovies = async () => {
      //Get movies from storage if exists, otherwise fetch from API
      try {
        const checkStorage = await AsyncStorage.getItem('movies');
        if (checkStorage !== null) {
          console.info('Found movies, parsing data');
          let parsedStorage = JSON.parse(checkStorage);
          setMovies(handleMovies(parsedStorage));
          return;
        }
      } catch (error) {
        console.error('Error: ', error);
      }

      if (_movies.length < 1) {
        //API Call to SWAPI
        let response = await fetch('https://swapi.dev/api/films');
        let data: SWAPI_RESPONSE<Film> = await response.json();

        if (!data.results) return;

        _movies = data.results;

        //Saving movies to storage
        try {
          await AsyncStorage.setItem('movies', JSON.stringify(data.results));
          console.info('Saved movies');
        } catch (error) {
          console.error('Something went wrong while saving movies', error);
        }
      }

      //Save sorted movies, adds poster
      setMovies(handleMovies(_movies));
    };

    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <MovieList movies={movies} />
    </View>
  );
};

export default MoviesScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
