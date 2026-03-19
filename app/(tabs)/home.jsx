import 'react-native-gesture-handler'; 
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Home from '../components/home';
import { Text,View } from 'react-native';
import { ImageBackground } from 'react-native';
import Tax from '../(services)/tax';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import sidebarBackground from "../../assets/images/sidebarImage.png"
import cbeLogo from "@assets/images/cbe-logo.png";
import SideBarList from '../components/sidebarlist';



const Drawer = createDrawerNavigator();


export default function Index(){
  const padding = useSafeAreaInsets();
  return(
    <Drawer.Navigator  drawerContent={()=>(
      <View>
        <ImageBackground style={{height:180,paddingTop:20,alignItems:"center",flexDirection:"row",justifyContent:"center",gap:5}} source={sidebarBackground}>
          <View>
            <Image style={{height:60,width:60}} source={cbeLogo}/></View>
            <View>
              <Text style={[{fontWeight:"bold",fontSize:16,color:"#e4b573"}]}>Commercial Bank of Ethiopia</Text>
              <Text style={[{ fontSize:10,color:"#dac09c"}]}>The Bank you can always Rely on!</Text>
          </View>
        </ImageBackground>
        <SideBarList iconName={"card"} title={"CBE NOOR"} toggle={true}/>
        <SideBarList iconName={"lock-closed"} title={"Change PIN"} toggle={false}/>
        <SideBarList iconName={"power"} title={"Logout"} toggle={false}/>
        <SideBarList iconName={"information-circle"} title={"FAQ"} toggle={false}/>
        <SideBarList iconName={"settings"} title={"Security Settings/2af"} toggle={false}/>
        <SideBarList iconName={"receipt"} title={"Saved transactions"} toggle={false}/>
        <SideBarList iconName={"information-circle"} title={"about"} toggle={false}/>
        <SideBarList iconName={"star"} title={"Rate this app"} toggle={false}/>
        <SideBarList iconName={"laptop"} title={"Unsubscribe"} toggle={false}/>
        
      </View>
    )} screenOptions={{
      drawerStyle:{
        width:300
      },
      header:({navigation,route,options})=>(
                        <View style={{
                            paddingTop:padding.top,
                            height:60+padding.top,
                            flexDirection:"row",
                            alignItems:"center",
                            justifyContent:"space-between",
                            paddingHorizontal:15,
                            backgroundColor:"#F7F7F7"

                        }
                        }>
                            
                          <Pressable onPress={()=>navigation.toggleDrawer()} ><Ionicons style={{color:"#651E9B"}} size={32} name="menu"/></Pressable>
                          <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                            <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                            <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                            <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                          </View>
                        </View>
                    )
    }}>
        <Drawer.Screen name="Home"  component={Home}/>     
        <Drawer.Screen name="Seting" component={Tax}/>     
           
    </Drawer.Navigator>
  )
}