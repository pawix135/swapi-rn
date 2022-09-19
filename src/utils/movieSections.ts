import characters from '../../assets/sections/characters.png';
import species from '../../assets/sections/species.png';
import vehicles from '../../assets/sections/vehicles.png';
import starships from '../../assets/sections/starships.png';
import planets from '../../assets/sections/planets.png';
import {ImageSourcePropType} from 'react-native';

type SectionImages = {
  [key: string]: ImageSourcePropType;
};

export const sectionsImages: SectionImages = {
  Vehicles: vehicles,
  Characters: characters,
  Species: species,
  Starships: starships,
  Planets: planets,
};
