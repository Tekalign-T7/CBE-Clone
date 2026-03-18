import {Tabs} from "expo-router";
import { StatusBar } from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { View,Text,Image } from "react-native";
export default function DashboardLayout(){
    const padding=useSafeAreaInsets()
    return(
        <>
            <StatusBar value="auto"/>
            <Tabs screenOptions={{
                tabBarActiveTintColor:"#651E9B",
                tabBarInactiveTintColor:"#0a050e",
                
                
            }}
            >
                <Tabs.Screen name="home" 
                options={{
                    title:"Home",
                    header:()=>(
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
                            
                            <Ionicons style={{color:"#651E9B"}} size={32} name="menu"/>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    ),
                    tabBarIcon:({focused})=>(
                    <Ionicons color={focused ? "#651E9B" : "#0a050e"} size={24} name={focused ? "apps-sharp" :"apps-outline"}/>
                )}}/>
                <Tabs.Screen name="finance" options={{title:"Finance",header:()=>(
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
                            <Text style={{fontSize:20,fontWeight:"bold",color:"#651E9B"}}>Finance</Text>
                            {/* <Ionicons style={{color:"#651E9B"}} size={32} name="menu"/> */}
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    ),tabBarIcon:({focused})=>(
                    <Ionicons color={focused ? "#651E9B" : "#0a050e"} size={24} name={focused ? "business" :"business-outline"}/>
                )}}/>
                <Tabs.Screen name="accounts" options={{title:"Account",header:()=>(
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
                            <Text style={{fontSize:20,fontWeight:"bold",color:"#651E9B"}}>Account</Text>
                            {/* <Ionicons style={{color:"#651E9B"}} size={32} name="menu"/> */}
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    ),tabBarIcon:({focused})=>(
                    <Ionicons color={focused ? "#651E9B" : "#0a050e"} size={24} name={focused ? "wallet" :"wallet-outline"}/>
                )}}/>
                <Tabs.Screen name="recent"  options={{title:"Recent",header:()=>(
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
                            <Text style={{fontSize:20,fontWeight:"bold",color:"#651E9B"}}>Recent</Text>
                            {/* <Ionicons style={{color:"#651E9B"}} size={32} name="menu"/> */}
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    ),tabBarIcon:({focused})=>(
                    <Ionicons color={focused ? "#651E9B" : "#0a050e"} size={24} name={focused ? "time" :"time-outline"}/>
                )}}/>
            </Tabs>
            
        </>
        
    )
}