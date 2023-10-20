import {moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  width,
  height,
};

export const fontSize = {
  small: moderateScale(12),
  medium: moderateScale(14),
  large: moderateScale(16),
  xlarge: moderateScale(18),
  xxlarge: moderateScale(20),
  xxxlarge: moderateScale(22),
  xxxxlarge: moderateScale(24),
};

const mainColors = {
  white1: '#FFFFFF',
  black1: '#263238',
  orange1: '#FF5f00',
  danger: '#f72585',
  success: '#31Ad66',
  warning: '#FFCE31',

  grey1: '#7D8797',
  grey2: '#B1B7C2',
  grey3: '#E5E5E5',
  grey4: '#EDEEF0',
  grey5: '#B1B7C2',
  grey6: '#B0B0B0',
  grey7: '#F0F0F0',
  grey8: '#D0D0D0',
};

export const COLORS = {
  primary: mainColors.orange1,
  secondary: mainColors.white1,
  danger: mainColors.danger,
  success: mainColors.success,
  warning: mainColors.warning,
  grey1: mainColors.grey1,
  grey2: mainColors.grey2,
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
      borderColor: mainColors.orange1,
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

  disable: {
    background: mainColors.grey4,
    text: mainColors.grey5,
  },

  lineTextInput: mainColors.orange1,
  border: {
    primary: mainColors.grey3,
    secondary: mainColors.grey6,
  },
  outlineInput: mainColors.grey2,
};
