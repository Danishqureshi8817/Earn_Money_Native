import { View, Text, FlatList, TouchableOpacity,onPress } from 'react-native'
import React,{useState } from 'react'
import {windowHeight,windowWidth} from '../../utiles/Dimensions'



const Questions = ({data,selectedOption}) => {
  return (
    <View style={{width:windowWidth}} >
      <Text style={{fontSize:20,fontWeight:600,color:'#fff',marginLeft:20,marginRight:20 }} >
      { 'Ques:' + data.question}
      </Text>
    
    <View style={{marginTop:20}} >
    <FlatList
      data={data.Options}
      renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={{width:'90%',height:50,elevation:3,backgroundColor: data.marked==index+1 ? '#1f4c86' :'#fff',borderRadius:10,
          marginTop:10,marginBottom:10,alignSelf:'center',alignItems:'center',paddingLeft:15,flexDirection:'row'}} 
          onPress={()=>{
            // console.warn(index)
            selectedOption(index + 1);
          }}>
             
        <View style={{width:30,height:30,borderRadius:15,backgroundColor:data.marked==index+1 ? '#fff':'#1f4c86' ,justifyContent:'center',alignItems:'center'}}>
        
        <Text style={{fontWeight: '600', color:data.marked==index+1 ? '#000':'#fff' }}>
        {index == 0 ? 'A' : index == 1 ? 'B' : index == 2 ? 'C' : 'D'}
        </Text>
        
        </View>

        <Text style={{fontSize: 18, fontWeight: '600', marginLeft: 20,color:data.marked == index + 1 ?'#fff':'#000'}}>
                  {item}
                </Text>

          </TouchableOpacity>
        )
      }}
     /> 
    </View>   

    </View>
  )
}

export default Questions