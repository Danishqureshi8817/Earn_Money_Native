import { View, Text, Image, TouchableOpacity, Modal, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import { useLayoutEffect, useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const Wallet = () => {
  const [coin, setCoin] = useState(5660)
  const [selectedCard, setSelectedCard] = useState()
  const [selected, setSelected] = useState(false)
  const [paytmNo, setPaytmNo] = useState('')
  const [paypalId, setPaypalId] = useState('')
  const [modalPaypal, setModalPaypal] = useState(false);
  const [modalPaytm, setModalPaytm] = useState(false);
  const [modalConfirm, setModalConfim] = useState(false);
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
          <Icon onPress={() => { navigation.navigate('Wallet') }} name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5) }} />
          <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
            <Icon name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
          </TouchableOpacity>
        </View>

      ),

    });
  }, []);


  const submitPaytm = () => {

    // console.warn(paytmNo, selectedCard)
    setModalPaytm(false)
    setModalConfim(true)
    

  }

  const submitPaypal = () => {

    console.warn(paypalId, selectedCard)
     setModalPaypal(false)
     setModalConfim(true)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#0a203e" }} >



      <LinearGradient colors={["#0a203e", "#1f4c86"]}
        useAngle={true}
        angle={322}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={{ flex: 0.2, borderRadius: 10, height: 50, elevation: 5, margin: 20, borderWidth: 1, borderColor: '#1f4c86', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <View style={{}}>
            <Text style={{ color: "#fff", fontSize: 29, fontWeight: 500 }} >{coin}</Text>
            <Text style={{ color: '#fff', letterSpacing: 2, fontSize: 16 }} >Coins</Text>
          </View>
          <Image style={{ width: 90, height: 70 }} source={require("../../assets/coin.png")} />
        </View>
      </LinearGradient>

      <View style={{ flex: 0.8, marginHorizontal: 20 }}>
        <Text style={{ color: '#fff', fontSize: 18 }} >Redeem Reward Via</Text>

        <LinearGradient colors={["#0a203e", "#1f4c86"]}
          useAngle={true}
          angle={322}
          angleCenter={{ x: 0.5, y: 0.5 }}
          style={{ flex: 0.2, borderRadius: 10, height: 50, elevation: 5, marginVertical: 20, borderWidth: 1, borderColor: '#1f4c86', justifyContent: 'center' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Image style={{ width: 65, height: 65 }} source={require("../../assets/Paytm.png")} />

            <View>
              <Text style={{ color: '#fff', fontSize: 20 }}>Paytm</Text>
              <Text style={{ color: '#fff', fontSize: 16 }} >Redeem Money on Paytm</Text>
            </View>

            <TouchableOpacity onPress={() => { setModalPaytm(true) }} >
              <Icon name="arrow-forward-circle" size={responsiveWidth(10)} color="#1f4c86" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>

          </View>

        </LinearGradient>

        <LinearGradient colors={["#0a203e", "#1f4c86"]}
          useAngle={true}
          angle={322}
          angleCenter={{ x: 0.5, y: 0.5 }}
          style={{ flex: 0.2, borderRadius: 10, height: 50, elevation: 5, marginVertical: 20, borderWidth: 1, borderColor: '#1f4c86', justifyContent: 'center' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Image style={{ width: 56, height: 56 }} source={require("../../assets/PayPal.png")} />

            <View>
              <Text style={{ color: '#fff', fontSize: 20 }}>PayPal</Text>
              <Text style={{ color: '#fff', fontSize: 16 }} >Redeem Money on Paypal</Text>
            </View>

            <TouchableOpacity onPress={() => { setModalPaypal(true) }}>
              <Icon name="arrow-forward-circle" size={responsiveWidth(10)} color="#1f4c86" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>

          </View>

        </LinearGradient>

      </View>


      {/* models */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPaypal}
        onRequestClose={() => {
          setModalPaypal(!modalPaypal);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
           <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, elevation: 5, borderWidth: 1,width: '90%',
            
                  borderColor:  '#1f4c86', }}>
          {/* <View
            style={{
              backgroundColor: '#1f4c86',
              width: '90%',
              borderRadius: 10,

            }}> */}

            <View style={{ borderWidth: 1, borderColor: '#0a203e', borderRadius: 25, width: 200, alignItems: 'center', marginTop: 20, alignSelf: 'center' }}>
              <TextInput
                onChangeText={text => setPaypalId(text)}
                placeholder="Enter Your Paypal Id"
                placeholderTextColor="#fff"
                autoCorrect={false}
                value={paypalId}
                keyboardType='email-address'
                color='#fff'
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>

              <TouchableHighlight onPress={() => { setSelectedCard(100) }} style={{ borderRadius: 10 }}>
                <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, height: 60, elevation: 5, borderWidth: 1, borderColor: selectedCard === 100 ? 'gold' : '#1f4c86', width: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <Image style={{ width: 33, height: 33 }} source={require("../../assets/PayPal.png")} />
                  <View style={{ width: 40 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }} >100</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <IconFontAwesome name="rupee" size={responsiveWidth(3.5)} color="#fff" style={{ marginRight: responsiveWidth(1) }} />
                      <Text style={{ color: "#fff", fontSize: 14 }} >50</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>


              <TouchableHighlight onPress={() => { setSelectedCard(500) }} style={{ borderRadius: 10 }}>
                <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, height: 60, elevation: 5, borderWidth: 1, borderColor: selectedCard === 500 ? 'gold' : '#1f4c86', width: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <Image style={{ width: 33, height: 33 }} source={require("../../assets/PayPal.png")} />
                  <View style={{ width: 40 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }} >500</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <IconFontAwesome name="rupee" size={responsiveWidth(3.5)} color="#fff" style={{ marginRight: responsiveWidth(1) }} />
                      <Text style={{ color: "#fff", fontSize: 14 }} >1000</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>


              <TouchableHighlight onPress={() => { setSelectedCard(1000) }} style={{ borderRadius: 10 }}>
                <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, height: 60, elevation: 5, borderWidth: 1, borderColor: selectedCard === 1000 ? 'gold' : '#1f4c86', width: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <Image style={{ width: 33, height: 33 }} source={require("../../assets/PayPal.png")} />
                  <View style={{ width: 40 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }} >1000</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <IconFontAwesome name="rupee" size={responsiveWidth(3.5)} color="#fff" style={{ marginRight: responsiveWidth(1) }} />
                      <Text style={{ color: "#fff", fontSize: 14 }} >50</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>
            </View>


            <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  height: 40,
                  padding: 10,

                  borderRadius: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: '#0a203e',
                  color: '#fff',
                  elevation: 5,
                  marginRight: 30
                }}

                onPress={() => {

                  if (selectedCard != null) {
                    submitPaypal()
                  }
                  // setModalPaypal(!modalPaypal);
                  // // navigation.navigate('Home')
                  // reset()
                }}>
                <Text style={{ color: '#fff', paddingHorizontal: 10, letterSpacing: 0.8 }}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  height: 40,
                  padding: 10,

                  borderRadius: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: '#0a203e',
                  color: '#fff',
                  elevation: 5
                }}

                onPress={() => {
                  setSelectedCard()
                  setPaypalId()
                  setModalPaypal(!modalPaypal);
                  // // navigation.navigate('Home')
                  // reset()
                }}>
                <Text style={{ color: '#fff', paddingHorizontal: 10, letterSpacing: 0.8 }}>Close</Text>
              </TouchableOpacity>
            </View>
            </LinearGradient>
          {/* </View> */}
        </View>
      </Modal>

      {/* paytm Model */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPaytm}
        onRequestClose={() => {
          setModalPaytm(!modalPaytm);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
             <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, elevation: 5, borderWidth: 1,width: '90%',
            
                  borderColor:  '#1f4c86', }}>
          {/* <View
            style={{
              backgroundColor: '#1f4c86',
              width: '90%',
              borderRadius: 10
            }}> */}

            <View style={{ borderWidth: 1, borderColor: '#0a203e', borderRadius: 25, width: 200, alignItems: 'center', marginTop: 20, alignSelf: 'center' }}>
              <TextInput
                placeholder="Enter Your Paytm Number"
                placeholderTextColor="#fff"
                autoCorrect={false}
                keyboardType='number-pad'
                onChangeText={text => setPaytmNo(text)}
                value={paytmNo}
                color='#fff'
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>

              <TouchableHighlight onPress={() => { setSelectedCard(100) }} style={{ borderRadius: 10 }}>

                <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, height: 60, elevation: 5, borderWidth: 1, borderColor: selectedCard === 100 ? 'gold' : '#1f4c86', width: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <Image style={{ width: 40, height: 40 }} source={require("../../assets/Paytm.png")} />
                  <View style={{ width: 40 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }} >100</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <IconFontAwesome name="rupee" size={responsiveWidth(3.5)} color="#fff" style={{ marginRight: responsiveWidth(1) }} />
                      <Text style={{ color: "#fff", fontSize: 14 }} >50</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => { setSelectedCard(500) }} style={{ borderRadius: 10 }}>
                <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, height: 60, elevation: 5, borderWidth: 1, borderColor: selectedCard === 500 ? 'gold' : '#1f4c86', width: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <Image style={{ width: 40, height: 40 }} source={require("../../assets/Paytm.png")} />
                  <View style={{ width: 40 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }} >500</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <IconFontAwesome name="rupee" size={responsiveWidth(3.5)} color="#fff" style={{ marginRight: responsiveWidth(1) }} />
                      <Text style={{ color: "#fff", fontSize: 14 }} >100</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => { setSelectedCard(1000) }} style={{ borderRadius: 10 }}>
                <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, height: 60, elevation: 5, borderWidth: 1, borderColor: selectedCard === 1000 ? 'gold' : '#1f4c86', width: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>

                  <Image style={{ width: 40, height: 40 }} source={require("../../assets/Paytm.png")} />

                  <View style={{ width: 40 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }} >1000</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <IconFontAwesome name="rupee" size={responsiveWidth(3.5)} color="#fff" style={{ marginRight: responsiveWidth(1) }} />
                      <Text style={{ color: "#fff", fontSize: 14 }} >50</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>


            </View>




            <View style={{ flexDirection: 'row', alignSelf: 'center' }} >
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  height: 40,
                  padding: 10,

                  borderRadius: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: '#0a203e',
                  color: '#fff',
                  elevation: 5,
                  marginRight: 30
                }}

                onPress={() => {
                  if ((paytmNo.length) == 10 && selectedCard != null) {
                    submitPaytm()
                  }
                  // setModalPaypal(!modalPaytm);
                  // // navigation.navigate('Home')
                  // reset()
                }}>
                <Text style={{ color: '#fff', paddingHorizontal: 10, letterSpacing: 0.8 }}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  height: 40,
                  padding: 10,

                  borderRadius: 10,
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: '#0a203e',
                  color: '#fff',
                  elevation: 5
                }}

                onPress={() => {
                  setSelectedCard()
                  setPaytmNo('')
                  setModalPaytm(!modalPaytm);
                  // // navigation.navigate('Home')
                  // reset()
                }}>
                <Text style={{ color: '#fff', paddingHorizontal: 10, letterSpacing: 0.8 }}>Close</Text>
              </TouchableOpacity>
            </View>
            </LinearGradient>
          {/* </View> */}
        </View>
      </Modal>

      {/* Success model */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalConfirm}
        onRequestClose={() => {
          setModalPaytm(!modalConfirm);
        }}>
   
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.5)',
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: 10, elevation: 5, borderWidth: 1,   width: '65%',
              borderRadius: 10,
              
              alignItems: 'center',
              
              justifyContent: 'center',
                  borderColor:  '#1f4c86', }}>
          {/* <View
            style={{
              backgroundColor: '#1f4c86',
              width: '65%',
              borderRadius: 10,
              
              alignItems: 'center',
              height:200,
              justifyContent: 'center',
            }}> */}
            <View>
            <TouchableOpacity onPress={()=>{setModalConfim(!modalConfirm)}} >
            <Icon name="close" size={responsiveWidth(5.5)} color="#fff" style={{position:'absolute',right:-10,marginTop:3}} />
            </TouchableOpacity>
            <Text style={{color:'#fff',fontSize:18,marginTop:30,fontWeight:500}}>Amount Redeem Successful</Text>
         
            </View>
            

            <Image style={{ width: 150, height: 150 }} source={require("../../assets/greentick.gif")} />
            





          {/* </View> */}
          </LinearGradient>
        </View>
       
      </Modal>




    </View>
  )
}

export default Wallet;