import { View, Text,SafeAreaView } from 'react-native'
import React,{useState} from 'react'

import Navigation from './src/Navigation/index'
import CheckInternet from './src/screens/CheckInternet/index'


const App = () => {
  const [checkInternet, setCheckInternet] = useState(false)
 
  
  return (
<>
 {checkInternet==true? (
 <Navigation/>
 ):(null)}
   
    
      
    
   
    <CheckInternet checkInternet={checkInternet} setCheckInternet={setCheckInternet} />
    </>
  )
}




export default App;

