import { View, Text ,TouchableOpacity,Image,FlatList} from 'react-native'
import React,{ useLayoutEffect,useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {windowHeight,windowWidth} from '../../utiles/Dimensions'
import { taskdata } from './taskdata';

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
                <Icon onPress={()=>{navigation.navigate('SpinerWheel')}} name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
                <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
                <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
                </TouchableOpacity>
              </View>
            
          ),
    
        });
      }, []);

  return (
    <View style={{flex:1,backgroundColor:'#0a203e'}}>
    <View style={{marginTop:30,marginHorizontal:20,}}>

 
        <FlatList
      data={taskdata}
      renderItem={({item,index})=>{
        return(
           

            
            <View style={{marginVertical:10}}>
               <View style={{flexDirection:'row',width:370,height:100,backgroundColor:'#1f4c86',borderRadius:10,alignItems:'center'}}>
                <Image style={{width:60,height:60,marginLeft:10}} source={item.src}/>
                <View style={{marginLeft:30,flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}} >{item.app}</Text>
                    <Text style={{color:'#fff'}}>{item.info}</Text>
                    <TouchableOpacity>
                    <Text style={{color:'#fff',fontSize:14,fontWeight:500}}>TRY NOW</Text>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity>
                <View style={{marginLeft:30,width:65,height:30,backgroundColor:'#0a203e',borderRadius:15,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>12.0</Text>
                    <View style={{width:20,height:20,borderRadius:10,backgroundColor:'#1f4c86',justifyContent:'center',marginLeft:6}}>
                    <IconMaterial  name="greater-than" size={responsiveWidth(4.5)} color="#fff" style={{marginLeft:2}}  />
                    </View>
                </View>
                </TouchableOpacity>
                </View>
               
               </View>
            </View>
      
        )
      }} />
         </View>
    </View>
  )
}

export default DownloadTask