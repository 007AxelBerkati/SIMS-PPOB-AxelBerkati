import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import CardSaldo2 from '../../components/CardSaldo2';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import Gap from '../../components/Gap';
import {COLORS, fontSize} from '../../themes';
import {CardTransaksi} from '../../components/transaksi';
import {transactionDataHistory} from '../../redux';
import {ScrollView} from 'react-native';

type Props = {};

const TransaksiScreen = (props: Props) => {
  const {dataBalance, dataHistory} = useAppSelector(state => state.transaction);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(4);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      transactionDataHistory({
        offset: offset,
        limit: limit,
      }),
    );
  }, [limit]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Gap height={moderateScale(20)} />
        <CardSaldo2 balance={dataBalance} />
        <Text style={styles.titleTransaksi}>Transaksi</Text>

        <FlatList
          data={dataHistory}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ListEmptyComponent={() => (
            <View style={{marginTop: moderateScale(20)}}>
              <Text style={{textAlign: 'center'}}>
                Maaf tidak ada histori transaksi saat ini
              </Text>
            </View>
          )}
          ListFooterComponent={() => {
            return (
              <>
                {dataHistory?.length > 0 ? (
                  <>
                    {dataHistory?.length < limit ? null : (
                      <TouchableOpacity
                        onPress={() => {
                          setLimit(limit + 4);
                        }}>
                        <Text style={styles.showMore}>Show More</Text>
                      </TouchableOpacity>
                    )}
                  </>
                ) : null}
              </>
            );
          }}
          keyExtractor={(item: any) => item.invoice_number}
          renderItem={({item}) => (
            <CardTransaksi
              serviceTitle={item.description}
              created_on={item.created_on}
              transaction_type={item.transaction_type}
              total_amount={item.total_amount}
            />
          )}
          ItemSeparatorComponent={() => <Gap height={moderateScale(20)} />}
          contentContainerStyle={{
            paddingTop: moderateScale(20),
            paddingBottom: moderateScale(20),
          }}
        />
      </ScrollView>
    </View>
  );
};

export default TransaksiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(25),
  },
  titleTransaksi: {
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: moderateScale(50),
  },

  showMore: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
    color: COLORS.button.primary.backgroundColor,
    textAlign: 'center',
    marginTop: moderateScale(20),
  },
});
