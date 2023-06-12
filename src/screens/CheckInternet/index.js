import { View, Text, Image } from 'react-native'
import React,{useEffect} from 'react'
import NetInfo from "@react-native-community/netinfo";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const CheckInternet = ({checkInternet,setCheckInternet}) => {

  useEffect(() => {
  
    // Subscribe
const unsubscribe = NetInfo.addEventListener(state => {
  console.log("Connection type", state.type);
  console.log("Is connected?", state.isConnected);
  setCheckInternet( state.isConnected)
});

// Unsubscribe
return ()=>{
  unsubscribe();
}


  }, [])
  

  return (
    <View style={{flex:1}}>
        {checkInternet===true?(
     null
        ):(
          <View style={{flex:1,justifyContent:'center'}}>
            <View style={{alignItems:'center'}}>
            <Image style={{width:responsiveWidth(45),height:responsiveHeight(20)}} source={require('../../assets/no-wifi.png')} />
            <Text style={{color:'#fff',fontSize:responsiveFontSize(2.5)}}>No Internet Connection</Text>
            </View>
           

        </View>
        )}
    </View>
  )
}

export default CheckInternet;