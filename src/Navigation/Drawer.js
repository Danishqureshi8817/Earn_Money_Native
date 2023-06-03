import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import HomeStack from './MainStack'
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from '../screens/Profile/index';
import CustomDrawer from '../components/customDrawer/DrawerCustom'
import EditProfile from '../screens/EditProfile/index'


const Drawer = createDrawerNavigator();
const DrawerStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{ headerShown: false , drawerStyle: {
      width:Dimensions.get('window').width / 1.65,
    }, }}>
    <Drawer.Screen name="HomeStack" component={HomeStack} />
    <Drawer.Screen name='Profile' component={Profile} options={{headerShown:true}} />
    <Drawer.Screen name='EditProfile' component={EditProfile} options={{headerShown:true}}/>
   


  </Drawer.Navigator>
  )
}

export default DrawerStack;