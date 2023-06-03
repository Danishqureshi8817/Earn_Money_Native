import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spiner from './spiner'



const SpinerWheel = () => {
  return (
    <View style={{flex:1,backgroundColor:'#0a203e'}}>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
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