import { View, Text,SafeAreaView,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';


const Login = () => {
  return (

    <LinearGradient colors={['#203f81', '#4f62d8']} style={{flex:1}}>
      <View style={styles.mainContainer}>
        {/* <Text style={styles.textWlcm}>Welcome Back</Text>
        <Text style={styles.textLogin}>Login to your account</Text>
        <View style={styles.inputMain}>
            <Icon name="user-alt" size={responsiveWidth(4.5)} color="#3566ac" />
        <TextInput 
        style={styles.inputText}
        placeholder="Email"
      
      />
        </View>
        <View style={styles.inputMain}>
            <Icon name="lock" size={responsiveWidth(4.5)} color="#3566ac" />
        <TextInput 
        style={styles.inputText}
        placeholder="Password"
      
      />
        </View> */}
        <Text style={styles.textWlcm}>Plantly</Text>
        <Text style={styles.textLogin}>can't seem to keep a plant alive?{"\n"}     Let us help you change that</Text>


        <LinearGradient colors={['#2a3a5a','#304577' ,'#374e91']} style={styles.inputMain}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
          <View style={{flexDirection:'row'}}>
          <Icon style={{ marginRight:responsiveWidth(2)}} name="google-plus-g" size={responsiveWidth(4.5)} color="#4f62d8" />
            <Text  style={styles.buttonText}>LOGIN</Text>
          </View>
          
        </LinearGradient>


        {/* <LinearGradient colors={['#2a3a5a','#304577' ,'#374e91']} style={styles.inputMain}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
          <View style={{backgroundColor:'#4f62d8',height:responsiveHeight(4.3),width:responsiveWidth(67),borderRadius:responsiveWidth(5),justifyContent:'center',alignItems:'center'}}>
          <Text  style={styles.buttonText} >SIGN UP</Text>
           </View>
        </LinearGradient> */}

    </View>
  </LinearGradient>
  

  )
}

export default Login ;


