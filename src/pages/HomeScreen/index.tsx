import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Gap from '../../components/Gap';
import {CardSaldo, CardServices, HeaderHome} from '../../components/home';
import {
  getBanner,
  getDataBalance,
  getDataProfile,
  getDataServices,
} from '../../redux';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {COLORS, fontSize} from '../../themes';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {dataProfile, loading} = useAppSelector(state => state.auth);
  const {dataBanner, dataServices} = useAppSelector(state => state.information);
  const {dataBalance} = useAppSelector(state => state.transaction);

  useEffect(() => {
    dispatch(getDataProfile());
    dispatch(getBanner());
    dispatch(getDataBalance());
    dispatch(getDataServices());
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <HeaderHome source={dataProfile?.profile_image} />
        <Text style={styles.welcome}>Selamat datang, </Text>
        <Text style={styles.name}>
          {loading
            ? ''
            : dataProfile?.first_name + ' ' + dataProfile?.last_name}
        </Text>
        <Gap height={moderateScale(30)} />
        <CardSaldo balance={dataBalance} />
        <View>
          <FlatList
            data={dataServices}
            scrollEnabled={false}
            keyExtractor={(item: any) => item.service_code}
            renderItem={({item}) => (
              <CardServices
                source={item.service_icon}
                title={item.service_code}
                onPress={() => {
                  navigation.navigate('PembayaranScreen', {data: item});
                }}
              />
            )}
            ItemSeparatorComponent={() => <Gap height={moderateScale(30)} />}
            numColumns={6}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: moderateScale(20),
            }}
          />
        </View>

        <Text style={styles.iklan}>Temukan promo menarik</Text>
        <View style={{marginBottom: moderateScale(20)}}>
          <FlatList
            data={dataBanner}
            horizontal
            keyExtractor={(item: any) => item.banner_name}
            renderItem={({item}) => (
              <Image
                source={{uri: item.banner_image}}
                style={{
                  width: moderateScale(220),
                  height: moderateScale(120),
                  borderRadius: moderateScale(10),
                  overflow: 'hidden',
                }}
                resizeMode="stretch"
              />
            )}
            ItemSeparatorComponent={() => <Gap width={moderateScale(10)} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: moderateScale(20),
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(25),
  },
  welcome: {
    fontSize: fontSize.xxlarge,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginTop: moderateScale(20),
  },

  name: {
    fontSize: fontSize.xxxxlarge,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  iklan: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginTop: moderateScale(20),
  },
});
