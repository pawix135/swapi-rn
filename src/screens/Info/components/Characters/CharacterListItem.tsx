import {StyleSheet} from 'react-native';
import React from 'react';
import {Card, Image} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  character: People;
};

const CharacterListItem: React.FC<Props> = ({character}) => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <Card>
        <Card.Image
          source={{uri: character.image}}
          containerStyle={{aspectRatio: 2, width: '100%'}}
          style={{flex: 1}}
          resizeMode="contain"
        />
        <Card.Title>{character.name}</Card.Title>
      </Card>
    </TouchableOpacity>
  );
};

export default CharacterListItem;

const styles = StyleSheet.create({});
