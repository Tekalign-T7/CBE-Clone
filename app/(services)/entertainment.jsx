import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
export default function Entertainment(){
    return (
        <>
        <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Entertainment</Text>
        <ServiceList iconName={"tv"} title={"DSTV Payment"} subTitle={"Dstv Entertainment"}/>
        <ServiceList iconName={"tv"} title={"CANAL+ Payment"} subTitle={"CANAL+ Entertainmnet"}/>
        <ServiceList iconName={"tv"} title={"Websprix"} subTitle={"Websprix Payment"}/>
        <ServiceList iconName={"tv"} title={"Semu Audio Film Production"} subTitle={"Semu Audio Film Production Payment"}/>
        </>

    )
}