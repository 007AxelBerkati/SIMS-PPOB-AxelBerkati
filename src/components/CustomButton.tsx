import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ViewStyle, moderateScale} from 'react-native-size-matters';
import {COLORS, fontSize} from '../themes';

interface Props {
  type?: 'primary' | 'secondary';
  title?: string;
  onPress?: () => void;
  icon?: string;
  disable?: boolean;
  nonButton?: boolean;
  label?: string;
  style?: any;
  styleText?: any;
}

function ButtonComponent({
  type = 'primary',
  title,
  onPress,
  icon,
  disable,
  style,
  styleText,
}: Props) {
  if (disable) {
    return (
      <View style={{...styles.disableBG, ...style}}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={[container(type), style]} onPress={onPress}>
      <Text style={[text(type), styleText]}>{title}</Text>
      {icon && (
        <Icon
          name={icon}
          size={24}
          color={COLORS.background.primary}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
}

export default memo(ButtonComponent);

const container = (type: string): ViewStyle => ({
  backgroundColor:
    type === 'secondary'
      ? COLORS.button.secondary.backgroundColor
      : COLORS.button.primary.backgroundColor,
  paddingVertical: 10,
  borderRadius: moderateScale(8),
  borderWidth: 1,
  height: moderateScale(50),
  borderColor:
    type === 'secondary'
      ? COLORS.button.secondary.borderColor
      : COLORS.button.primary.borderColor,
});

const text = (type: string): TextStyle => ({
  fontSize: fontSize.large,
  fontWeight: 'bold',
  textAlign: 'center',
  paddingVertical: moderateScale(2),
  color:
    type === 'secondary'
      ? COLORS.button.secondary.text
      : COLORS.button.primary.text,
});

const styles = StyleSheet.create({
  disableBG: {
    paddingVertical: 10,
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.outlineInput,
  },
  disableText: {
    fontSize: fontSize.large,
    color: COLORS.text.secondary,
    paddingVertical: moderateScale(2),
    textAlign: 'center',
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
