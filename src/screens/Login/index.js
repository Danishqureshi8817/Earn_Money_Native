import { View, Text,SafeAreaView,StyleSheet,TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';
import CallApi, {setToken} from '../../utiles/network';



const Login = () => {


  function handleLogin() {
    if (inputData.Email === '') {
      setModal({isVisible: true, text: "Email can't be empty"});
      return;
    }
    if (inputData.Password === '') {
      setModal({isVisible: true, text: "Password can't be empty"});
      return;
    }

    const body = {
      uid: inputData.Email,
      password: inputData.Password,
    };

    CallApi('users/login', 'POST', body).then(async r => {
      if (r.message) {
        setModal({isVisible: true, text: r.message});
        setStatus('Input');
        return;
      } else {
        setStatus('Loaded');
        // Alert.alert(r.token);
        setToken(r.token);
        navigation.navigate('Home');
        // const token = await getToken();
        // console.log('token in login.js :', token);
        // getToken().then(res => console.log(res));
      }
    });
    setStatus('Loading');
  }


  return (

    <LinearGradient colors={['#1f4c86', '#0a203e']} 
        useAngle={true}
                  angle={190}
                  angleCenter={{ x: 0.5, y: 0.5 }}
      
    style={{flex:1}}>
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
        <Image style={{width:responsiveWidth(47),height:responsiveHeight(32),marginTop:responsiveWidth(20)}} source={require('../../assets/l1.png')} />
        <Text style={styles.textWlcm}>Welcome</Text>
        <Text style={styles.textLogin}>Create your Account & {"\n"}        Start Earning</Text>

        <LinearGradient colors={['#1f4c86', '#0a203e']} style={styles.inputMain}
           start={{x: 0, y: 0}} end={{x: 1, y: 0}}>

           <TouchableOpacity onPress={()=>{console.warn('login')}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon style={{position:'absolute',left:responsiveWidth(-26)}} name="google-plus-g" size={responsiveWidth(5.5)} color="#fff" />
            <Text  style={styles.buttonText}>LOGIN</Text>
            
          </View>
          </TouchableOpacity>
        </LinearGradient>

<View style={{marginTop:responsiveWidth(3.5)}}>
<Text style={{color:'#fff',fontSize:responsiveFontSize(1.7),fontFamily:'Poppins-Light',alignSelf:'center'}}>Whatsapp us for more information</Text>
<Text style={{color:'#fff',fontSize:responsiveFontSize(1.5),fontFamily:'Poppins-Light',alignSelf:'center',textDecorationLine:'underline',fontWeight:'bold'}}>+91 7418529637</Text>
<Text style={{color:'#fff',fontSize:responsiveFontSize(1.7),fontFamily:'Poppins-Light',alignSelf:'center'}}>Or</Text>
<Text style={{color:'#fff',fontSize:responsiveFontSize(1.7),fontFamily:'Poppins-Light',alignSelf:'center'}}>Visit our website <Text  style={{color:'#fff',fontSize:responsiveFontSize(1.7),fontFamily:'Poppins-Light',letterSpacing:responsiveWidth(0.15),textDecorationLine:'underline',fontWeight:'bold'}}> www.earnmoney.in</Text> </Text>
</View>


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


