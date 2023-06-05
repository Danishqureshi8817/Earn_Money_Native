import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import Spiner from './spiner'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";



const SpinerWheel = () => {

  const navigation = useNavigation();



  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon name="menu" size={responsiveWidth(7)} color="#fff" />
        </TouchableOpacity>
      ),
     
      headerTitle: "",
      headerStyle: {
        backgroundColor: '#1f4c86'

      },
      headerRight: () =>
        (
           
          <View style={{ flexDirection: 'row' }}>
            <Icon  name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>
          </View>
        
      ),

    });
  }, []);

  return (
    <View style={{flex:1,backgroundColor:'#0a203e'}}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
          <Text style={{color:'#fff',fontSize:30}}>DAILY SPINNER</Text>
          <Text style={{color:'#fff',fontSize:12,letterSpacing:2}}>Spin Daily and get Exciting cash rewards</Text>
          <Text style={{color:'#fff',fontSize:16,marginTop:10}}>Win upto Rs.100 Daily</Text>
        </View>
      <Spiner/>
    </View>
  )
}

export default SpinerWheel;

const styles = StyleSheet.create({



})