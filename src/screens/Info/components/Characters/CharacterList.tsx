import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CharacterListItem from './CharacterListItem';
import {arrayOffset, fetchMultiple} from '../../../../utils/fetchUtils';
import {Card, Skeleton} from '@rneui/themed';

type Props = {
  characters: string[];
};

const CharacterList: React.FC<Props> = ({characters}) => {
  // console.log(characters);

  const [chars, setChars] = React.useState<People[]>([]);
  const [offset, setOffset] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);

  console.log('All characters: ' + characters.length);
  console.log('Chars: ' + chars.length);

  const fetchAllCharacters = async () => {
    setLoading(true);
    let data = await fetchMultiple<People>(characters, offset);
    setLoading(false);

    setOffset(bf => bf + 5);
    if (data === null) return;

    setChars(bf => [...bf, ...data!]);
  };

  React.useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <FlatList
      onEndReachedThreshold={0.01}
      scrollEventThrottle={250}
      ListFooterComponent={
        loading ? (
          <View>
            <Card>
              <Skeleton style={{flex: 1, width: '100%', height: 100}} />
              <Skeleton
                style={{flex: 1, width: '100%', height: 50, marginTop: 10}}
              />
            </Card>
            <Card>
              <Skeleton style={{flex: 1, width: '100%', height: 100}} />
              <Skeleton
                style={{flex: 1, width: '100%', height: 50, marginTop: 10}}
              />
            </Card>
            <Card>
              <Skeleton style={{flex: 1, width: '100%', height: 100}} />
              <Skeleton
                style={{flex: 1, width: '100%', height: 50, marginTop: 10}}
              />
            </Card>
          </View>
        ) : null
      }
      onEndReached={info => {
        if (loading) return;
        fetchAllCharacters();
        console.info('Reached to bottom of list. Fetch more...');
      }}
      data={chars}
      keyExtractor={item => item.name}
      renderItem={({item}) => <CharacterListItem character={item} />}
    />
    // <View style={{flex: 1, backgroundColor: 'black'}}>
    //   <Text>{JSON.stringify(chars, null, 2)}</Text>
    //   <Text>XD</Text>
    // </View>
  );
};

export default CharacterList;

const styles = StyleSheet.create({});
