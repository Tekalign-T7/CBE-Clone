import { Text, View ,Image,StyleSheet,ImageBackground,ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons"
export default function List({image}){
    return(
        <Text style={styles.container}>
            {}
            <View></View>
            <View></View>
        </Text>
    )
}

const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        backgroundColor:"white",
        width:"90%",
        height:70,
        borderRadius:10,
        borderColor:"#EBEBEB"
    }
})