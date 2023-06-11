import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";


export default styles = StyleSheet.create({

  mainContiner:{
    marginTop:responsiveWidth(5),
    marginHorizontal:responsiveWidth(5)
  },
  linearGradient:{
    flex:0.2,
    borderRadius:responsiveWidth(2.45),
    height:responsiveHeight(11.85),
    elevation:responsiveWidth(1.5),
    marginVertical:responsiveWidth(2.45),
    borderWidth:responsiveWidth(0.2),
    borderColor:'#1f4c86',
    justifyContent:'center',
    width:responsiveWidth(90)
  },
  appImage:{
    width:responsiveWidth(14.6),
    height:responsiveHeight(7.1),
    marginLeft:responsiveWidth(2.45)
  },
 appName:{
    color:'#fff',
    fontSize:responsiveFontSize(2.4),
    fontWeight:'bold'
 },
 trynow:{
    color:'#fff',
    fontSize:responsiveFontSize(1.65),
    fontWeight:500
 },
 buttonMain:{
    marginLeft:responsiveWidth(6),
    width:responsiveWidth(15.6),
    height:responsiveHeight(3.5),
    backgroundColor:'#0a203e',
    borderRadius:responsiveWidth(3.45),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
 },
 arrowiconView:{
    width:responsiveWidth(4.75),
    height:responsiveHeight(2.35),
    borderRadius:responsiveWidth(2.45),
    backgroundColor:'#1f4c86',
    justifyContent:'center',
    marginLeft:responsiveWidth(1.55)
 },


})