import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  character: People;
};

const CharacterListItem: React.FC<Props> = ({character}) => {
  return (
    <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}}>
      <Text>{character.name}</Text>
    </View>
  );
};

export default CharacterListItem;

const styles = StyleSheet.create({});
