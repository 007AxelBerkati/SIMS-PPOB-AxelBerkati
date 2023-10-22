import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Dialog} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import {COLORS, fontSize} from '../themes';
import {ICLogo} from '../assets';
import Gap from './Gap';
import FeatherIcon from 'react-native-vector-icons/Feather';

type Props = {
  isDialogVisible: boolean;
  setIsDialogVisible: (value: boolean) => void;
  handleSubmit: () => void;
  top_up_amount: number;
  type?: 'success' | 'failed' | '';
  navigation?: any;
  title: any;
  titleAction?: string;
};

const CustomDialog = ({
  isDialogVisible,
  setIsDialogVisible,
  handleSubmit,
  top_up_amount,
  type = '',
  title,
  navigation,
  titleAction,
}: Props) => {
  const renderImage = () => {
    switch (type) {
      case 'success':
        return (
          <View style={styles.success}>
            <FeatherIcon
              name="check"
              size={moderateScale(25)}
              color={COLORS.background.primary}
            />
          </View>
        );
      case 'failed':
        return (
          <View style={styles.failed}>
            <FeatherIcon
              name="x"
              size={moderateScale(25)}
              color={COLORS.background.primary}
            />
          </View>
        );

      default:
        return <Image source={ICLogo} style={styles.imageLogo} />;
    }
  };

  const renderActions = () => {
    switch (type) {
      case 'success':
        return (
          <Text
            onPress={() => {
              setIsDialogVisible(false);
              navigation.replace('MainApp');
            }}
            style={styles.ya}>
            Kembali ke Beranda
          </Text>
        );
      case 'failed':
        return (
          <Text
            onPress={() => {
              setIsDialogVisible(false);
              navigation.replace('MainApp');
            }}
            style={styles.ya}>
            Kembali ke Beranda
          </Text>
        );

      default:
        return (
          <>
            <Text onPress={handleSubmit} style={styles.ya}>
              Ya, Lanjutkan {titleAction}
            </Text>
            <Gap height={moderateScale(20)} />
            <Text
              onPress={() => {
                setIsDialogVisible(false);
              }}
              style={styles.tidak}>
              Batalkan
            </Text>
          </>
        );
    }
  };
  return (
    <Dialog
      visible={isDialogVisible}
      style={{
        backgroundColor: COLORS.background.primary,
        borderRadius: 5,
      }}
      onDismiss={() => setIsDialogVisible(false)}>
      <Dialog.Content>
        {renderImage()}
        <Gap height={moderateScale(20)} />
        <Text style={styles.textDialog}>{title}</Text>
        <Text style={styles.nominal}>
          Rp{top_up_amount.toLocaleString('id-ID')} ?
        </Text>
        {type?.length > 0 ? (
          type === 'success' ? (
            <Text style={styles.textDialog}>berhasil</Text>
          ) : (
            <Text style={styles.textDialog}>gagal</Text>
          )
        ) : null}
      </Dialog.Content>
      <Dialog.Actions
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        {renderActions()}
      </Dialog.Actions>
    </Dialog>
  );
};

export default CustomDialog;

const styles = StyleSheet.create({
  textDialog: {
    fontSize: fontSize.large,
    marginBottom: 4,
    color: COLORS.text.primary,
    textAlign: 'center',
  },
  nominal: {
    fontSize: fontSize.xxxxlarge,
    marginBottom: 4,
    color: COLORS.text.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageLogo: {
    width: moderateScale(50),
    height: moderateScale(50),
    alignSelf: 'center',
  },

  ya: {
    fontSize: fontSize.medium,
    color: COLORS.button.primary.backgroundColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  tidak: {
    fontSize: fontSize.medium,
    color: COLORS.text.subTitle,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  success: {
    alignSelf: 'center',
    backgroundColor: COLORS.success,
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },

  failed: {
    alignSelf: 'center',
    backgroundColor: COLORS.button.primary.backgroundColor,
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
