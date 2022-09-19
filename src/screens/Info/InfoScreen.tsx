import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {InfoScreenProps} from '../../types/navigations';
import {Icon} from '@rneui/themed';

const InfoScreen: React.FC<InfoScreenProps> = ({navigation, route}) => {
  let {data, name} = route.params;

  React.useEffect(() => {
    //Change title and styles of back button
    navigation.setOptions({
      title: name,
      headerBackTitle: 'Back',
      headerBackTitleStyle: styles.headerBackTitleStyles,
      headerBackImage(props) {
        return (
          <Icon name="chevron-left" size={24} style={styles.backButtonIcon} />
        );
      },
    });
  }, []);

  return (
    <View>
      <Text>Info</Text>
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  headerRight: {
    paddingRight: 20,
    fontSize: 16,
    color: '#fff',
  },
  backButtonIcon: {
    paddingHorizontal: 10,
  },
  headerBackTitleStyles: {
    color: '#fff',
  },
});
