import { View,Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
export default function SideBarList({iconName,title,toggle=false}){
    const [toggleIcon,setToggleIcon]=useState(false)
    return(
        <View style={{paddingHorizontal:25,paddingVertical:5,paddingTop:20,flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
            <Ionicons size={25} color="#651E9B" name={iconName}/>
            <Text style={{fontSize:15,fontWeight:500,color:"#651E9B"}}>{title}</Text>
          </View>
          {toggle && <View>{toggleIcon ? <Ionicons onPress={()=>setToggleIcon(!toggleIcon)} size={35} color="#651E9B" name="toggle"/> : <Ionicons style={{transform:[{ scaleX: -1 }]}} onPress={()=>setToggleIcon(!toggleIcon)} size={35} color="#9d9d9d" name="toggle"/>}</View>}
        </View>
        
    )
}