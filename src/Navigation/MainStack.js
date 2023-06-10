import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/index';

import Referral from '../screens/Referral/index';
import Home from '../screens/Home/index';
import Spiner from '../screens/SpinerWheel/index'
import Quiz from '../screens/Quiz/index';
import DownloadTask from '../screens/DownloadTask/index'
import Wallet from '../screens/Wallet/index';
const HomeStack = createNativeStackNavigator();
const MainStack = () => {

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
     
      {/* <HomeStack.Screen name="Login" component={Login}/> */}
      <HomeStack.Screen name="Home" component={Home} options={{headerShown:true}}/>
      
      <HomeStack.Screen name='Referral' component={Referral} options={{headerShown:true}} />
      <HomeStack.Screen name='SpinerWheel' component={Spiner} options={{headerShown:true}} />
      <HomeStack.Screen name='Quiz' component={Quiz} options={{headerShown:true}} />
      <HomeStack.Screen name='DownloadTask' component={DownloadTask} options={{headerShown:true}} />
      <HomeStack.Screen name='Wallet' component={Wallet} options={{headerShown:true}} />
    </HomeStack.Navigator>
  )
}

export default MainStack