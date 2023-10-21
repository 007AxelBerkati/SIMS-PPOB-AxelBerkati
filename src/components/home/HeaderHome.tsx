import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {ICLogo, ICProfilePhoto, ICProfilePhoto1} from '../../assets';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../themes';
import {checkImage} from '../../utils/checkImage';

type Props = {
  source?: any;
};

const HeaderHome = ({source}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={ICLogo} style={styles.Logo} />
        <Text style={styles.title}>SIMS PPOB</Text>
      </View>
      <Avatar.Image
        source={
          checkImage(source)
            ? {
                uri: source,
              }
            : ICProfilePhoto1
        }
        size={moderateScale(50)}
        style={{
          backgroundColor: COLORS.background.primary,
          borderWidth: 1,
          borderColor: COLORS.border.primary,
        }}
      />
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Logo: {
    width: moderateScale(30),
    height: moderateScale(30),
  },

  title: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginLeft: moderateScale(5),
    color: COLORS.text.primary,
  },
});
