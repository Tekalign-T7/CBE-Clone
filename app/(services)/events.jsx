import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
export default function Events(){
    return (
        <>
        <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Events</Text>
        <ServiceList iconName={"ticket"} title={"DSTV Payment"} subTitle={"Dstv Entertainment"}/>
        <ServiceList iconName={"ticket"} title={"CANAL+ Payment"} subTitle={"CANAL+ Entertainmnet"}/>
        <ServiceList iconName={"ticket"} title={"Websprix"} subTitle={"Websprix Payment"}/>
        <ServiceList iconName={"ticket"} title={"Semu Audio Film Production"} subTitle={"Semu Audio Film Production Payment"}/>
        </>

    )
}