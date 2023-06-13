import { View, Text,SafeAreaView } from 'react-native'
import React,{useState,useLayoutEffect} from 'react'

import Navigation from './src/Navigation/index'

import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import CheckInternet from './src/screens/CheckInternet/index';

const App = () => {

const net = useNetInfo();

 
  
  return (
    <>
  <Navigation/>
   
    {/* { !net.isConnected?(<CheckInternet/>):  ()} */}

</>

   
    

  )
}




export default App;

