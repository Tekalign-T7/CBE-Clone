import { Text, View ,Image,StyleSheet,} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function account() {
  const padding=useSafeAreaInsets()
  return(
    <View style={styles.container}>
        <Text style={styles.text}>Account</Text>
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