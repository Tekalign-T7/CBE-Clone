import {Tabs} from "expo-router";
import { StatusBar } from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {Stack} from "expo-router";

import { View,Text,Image } from "react-native";
import { Link } from "expo-router";
export default function DashboardLayout(){
    const padding=useSafeAreaInsets()
    return(
        <>
            <StatusBar value="auto"/>
            <Stack screenOptions={{
                tabBarActiveTintColor:"#651E9B",
                tabBarInactiveTintColor:"#0a050e",
                contentStyle:{
                    paddingBottom:padding.bottom+4
                }
                
                
            }}
            >
                <Stack.Screen name="telecomService" 
                options={{
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="banking" 
                options={{
                    
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="entertainment" 
                options={{
                    
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="events" 
                options={{
                    
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="payfor" 
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="tax" 
                options={{
                    
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="topUp" 
                options={{
                    
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="transfer" 
                options={{
                    title:"Home",
                    paddingBottom:100,
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="travel" 
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                <Stack.Screen name="utility" 
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
                            
                            <Link href="home"><Ionicons style={{color:"#651E9B"}} size={30} name="arrow-back"/></Link>
                            <View style={{flexDirection:"row",alignItems:"center",gap:20}}>
                                <Ionicons style={{color:"#651E9B"}} size={20} name="notifications-outline"/>
                                <Text style={{fontSize:18,color:"#651E9B"}}>አማ</Text>
                                <Ionicons style={{color:"#651E9B"}} size={25} name="refresh-outline"/>

                            </View>
                        </View>
                    )}}/>
                
            </Stack>
            
        </>
        
    )
}