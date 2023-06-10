import { View, Text, Button, Pressable, SafeAreaView, ScrollView, Image,TouchableOpacity,Modal,TouchableHighlight } from 'react-native'
import React from 'react'
import { useLayoutEffect,useState,useRef } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import { sliderData } from '../../components/slider/data'
import BannerSlider from '../../components/slider/BannerSlider'
import { windowHeight, windowWidth } from '../../utiles/Dimensions'
import styles from './style'
import IconEntypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient'


const Home = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };



//  Header start
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
            <Icon onPress={()=>{navigation.navigate('Wallet')}} name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
            </TouchableOpacity>
          </View>
        
      ),

    });
  }, []);

//  Header End

  // const DailyReward = () => {
      
  //   return (
    
  //   )
  // }

// const [index, setIndex] = useState(0);
// const isCarousel = useRef(null);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#0a203e' }}>
   
      <ScrollView>
        <View style={{ flex: 1, }}>
          {/* Slider */}
          <View style={[styles.slider]}>
            <Carousel
              // ref={isCarousel}

              autoplay={true}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth}  
              // - responsiveWidth(6)
              itemWidth={responsiveWidth(85)}
              loop={true}
              // onSnapToItem={index => setIndex(index)}
            />
            {/* <Pagination
              dotsLenght={sliderData.lenght}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width:10,
                height:10,
                borderRadius:10,
                marginHorizontal:8,
                backgroundColor:'#fff',
                zIndex:1
              }}
              inactiveDotOpacity={0.4}
           
            />
             */}
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
            <TouchableHighlight onPress={()=>{navigation.navigate('SpinerWheel')}}  style={{backgroundColor:'#1f4c86',zIndex:0.5,top:responsiveWidth(39),left:responsiveWidth(19),paddingHorizontal:responsiveWidth(2),borderRadius:responsiveWidth(2.5)}} >
                   <Text  style={{color:'#fff',fontWeight:400}}>Spin Now</Text>
                </TouchableHighlight>
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
                 </TouchableOpacity>

    
              

                </View>





              </View>
            </View>

          </View>

 {/* Model-Start Daily Rewards  */}
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
         <LinearGradient colors={["#0a203e", "#1f4c86"]}
                  useAngle={true}
                  angle={322}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={{ borderRadius: responsiveWidth(2.5), elevation: responsiveWidth(2.5), borderWidth: responsiveWidth(0.2),width: '90%',height:responsiveHeight(50),
                  alignItems:'center',
                  borderColor:  '#1f4c86', }}>
        {/* <View
          style={{
            backgroundColor: '#1f4c86',
            width: '90%',
             alignItems:'center',
            borderRadius: 10,
          }}> */}
          
          <TouchableOpacity onPress={()=>{ setModalVisible(!modalVisible)}} style={{position:'absolute',right:responsiveWidth(3.5),top:responsiveWidth(3)}}>
          <IconEntypo name="cross" size={responsiveWidth(6)} color="#fff"  />
          </TouchableOpacity>


          <Text
            style={{
              fontSize: responsiveFontSize(3.55),
              letterSpacing:responsiveWidth(0.35),
              fontWeight: '600',
             
              marginTop: responsiveWidth(7),
              color:'#fff'
            }}>
            Congrats
          </Text>
          <Text 
            style={{
              fontSize: responsiveWidth(3.8),
              marginTop: responsiveWidth(1.2),
              color: '#fff',

            }}>
           Come back everyday to earn{'\n'}
           {'        '}Extra reward coins!
          </Text>
          <Image style={{width:responsiveWidth(44),height:responsiveHeight(14.2),marginTop:responsiveWidth(4)}} source={require('../../assets/dailygift.png')} />

          <Text 
            style={{
              fontSize: responsiveWidth(3.8),
              marginTop: responsiveWidth(3.6),
              color: '#fff',
              
            }}>
          YOUR REWARD TODAY IS
          </Text>
         <View style={{flexDirection:'row'}} >
         <Image style={{width:responsiveWidth(7.15),height:responsiveHeight(3.65),marginTop:responsiveWidth(0.5),marginRight:responsiveWidth(1)}} source={require('../../assets/coin.png')} />
          <Text 
            style={{
              fontSize: responsiveFontSize(1.9),
              marginTop: responsiveFontSize(0.7),
              color: '#fff',
              
            }}>
           {34} Coins
          </Text>
         </View>
          <TouchableOpacity
            style={{
         
              height: responsiveHeight(4.8),
              padding: responsiveWidth(2.5),
            
              borderRadius: responsiveWidth(2.5),
              marginTop: responsiveWidth(5),
              marginBottom: responsiveWidth(5),
              backgroundColor:'#0a203e',
              color:'#fff',
              elevation:responsiveWidth(1.2)
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
          
            
            }}>
            <Text style={{ color:'#fff',paddingHorizontal:responsiveWidth(2.4),letterSpacing:responsiveFontSize(0.095)}}>Claim Reward</Text>
          </TouchableOpacity>
        {/* </View> */}
        </LinearGradient>
      </View>
    </Modal> 
{/* Model-End Daily Rewards */}

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