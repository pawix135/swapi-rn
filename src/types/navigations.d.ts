import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

type StackNavPropsList = {
  Home: undefined;
  Movie: {movie: Film};
  Info: {data: string[]; name: string};
};

type TabNavPropsList = {
  Movies: undefined;
  Settings: undefined;
};

type MovieScreenProps = StackScreenProps<StackNavPropsList, 'Movie'>;
type InfoScreenProps = StackScreenProps<StackNavPropsList, 'Info'>;

type MovieScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavPropsList, 'Movies'>,
  StackNavigationProp<StackNavPropsList>
>;
