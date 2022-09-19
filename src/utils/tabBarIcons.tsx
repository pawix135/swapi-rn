import React from 'react';
import {Icon} from '@rneui/themed';
import MI from 'react-native-vector-icons/dist/glyphmaps/MaterialIcons.json';

type TabIcon = {
  name: keyof typeof MI;
  color: string;
  focused: boolean;
  size: number;
};

type TabIconReturn = React.ReactNode | undefined;

export const handleIcon = (icon: TabIcon): TabIconReturn => {
  return (
    <Icon
      name={icon.name}
      type="AntDesign"
      size={icon.size}
      color={icon.color}
    />
  );
};
