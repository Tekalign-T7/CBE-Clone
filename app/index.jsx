import { Text, View ,Image,StyleSheet,Pressable} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import cbelogo from "../assets/images/cbe-logo.png"
import bar from "../assets/images/bar.png"
import { Link } from "expo-router";
import { TextInput } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import { Keyboard } from "react-native";
export default function Index() {
  const padding=useSafeAreaInsets()
  return (
    
    <View
      style={[styles.container,{paddingTop:3*padding.top,paddingBottom:padding.bottom}]}
    >
      <Image style={{height:200,width:200}} source={cbelogo}/>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={[styles.text,{fontSize:20}]}>Commercial Bank of Ethiopia!</Text>
      {/* <Text style={[styles.text,{fontSize:20,marginTop:"40%"}]}>Pin</Text> */}
      <TextInput style={[styles.text,{fontSize:15,marginTop:"20%",color:"black"}]} placeholder="Pin"/>
      <Image style={{width:"80%",height:"10",marginTop:5,marginBottom:20}} source={bar}/>
      <Pressable>
        <Link href="/home">
            <View style={styles.button}>
              <Ionicons size={25} color="white" name="chevron-forward-outline"/>
            </View>
        </Link>
      </Pressable>
      <Text style={styles.copyrightText}>Copyright © Commercial Bank of Ethiopia.</Text>
    </View>
  );
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
    marginTop:"62%",
    color:"#651E9B"
  }
})