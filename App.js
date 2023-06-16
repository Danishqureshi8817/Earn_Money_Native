import { View, Text,SafeAreaView,Alert } from 'react-native'
import React,{useState,useLayoutEffect,useEffect} from 'react'

import Navigation from './src/Navigation/index'

import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import CheckInternet from './src/screens/CheckInternet/index';



import {requestUserPermission,notificationListener} from './src/utiles/notificationService'

const App = () => {

const net = useNetInfo();




useEffect(() => {
  
  requestUserPermission()
  notificationListener()
  
}, [])


 
  
  return (
    <>
  <Navigation/>
   
    {/* { !net.isConnected?(<CheckInternet/>):  ()} */}

</>

   
    

  )
}




export default App;

