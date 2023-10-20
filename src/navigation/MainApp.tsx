import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AkunScreen, HomeScreen, TopUpScreen, TransaksiScreen} from '../pages';
import {COLORS} from '../themes';
import {moderateScale} from 'react-native-size-matters';

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
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
