import { View, Text,FlatList,TouchableOpacity,onPress,Modal } from 'react-native'
import React,{useRef,useState,useLayoutEffect} from 'react'
import {quizdata} from './QuizData'
import {windowHeight,windowWidth} from '../../utiles/Dimensions'
import Questions from './Questions'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

const Quiz = () => {
    // alert(JSON.stringify(quizdata[1].question))

    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(1);
   
    const [questions, setQuestions] = useState(quizdata);
    const listRef = useRef();
    const [modalVisible, setModalVisible] = useState(false);
    const OnSelectOption = (index, x) => {
      const tempData = questions;
      tempData.map((item, ind) => {
        if (index == ind) {

          if (item.marked !== -1) {
            item.marked = -1;
          } else {
            item.marked = x;
          }
        }
      });
      let temp = [];
      tempData.map(item => {
        temp.push(item);
      });
      setQuestions(temp);
       
        
    };

    const getTextScore = () => {
      let marks = 0;
      questions.map(item => {
        if (item.marked !== -1) {
         
          if(item.marked == item.correct){
            marks = marks + 5;
          }
          
        }
      });
      return marks;
    };

    const reset = () => {
      const tempData = questions;
      tempData.map((item, ind) => {
        item.marked = -1;
      });
      let temp = [];
      tempData.map(item => {
        temp.push(item);
      });
      setQuestions(temp);
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
              <Icon  name="wallet" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(5)}} />
              <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
              <Icon  name="person" size={responsiveWidth(6)} color="#fff" style={{ marginRight: responsiveWidth(3) }} />
              </TouchableOpacity>
            </View>
          
        ),
  
      });
    }, []);


  return (
    
    <View style={{flex:1,backgroundColor: '#0a203e' }} >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',

            marginLeft: 20,
            color: '#fff',
          }}>
          Questions :{' ' + currentIndex + '/' + quizdata.length}
        </Text>
        <Text
          style={{
            marginRight: 20,
            fontSize: 20,
            fontWeight: '600',
            color: '#fff',
          }}
          onPress={() => {
            reset();
            listRef.current.scrollToIndex({animated: true, index: 0});
          }}>
          Reset
        </Text>
      </View>
        <View style={{marginTop: 30}}>
        <FlatList
       onScroll={e=>{
        const x = e.nativeEvent.contentOffset.x / windowWidth + 1;
            setCurrentIndex(x.toFixed(0));
       }}
            ref={listRef}
        showsHorizontalScrollIndicator={false}
         pagingEnabled
         horizontal
          data={questions}
          renderItem={({item, index}) => {
            return (
              <Questions
                data={item}
                selectedOption={x =>{
                  
                  OnSelectOption(index,x)
                }}
              />
            );
          }}
        />
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:50,width:'100%'}}>
          
        <TouchableOpacity style={{
           backgroundColor: currentIndex > 1 ?'#1f4c86':'gray',
           height:50,
           width:100,
           borderRadius:10,
           marginLeft:20,
           justifyContent:'center',
           alignItems:'center'
        }}  
        
        onPress={() => {
            // console.log(parseInt(currentIndex) - 1);
            if (currentIndex > 1) {
              listRef.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 2,
              });
            } 
          }}  >
          
           <Text style={{color:'#fff'}} >
              Previous
           </Text>

        </TouchableOpacity>


      {currentIndex==8 ? (
        <TouchableOpacity style={{
           backgroundColor:'green',
           height:50,
           width:100,
           borderRadius:10,
           marginRight:20,
           justifyContent:'center',
           alignItems:'center'
        }}  onPress={ ()=>{
              setModalVisible(true)
        } } >
          
           <Text style={{color:'#fff'}} >
              Submit
           </Text>

        </TouchableOpacity>
      ): (
        <TouchableOpacity style={{
           backgroundColor:'#1f4c86',
           height:50,
           width:100,
           borderRadius:10,
           marginRight:20,
           justifyContent:'center',
           alignItems:'center'
        }}  onPress={ ()=>{
          if(questions[currentIndex-1].marked !== -1){

            if (currentIndex < questions.length) {
            listRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex ,
                  });
          }
          }

            
        } } >
          
           <Text style={{color:'#fff'}} >
              Next
           </Text>

        </TouchableOpacity>
      )}

     


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
              
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 30,
                letterSpacing:1.5,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
                color:'#fff'
              }}>
              Score
            </Text>
            <Text 
              style={{
                fontSize: 40,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
                color: 'green',
              }}>
              {getTextScore()}
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
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
                navigation.navigate('Home')
                reset()
              }}>
              <Text style={{ color:'#fff',paddingHorizontal:10,letterSpacing:0.8}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </View>
  )
}

export default Quiz;