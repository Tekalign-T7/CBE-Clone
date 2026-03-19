import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
export default function Travel(){
    return (
        <>
        <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Travel</Text>
        <ServiceList iconName={"airplane"} title={"Air Transport"} subTitle={"Air Transport Payment"}/>
        <ServiceList iconName={"car"} title={"Land Transport"} subTitle={"Land Transport Payment"}/>
        </>

    )
}
