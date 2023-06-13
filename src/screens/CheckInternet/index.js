import { View, Text, Image } from 'react-native'
import React, { useEffect,useLayoutEffect } from 'react'
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const CheckInternet = ({ checkInternet, setCheckInternet }) => {

  const net = useNetInfo();
  // console.log(net.isConnected)

 


  return (
  
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#0a203e' }}>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: responsiveWidth(45), height: responsiveHeight(20) }} source={require('../../assets/no-wifi.png')} />
            <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.5) }}>No Internet Connection</Text>
          </View>
        </View>
  )
}

export default CheckInternet;