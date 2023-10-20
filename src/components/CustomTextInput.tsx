/* eslint-disable react/jsx-props-no-spreading */
import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {COLORS, fontSize} from '../themes';
import {moderateScale} from 'react-native-size-matters';

interface Props {
  onChangeText: (text: string) => void;
  value: string;
  // label: string;
  placeholder?: string;
  cannotEdited?: boolean;
  secureTextEntry?: boolean;
  onBlur?: () => void | undefined;
  leftIcon?: string;
}

function CustomTextInput({
  onChangeText,
  value,
  // label,
  cannotEdited,
  onBlur = undefined,
  placeholder,
  secureTextEntry,
  leftIcon = 'at',
  ...props
}: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        // label={label}
        placeholderTextColor={COLORS.text.placeHolder}
        placeholder={placeholder}
        mode="outlined"
        onBlur={onBlur}
        activeOutlineColor={COLORS.lineTextInput}
        outlineColor={
          cannotEdited ? COLORS.disable.background : COLORS.outlineInput
        }
        style={styles.input}
        secureTextEntry={secureTextEntry ? passwordVisible : false}
        left={
          <TextInput.Icon icon={leftIcon} color={COLORS.text.placeHolder} />
        }
        right={
          secureTextEntry ? (
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye-outline'}
              onPress={() => setPasswordVisible(!passwordVisible)}
              color={passwordVisible ? COLORS.danger : COLORS.text.placeHolder}
            />
          ) : null
        }
        {...props}
      />
    </View>
  );
}

export default memo(CustomTextInput);

const styles = StyleSheet.create({
  input: {
    fontSize: fontSize.medium,
    color: COLORS.text.primary,
    height: moderateScale(50),
    justifyContent: 'center',
  },
});
