import { Text, View ,Image,StyleSheet,ImageBackground,ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import redArrow from "@assets/images/red-arrow.png"
import greenArrow from "@assets/images/green-arrow.png"
export default function ServiceList({iconName,title,subTitle}){
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",gap:15}}>
                <Ionicons size={35} name={iconName} style={{color:"#651E9B"}}/>
                <View>
                    <Text style={{fontWeight:"bold",color:"#651E9B",fontSize:15}}>{title}</Text>
                    <Text style={{color:"#a7a2a2"}}>{subTitle}</Text>
                </View>
            </View>
            <View style={{alignItems:"flex-end",justifyContent:"center"}}>
                <Ionicons size={20} name="chevron-forward" style={{color:"#929095"}}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        borderWidth:1,
        backgroundColor:"white",
        height:80,
        borderRadius:10,
        borderColor:"#EBEBEB",        
        paddingVertical:20,
        paddingHorizontal:20,
        marginHorizontal:"4%",
        justifyContent:"space-between",
        margin:5
      
       
    },
    arrowImage:{
        height:30,
        width:30,
        borderRadius:50
    }
})