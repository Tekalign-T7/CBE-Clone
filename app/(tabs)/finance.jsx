import { Text, View ,Image,StyleSheet,ImageBackground} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoHeader from "../components/infoheader";
import qrcode from "@assets/images/QR-Code.jpg"
import cbelogo from "@assets/images/cbe-logo.png"

export default function finance() {
  const padding=useSafeAreaInsets()

  return(
    <View style={[{paddingTop:padding.top*0.002}]}>
       <InfoHeader/>
        <View style={{alignItems:"center",height:60,marginTop:6}}>
            <Text style={{color:"gray",fontSize:20,fontWeight:"bold",}}><Text style={{color:"green"}}>.</Text>...</Text>
            <Text style={{color:"#651E9B"}}>Fast Payment Services.</Text>
        </View>
        <ImageBackground source={qrcode} resizeMode="cover" imageStyle={{borderRadius:2}} style={{height:299,width:300,borderColor:"#651E9B",alignItems:"center",marginHorizontal:40,justifyContent:"center"}}>
          <Image style={{height:100,width:100}} source={cbelogo}/>
        </ImageBackground>
        <View style={{alignItems:"center",paddingTop:30}}>
          <Text style={{color:"#651E9B",opacity:0.9}}>Scan The QR Code for Quick Pay.</Text>
        </View>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F2F2F2"
  },
  text:{
    fontSize:35,
    fontWeight:"bold",
    color:"#651E9B"
  },
  button:{
    fontSize:25,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#BA8E4F",
    borderRadius:50,
    height:50,
    width:50,
  },
  copyrightText:{
    marginTop:"38%",
    color:"#651E9B"
  }
})