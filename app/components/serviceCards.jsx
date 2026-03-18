import { Text, View,StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
export default function ServiceCard({iconName,serviceName}){
    return(
        <View style={styles.card}>
            <Ionicons size={35} color="#651E9B" name={iconName}/>
            <Text style={{color:"#562cd3",fontWeight:"500"}}>{serviceName}</Text>

        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        width:160,
        height:100,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#EBEBEB"
    }
})