import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AkunScreen, HomeScreen, TopUpScreen, TransaksiScreen} from '../pages';
import {COLORS, fontSize} from '../themes';
import {moderateScale} from 'react-native-size-matters';
import {Text, View, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainApp = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.background.secondary,

        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: moderateScale(10),
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TopUpScreen"
        component={TopUpScreen}
        options={{
          tabBarLabel: 'Top Up',
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons
              name={focused ? 'money' : 'money'}
              color={color}
              size={24}
            />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon={'arrow-left'} />
              <Text
                style={{fontSize: fontSize.large, color: COLORS.text.primary}}>
                kembali
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Top Up',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: fontSize.xlarge,
            fontWeight: 'bold',
            color: COLORS.text.primary,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="TransaksiScreen"
        component={TransaksiScreen}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, focused}) => (
            <FontAwesome
              name={focused ? 'inbox' : 'inbox'}
              color={color}
              size={24}
            />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon={'arrow-left'} />
              <Text
                style={{fontSize: fontSize.large, color: COLORS.text.primary}}>
                kembali
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Transaksi',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: fontSize.xlarge,
            fontWeight: 'bold',
            color: COLORS.text.primary,
          },
          headerTitleAlign: 'center',
        }}
      />

      <Tab.Screen
        name="AkunScreen"
        component={AkunScreen}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon={'arrow-left'} />
              <Text
                style={{fontSize: fontSize.large, color: COLORS.text.primary}}>
                kembali
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Akun',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: fontSize.xlarge,
            fontWeight: 'bold',
            color: COLORS.text.primary,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
