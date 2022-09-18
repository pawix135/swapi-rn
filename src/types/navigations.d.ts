import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type StackNavPropsList = {
  Home: undefined;
  Movie: {movie: Film};
};

type TabNavPropsList = {
  Movies: undefined;
};

type MovieScreenProps = StackScreenProps<StackNavPropsList, 'Movie'>;

type MoviecreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavPropsList, 'Movies'>,
  StackNavigationProp<StackNavPropsList>
>;
