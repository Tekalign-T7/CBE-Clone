import { View, Text, ScrollView,Image, StyleSheet,ImageBackground } from "react-native";
import ServiceCard from "./serviceCards";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import cbeLogo from "@assets/images/cbe-logo.png"
import mapBackgroundImage from "@assets/images/map-background.png"
import { Ionicons } from "@expo/vector-icons";

export default function InfoHeader(){
    const padding = useSafeAreaInsets();
  const [visible,setVisible]=useState(false)
    return(
       <View style={{height:200}}>
        <ImageBackground imageStyle={{borderRadius:5}} resizeMode="cover" style={[styles.backgroundImage,styles.container, {height: 200,marginBottom:0}]} source={mapBackgroundImage} >
        
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:10,gap:8}}>
          <View><Image style={{height:50,width:50}} source={cbeLogo}/></View>
            <View>
              <Text style={[styles.text,{fontWeight:"bold",fontSize:15,letterSpacing:0.6}]}>Commercial Bank of Ethiopia</Text>
              <Text style={[styles.text,{letterSpacing:1.3}]}>The Bank you can always Rely on!</Text>
          </View>
        </View>
        <Text style={{color:"#e0dfdf"}}>Balance</Text>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          {visible ? <Text style={{fontSize:25,marginRight:5,color:"#cdc9c9"}}>1,000,000</Text> : <Text style={{fontSize:30,color:"white",marginRight:5,letterSpacing:0.2}}>*****</Text>}
          <Text style={{fontSize:30,fontWeight:"bold",color:"white",marginRight:5}}>Br.</Text>
          <Ionicons onPress={()=>setVisible(!visible)} size={25} color="#cdc9c9" name={visible ? "eye" :"eye-off"}/>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10}}>
          <Text style={{fontSize:20,color:"#BA8E4F"}}>Saving-</Text>
          {visible ? <Text style={{fontSize:18,color:"#BA8E4F"}}>1000580152396</Text> : <Text style={{fontSize:18,color:"#BA8E4F"}}>1000****2396</Text>}
        </View>
        <Text style={{color:"white"}}>Mar 18,2026 4:35:56PM </Text>
        </ImageBackground>
       </View>

    )
}
const styles=StyleSheet.create({
  container:{
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F2F2F2",
  },
  backgroundImage:{
    // paddingHorizontal:30,
    marginHorizontal:20,
    borderCurve:10
    
  },
  text:{
    color:"#e4b573"
  },
  scrollview:{
    
    gap:20,
  }
})
