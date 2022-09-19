import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';

type Props = {
  movie: Film;
};

//Forward ref for Bottom Sheet
const MovieBottomSheet = React.forwardRef<BottomSheetModal, Props>(
  ({movie}, ref) => {
    //Bottom Sheet snaps
    const sheetSnaps = React.useMemo(() => ['25%', '50%'], []);

    //On Bottom Sheet snap change
    const onSheetChange = React.useCallback((index: number) => {}, []);

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        handleIndicatorStyle={styles.sheetIndicator}
        backgroundStyle={styles.sheetBackground}
        snapPoints={sheetSnaps}
        onChange={onSheetChange}>
        <BottomSheetScrollView
          contentContainerStyle={styles.sheetScrollViewContainer}>
          <Text style={styles.textWhite}>Director: {movie.director}</Text>
          <Text style={styles.textWhite}>Producer: {movie.producer}</Text>
          <Text style={styles.textWhite}>Episode: {movie.episode_id}</Text>
          <Text style={styles.textWhite}>
            Release date: {movie.release_date}
          </Text>
          <Text style={styles.textWhite}>
            Opening: {'\n'}
            {movie.opening_crawl}
          </Text>
          <Text style={styles.textWhite}>
            {JSON.stringify(movie.characters, null, 2)}
          </Text>
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  },
);

export default MovieBottomSheet;

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff',
    paddingVertical: 5,
  },
  sheetIndicator: {
    backgroundColor: '#fff',
  },
  sheetBackground: {
    backgroundColor: '#18191A',
  },
  sheetScrollViewContainer: {
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
});
