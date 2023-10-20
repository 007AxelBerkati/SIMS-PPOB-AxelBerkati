import {moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const mainColors = {
  white1: '#FFFFFF',
  black1: '#263238',
  grey1: '#6F6F6F',
  grey2: '#888888',
  orange1: '#FF5f00',
};

export const COLORS = {
  primary: mainColors.orange1,
  secondary: mainColors.white1,
  text: {
    primary: mainColors.black1,
    secondary: mainColors.white1,
    subTitle: mainColors.grey1,
    placeHolder: mainColors.grey2,
  },

  button: {
    primary: {
      backgroundColor: mainColors.orange1,
      text: mainColors.white1,
    },
    secondary: {
      backgroundColor: mainColors.white1,
      text: mainColors.orange1,
      borderColor: mainColors.orange1,
    },
  },
  background: {
    primary: mainColors.white1,
    secondary: mainColors.black1,
  },
};
