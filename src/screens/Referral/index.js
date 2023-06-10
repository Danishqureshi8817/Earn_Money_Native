import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React,{ useLayoutEffect,useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {windowHeight,windowWidth} from '../../utiles/Dimensions'
import Clipboard from '@react-native-clipboard/clipboard';
import Dash from 'react-native-dash';
import Share from 'react-native-share';

const Referral = () => {
    const [referralCode, setReferralCode] = useState('897459');

  const navigation = useNavigation();

 const share=()=>{
   const options={
    message:'hello dansih reat share furtuere',
    url:'https://github.com/Danishqureshi8817',
   
   }


  Share.open(options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
 }


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
            <Icon onPress={()=>{navigation.navigate('Wallet')}} name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>
          </View>
        
      ),

    });
  }, []);


  return (
    <View style={{flex:1,backgroundColor: '#0a203e'}}  >
    <View style={{flex:0.6}} >
        <View style={{marginLeft:30,marginTop:10}}>
          <Text style={{color:'#fff',fontSize:20,fontWeight:600,marginBottom:5}}>Refer a friend</Text>
          <Text style={{color:'#fff',fontSize:16}}> And earn 100 coins per refer</Text>
        </View>
         
     <View style={{flexDirection:'row',marginTop:-20}}>
     <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#1f4c86',alignItems:'center',justifyContent:'center',marginTop:40,marginHorizontal:20}}>
         <Text style={{fontSize:20,fontWeight:400,color:'#fff'}} >1</Text>
      </View>
      <View style={{marginTop:50}} >
      <Text style={{fontSize:16,fontWeight:400,color:'#fff'}} >Invite your friends & Share your refer code. </Text>
      </View>
     </View>
     <View >
     <Dash style={{marginLeft:45,width:1, height:30, flexDirection:'column'}} dashColor='#eaeaea'/>
     </View>
     <View style={{flexDirection:'row'}}>
     <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#1f4c86',alignItems:'center',justifyContent:'center',marginHorizontal:20}}>
         <Text style={{fontSize:20,fontWeight:400,color:'#fff'}} >2</Text>
      </View>
      <View style={{}} >
      <Text style={{fontSize:16,fontWeight:400,color:'#fff'}} >They create account. </Text> 
      {/* <Text style={{color:'#1f4c86'}} >50 Offers</Text> */}
        <View style={{flexDirection:'row'}} >
        <View style={{width:180,height:35,backgroundColor:'#ecf3f3',borderRadius:15,justifyContent:'center',marginTop:10,marginRight:10}} ><Text style={{color:'#1f4c86',alignSelf:'center',fontWeight:500}}  >Sign up with your code</Text></View>
        {/* <View style={{width:110,height:35,backgroundColor:'#ecf3f3',borderRadius:15,justifyContent:'center',marginTop:10}} ><Text style={{color:'#1f4c86',alignSelf:'center',fontWeight:500}}  >You gets 15.0</Text></View> */}
        </View>
      </View>
     </View>
     <View >
     <Dash style={{marginLeft:45,width:1, height:50, flexDirection:'column',marginTop:-20}} dashColor='#eaeaea'/>
     </View>
     <View style={{flexDirection:'row'}}>
     <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#1f4c86',alignItems:'center',justifyContent:'center',marginHorizontal:20}}>
         <Text style={{fontSize:20,fontWeight:400,color:'#fff'}} >3</Text>
      </View>
      <View style={{marginTop:15}} >
      <Text style={{fontSize:16,fontWeight:400,color:'#fff'}} >You earn rewards.</Text>
      <View style={{flexDirection:'row'}} >
        <View style={{width:180,height:35,backgroundColor:'#ecf3f3',borderRadius:15,justifyContent:'center',marginTop:10}} >
        <Text style={{color:'#1f4c86',alignSelf:'center',fontWeight:500}}  >Then you get 100 coins</Text>
        </View>
        
        </View>
      </View>
      
     </View>
     <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:40}} >
     <View style={{borderBottomWidth:1,borderColor:'#fff'}} >
     <Text style={{fontSize:16,color:'#fff'}} >View Referral History</Text>
     </View>

     <IconMaterial  name="greater-than" size={responsiveWidth(4)} color="#fff" style={{marginLeft:4,marginTop:5}} />
     </View>
     <View style={{borderBottomWidth:2,borderBottomColor:'#f4f4f4',marginHorizontal:25,marginTop:40}} ></View>
     </View>
    
    <View style={{flex:0.4}}  >
        <Text style={{fontSize:18,fontWeight:600,color:'#fff',alignSelf:'center',marginTop:10}} >Share your referral code</Text>
      <View style={{borderWidth:1,backgroundColor:'#1f4c86',borderColor:'#fff',width:300,height:50,alignSelf:'center',alignItems:'center', borderStyle:  'dashed',justifyContent:'center',marginTop:25,borderRadius:10}} >
         
         <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:16,color:'#fff'}}>
          Copy Code :  
        </Text>  
        <Text style={{fontSize:16,color:'#fff',marginLeft:4,fontWeight:600}}>
        {referralCode}
        </Text>

        <TouchableOpacity onPress={()=>{Clipboard.setString(referralCode)}} >
        <IconMaterial  name="content-copy" size={responsiveWidth(5)} color="#fff" style={{marginLeft:8,marginTop:4}} />
        </TouchableOpacity>
         </View>

      </View>

      <View style={{flexDirection:'row',justifyContent:'center'}} >
      {/* <TouchableOpacity onPress={()=>{share()}} >
        <View style={{flexDirection:'row',backgroundColor:'#27d246',width:190,height:50,marginTop:20,alignItems:'center',justifyContent:'center',borderRadius:5,marginRight:20,elevation:3}}>
        <Icon  name="logo-whatsapp" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
            <Text style={{color:'#fff',fontSize:16}} >Via Whatsapp</Text>
            
        </View>
        </TouchableOpacity> */}
        <View style={{width:200,height:50,marginTop:20,borderRadius:5,borderColor:'#d6d6d6',borderWidth:1,backgroundColor:'#1f4c86',elevation:responsiveWidth(3),justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{share()}} style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
        <Icon  name="share-outline" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
        <Text style={{color:'#fff',fontSize:16}}  >Refer friends now</Text>
        </TouchableOpacity>
        </View>
      </View>

    </View>

     
    </View>
  )
}

export default Referral