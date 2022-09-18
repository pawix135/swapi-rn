import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Skeleton} from '@rneui/themed';

const MovieListSkeletonItem = () => {
  return (
    <Card>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Skeleton style={{width: 200, height: 300, alignSelf: 'center'}} />
        <Card.Divider />
        <Skeleton width={300} height={30} style={{marginBottom: 10}} />
        <Skeleton width={150} height={15} />
      </View>
    </Card>
  );
};

export default MovieListSkeletonItem;

const styles = StyleSheet.create({});
