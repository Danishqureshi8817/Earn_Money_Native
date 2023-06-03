import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/index';

import Referral from '../screens/Referral/index';
import Home from '../screens/Home/index';
import Spiner from '../screens/SpinerWheel/index'

const HomeStack = createNativeStackNavigator();
const MainStack = () => {

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
     
      {/* <HomeStack.Screen name="Login" component={Login}/> */}
      <HomeStack.Screen name="Home" component={Home} options={{headerShown:true}}/>
      
      <HomeStack.Screen name='Referral' component={Referral} />
      <HomeStack.Screen name='SpinerWheel' component={Spiner} />
      
    </HomeStack.Navigator>
  )
}

export default MainStack