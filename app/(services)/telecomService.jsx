import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"

export default function TelecomService(){
    return (
        <>
        <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Telecom Service</Text>
        <ServiceList iconName={"call"} title={"Airtime"} subTitle={"Airtime TopUP"}/>
        <ServiceList iconName={"call"} title={"Ethio telecom Services"} subTitle={"Ethio telecom Services Payment"}/>
        <ServiceList iconName={"call"} title={"Safaricom Services"} subTitle={"Safaricom Services Payment"}/>
        </>

    )
}