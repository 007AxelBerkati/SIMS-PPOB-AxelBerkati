import React, {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {ICProfilePhoto1} from '../../assets';
import {COLORS, fontSize} from '../../themes';
import {checkImage} from '../../utils/checkImage';

type Props = {
  label: string;
  onPress: () => void;
  source: any;
  isEdit: boolean;
};

function UploadPhoto({label, source, onPress, isEdit}: Props) {
  return (
    <View style={styles.photoSection}>
      <Pressable style={styles.photo} onPress={onPress}>
        <Image
          source={checkImage(source) ? {uri: source} : ICProfilePhoto1}
          style={styles.avatar}
        />
        {isEdit && (
          <IconButton
            icon="pencil"
            size={20}
            style={styles.removePhoto}
            iconColor={COLORS.background.secondary}
          />
        )}
      </Pressable>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  photo: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(120 / 2),
    borderWidth: 1,
    borderColor: COLORS.border.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.disable.background,
  },

  photoSection: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatar: {
    width: moderateScale(120),
    height: moderateScale(120),
    alignSelf: 'center',
    borderRadius: moderateScale(120 / 2),
  },

  removePhoto: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: COLORS.background.primary,
    borderWidth: 1,
    borderColor: COLORS.border.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: fontSize.xxlarge,
    color: COLORS.text.primary,
    fontWeight: 'bold',
    marginTop: moderateScale(16),
  },
});

export default memo(UploadPhoto);
