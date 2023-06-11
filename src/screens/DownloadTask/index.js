import { View, Text ,TouchableOpacity,Image,FlatList} from 'react-native'
import React,{ useLayoutEffect,useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {windowHeight,windowWidth} from '../../utiles/Dimensions'
import { taskdata } from './taskdata';
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'

const DownloadTask = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
    
              <Icon name="menu" size={responsiveWidth(7)} color="#fff" />
            </TouchableOpacity>
          ),
         
          headerTitle: "    Offer",
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
    <View style={{flex:1,backgroundColor:'#0a203e'}}>
    <View style={styles.mainContiner}>

 
        <FlatList
      data={taskdata}
      renderItem={({item,index})=>{
        return(
          
          <LinearGradient colors={["#0a203e","#1f4c86"]} 
       useAngle={true}
       angle={322}
       angleCenter={{x:0.5,y:0.5}}
      style={styles.linearGradient}>
    
      <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
      <Image style={styles.appImage} source={item.src}/>
                <View style={{marginLeft:responsiveWidth(5),flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Text style={styles.appName} >{item.app}</Text>
                    <Text style={{color:'#fff'}}>{item.info}</Text>
                    <TouchableOpacity>
                    <Text style={styles.trynow}>TRY NOW</Text>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity>
                <View style={styles.buttonMain}>
                    <Text style={{color:'#fff'}}>12.0</Text>
                    <View style={styles.arrowiconView}>
                    <IconMaterial  name="greater-than" size={responsiveWidth(4.5)} color="#fff" style={{marginLeft:responsiveWidth(0.45)}}  />
                    </View>
                </View>
                </TouchableOpacity>
                </View>
          
      </View>
      
      </LinearGradient>
           
      
        )
      }} />
         </View>
    </View>
  )
}

export default DownloadTask