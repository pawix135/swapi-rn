import {ImageSourcePropType} from 'react-native';
import poster1 from '../../assets/posters/1.png';
import poster2 from '../../assets/posters/2.jpg';
import poster3 from '../../assets/posters/3.png';
import poster4 from '../../assets/posters/4.png';
import poster5 from '../../assets/posters/5.png';
import poster6 from '../../assets/posters/6.png';

interface CoverPhotosType {
  [key: string]: ImageSourcePropType;
}

export const episodIdToPoster: CoverPhotosType = {
  '1': poster1,
  '2': poster2,
  '3': poster3,
  '4': poster4,
  '5': poster5,
  '6': poster6,
};
