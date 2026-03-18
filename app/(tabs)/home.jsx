import { Text, View ,Image,StyleSheet,ImageBackground,ScrollView} from "react-native";
import InfoHeader from "../components/infoheader"
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import mapBackgroundImage from "@assets/images/icon.png"
import mapBackgroundImage from "@assets/images/map-background.png"
import ServiceCard from "../components/serviceCards";
import {Ionicons} from "@expo/vector-icons"
import cbeLogo from "@assets/images/cbe-logo.png"
import { useState } from "react";

export default function Index() {
  const padding = useSafeAreaInsets();
  const [visible,setVisible]=useState(false)
  return (
    <View style={{backgroundColor:"#F7F7F7",flex:1}}>
        <InfoHeader/>
        <View style={{alignItems:"center",height:100}}>
            <Text style={{color:"gray",fontSize:20,fontWeight:"bold",}}><Text style={{color:"green"}}>.</Text>...</Text>
            <View style={{borderWidth:1,padding:4,paddingHorizontal:15,borderRadius:5,borderColor:"white",backgroundColor:"#651E9B"}}><Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Fast Pay</Text></View>
            <Text style={{color:"#651E9B"}}>Services</Text>
        </View>
      
        
        <View style={{flex:1}}>
          <ScrollView contentContainerStyle={{
              flexDirection:"row",
              flexWrap:"wrap",
              gap:15,
              alignItems:"center",
              paddingHorizontal:24,
              paddingBottom:30
              // alignItems:"center"
            }} >
            <ServiceCard iconName={"call"} serviceName={"Telecom Services"}/>
            <ServiceCard iconName={"arrow-redo"} serviceName={"Transfer"}/>
            <ServiceCard iconName={"people"} serviceName={"People"}/>
            <ServiceCard iconName={"car-sport"} serviceName={"Utility"}/>
            <ServiceCard iconName={"phone-portrait"} serviceName={"Top Up"}/>
            <ServiceCard iconName={"card"} serviceName={"Banking"}/>
            <ServiceCard iconName={"cellular"} serviceName={"Finance"}/>
            <ServiceCard iconName={"ticket"} serviceName={"Events"}/>
            <ServiceCard iconName={"document"} serviceName={"Government Tax"}/>
            <ServiceCard iconName={"logo-paypal"} serviceName={"Pay for it"}/>
            

          </ScrollView>
        </View>
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