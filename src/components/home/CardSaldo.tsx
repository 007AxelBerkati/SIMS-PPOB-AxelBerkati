import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {IMGBackgroundSaldo} from '../../assets';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, fontSize} from '../../themes';
import {IconButton} from 'react-native-paper';

type Props = {
  balance: number;
};

const CardSaldo = ({balance}: Props) => {
  const [lihatSaldo, setLihatSaldo] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMGBackgroundSaldo}
        style={styles.imageBackground}>
        <View style={{marginLeft: moderateScale(30)}}>
          <Text style={styles.titleSaldo}>Saldo</Text>
          <Text style={styles.saldo}>Rp. {balance}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.lihatSaldo}>Lihat Saldo</Text>
            <IconButton
              icon={lihatSaldo ? 'eye-outline' : 'eye-off'}
              onPress={() => {
                setLihatSaldo(!lihatSaldo);
              }}
              size={moderateScale(20)}
              iconColor="white"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardSaldo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: moderateScale(170),
  },
  imageBackground: {
    width: '100%',
    height: moderateScale(170),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
    justifyContent: 'center',
  },

  titleSaldo: {
    fontSize: fontSize.xxlarge,
    fontWeight: 'bold',
    color: COLORS.text.secondary,
    marginBottom: moderateScale(10),
  },

  saldo: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: COLORS.text.secondary,
    marginBottom: moderateScale(10),
  },

  lihatSaldo: {
    fontSize: fontSize.medium,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
});
