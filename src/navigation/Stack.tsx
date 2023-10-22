import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  LoginScreen,
  PembayaranScreen,
  RegisterScreen,
  SplashScreen,
} from '../pages';
import MainApp from './MainApp';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {COLORS, fontSize} from '../themes';
import {moderateScale} from 'react-native-size-matters';

const Stack = createNativeStackNavigator();

function Router() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MainApp" component={MainApp} options={{}} />
      <Stack.Screen
        name="PembayaranScreen"
        component={PembayaranScreen}
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: moderateScale(-16),
              }}>
              <IconButton icon={'arrow-left'} />
              <Text
                style={{fontSize: fontSize.large, color: COLORS.text.primary}}>
                kembali
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Pembayaran',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: fontSize.xlarge,
            fontWeight: 'bold',
            color: COLORS.text.primary,
          },

          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default Router;
