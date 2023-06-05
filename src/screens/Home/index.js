import { View, Text, Button, Pressable, SafeAreaView, ScrollView, Image,TouchableOpacity,Modal } from 'react-native'
import React from 'react'
import { useLayoutEffect,useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../../components/slider/data'
import BannerSlider from '../../components/slider/BannerSlider'
import { windowHeight, windowWidth } from '../../utiles/Dimensions'
import styles from './style'
import IconEntypo from 'react-native-vector-icons/Entypo';



const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };




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
            <Icon onPress={()=>{navigation.navigate('SpinerWheel')}} name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>
          </View>
        
      ),

    });
  }, []);


  // const DailyReward = () => {
      
  //   return (
    
  //   )
  // }



  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#0a203e' }}>
   
      <ScrollView>
        <View style={{ flex: 1, }}>
          {/* Slider */}
          <View style={[styles.slider]}>
            <Carousel

             
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - responsiveWidth(6)}
              itemWidth={responsiveWidth(76)}
              loop={true}
            />
          </View>
          {/* Slider-End */}

          {/* Get Free Coins -Start */}
          <View style={{ flex: 0.20, marginTop: responsiveHeight(1.8) }}>

            <Text style={styles.getFreeMainText}>Get Free Coins</Text>
            <View style={{ alignItems: 'center', marginTop: responsiveWidth(2.5)}}>

              <View style={styles.getFreeMainContainer}>
                <Image style={styles.getFreeCoin} source={require('../../assets/coin.png')} />
                <View style={{ flexDirection: 'column', marginLeft: responsiveWidth(4.8) }}>
                  <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.25), fontWeight: 600 }}>Free Coins</Text>
                  <Text style={{ color: '#fff' }}>Scratch Card, Get Coins!</Text>
                </View>
                <View style={{ flexDirection: 'column',marginHorizontal:responsiveWidth(6) }}>
                  <Text style={{ color: '#fff' }}>Get Up-to</Text>

                  <View style={{ flexDirection: 'row', marginTop: responsiveWidth(2.5) }}>
                    <Text style={{ color: '#fff', fontSize: responsiveFontSize(2.15) }}>10</Text>
                    <Image style={{ width: responsiveWidth(7.3), height: responsiveHeight(2.82), marginLeft: responsiveWidth(2.5)}} source={require('../../assets/coin.png')} />
                  </View>

                </View>
              </View>
            </View>

          </View>
          {/* Get Free Coins -End */}

          {/* Spine-Start*/}
          <View style={{ flex: 0.20, marginTop: responsiveWidth(5) }}>
            <Text style={styles.spineMainText}>Spine Wheel</Text>
     

           
            <View style={{ alignItems: 'center', marginTop: responsiveWidth(2.5) }}>
            <Pressable onPress={()=>{navigation.navigate('SpinerWheel')}}  style={{backgroundColor:'#1f4c86',zIndex:0.5,top:160,left:80,paddingHorizontal:5,borderRadius:5}} >
                   <Text  style={{color:'#fff',fontWeight:400}}>Spin Now</Text>
                </Pressable>
              <View style={styles.spineImgView}>
                
                <Image style={styles.spineImg} source={require('../../assets/spinerposter.jpg')} />

              </View>
            </View>
            
          </View>
          {/* Spine-End*/}


          {/* Game Zone-Start*/}
          <View style={{ flex: 0.20, marginTop:responsiveWidth(3.6) }}>


            <View style={{ alignItems: 'center', marginTop: responsiveWidth(2.5)}}>

              <View style={styles.gameZoneContainer}>

                <Text style={styles.gameZoneMainText}>Quiz Zone</Text>
                <View style={styles.gameZoneMainImgView}>

                  <View style={styles.gameZoneSingleImgView}>
                    <Image style={styles.gameZoneSingleImg} source={require('../../assets/q1.png')} />
                    <Text style={styles.gameZoneImgText}>English Quiz</Text>
                  </View>
                  <View style={styles.gameZoneSingleImgView}>
                    <Image style={styles.gameZoneSingleImg} source={require('../../assets/q2.png')} />
                    <Text style={styles.gameZoneImgText}>Math Quiz</Text>
                  </View>
                  <View style={styles.gameZoneSingleImgView}>
                    <Image style={styles.gameZoneSingleImg} source={require('../../assets/q3.png')} />
                    <Text style={styles.gameZoneImgText}>GK Quiz</Text>
                  </View>

                 <TouchableOpacity onPress={ ()=>{setModalVisible(true)} }>
                 <View style={styles.gameZoneSingleImgView}>
                    <Image style={styles.gameZoneSingleImg} source={require('../../assets/q4.png')} />
                    <Text style={styles.gameZoneImgText}>Daily Reward</Text>
                  </View>

                  <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#1f4c86',
            width: '90%',
             alignItems:'center',
            borderRadius: 10,
          }}>
          
          <TouchableOpacity onPress={()=>{ setModalVisible(!modalVisible)}} style={{position:'absolute',right:15,top:13}}>
          <IconEntypo name="cross" size={responsiveWidth(6)} color="#fff"  />
          </TouchableOpacity>


          <Text
            style={{
              fontSize: 30,
              letterSpacing:1.5,
              fontWeight: '600',
             
              marginTop: 30,
              color:'#fff'
            }}>
            Congrats
          </Text>
          <Text 
            style={{
              fontSize: 16,
              marginTop: 5,
              color: '#fff',

            }}>
           Come back everyday to earn{'\n'}
           {'        '}Extra reward coins!
          </Text>
          <Image style={{width:200,height:120,marginTop:25}} source={require('../../assets/dailygift.png')} />

          <Text 
            style={{
              fontSize: 16,
              marginTop: 15,
              color: '#fff',
              
            }}>
          YOUR REWARD TODAY IS
          </Text>
         <View style={{flexDirection:'row'}} >
         <Image style={{width:30,height:30,marginTop:2,marginRight:4}} source={require('../../assets/coin.png')} />
          <Text 
            style={{
              fontSize: 16,
              marginTop: 5,
              color: '#fff',
              
            }}>
           {34} Coins
          </Text>
         </View>
          <TouchableOpacity
            style={{
         
              height: 40,
              padding: 10,
            
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
              backgroundColor:'#0a203e',
              color:'#fff',
              elevation:5
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
          
            
            }}>
            <Text style={{ color:'#fff',paddingHorizontal:10,letterSpacing:0.8}}>Claim Reward</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

                 </TouchableOpacity>
               
              {/* Model */}

                </View>





              </View>
            </View>

          </View>



          {/* Game Zone-End*/}

          {/* Contest Zone-Start*/}

          <View style={{ flex: 0.20, marginTop: responsiveWidth(3.6), marginBottom: responsiveWidth(9.75)}}>


            <View style={{ alignItems: 'center', marginTop: responsiveWidth(2.5) }}>

              <View style={styles.contestZoneContainer}>

                <Text style={styles.contestZoneMainText}>Contest Zone</Text>

                <View >
                  <Image style={styles.contestZoneImg} source={require('../../assets/contest.jpeg')} />
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.contestZoneAvailableText}>Contest not available!!</Text>
                  </View>
                </View>






              </View>
            </View>

   {/* Video-Start*/}

            <View style={{ marginTop: responsiveWidth(3.6) }} >
              <Text style={styles.videoMainText}>Earn Money By Watch Video</Text>
              <View style={{ alignItems: 'center', marginTop: responsiveWidth(2.5) }}>

                <View style={styles.videoImgView}>
                  <Image style={styles.videoImg} source={require('../../assets/videoicon.png')} />

                </View>
              </View>
            </View>

{/* Video-End*/}

          </View>

          {/* Contest Zone-End*/}

       

       



        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home