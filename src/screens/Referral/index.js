import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React,{ useLayoutEffect,useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {windowHeight,windowWidth} from '../../utiles/Dimensions'
import Clipboard from '@react-native-clipboard/clipboard';
import DashedLine from 'react-native-dashed-line';



const Referral = () => {
    const [referralCode, setReferralCode] = useState('897459');

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon name="menu" size={responsiveWidth(7)} color="#fff" />
        </TouchableOpacity>
      ),
     
      headerTitle: "    Refer & Earn",
      headerTintColor:'#fff',
      headerStyle: {
        backgroundColor: '#1f4c86'
        

      },
      headerRight: () =>
        (
           
          <View style={{ flexDirection: 'row' }}>
            <Icon onPress={()=>{navigation.navigate('SpinerWheel')}} name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>
          </View>
        
      ),

    });
  }, []);


  return (
    <View style={{flex:1,backgroundColor: '#ffffff'}}  >
      <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#eaeaea',alignItems:'center',justifyContent:'center',marginTop:40,marginHorizontal:20}}>
         <Text style={{fontSize:20,fontWeight:400,color:'#000'}} >1</Text>
      </View>
     <View >
    
     </View>
     
    </View>
  )
}

export default Referral