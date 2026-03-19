import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
export default function Topup(){
    return (
        <>
        <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Top Up</Text>
        <ServiceList iconName={"phone-portrait"} title={"Airtime"} subTitle={"Airtime TopUP"}/>
        <ServiceList iconName={"phone-portrait"} title={"Ethio telecom Services"} subTitle={"Ethio telecom Services Payment"}/>
        <ServiceList iconName={"phone-portrait"} title={"Safaricom Services"} subTitle={"Safaricom Services Payment"}/>
        </>

    )
}