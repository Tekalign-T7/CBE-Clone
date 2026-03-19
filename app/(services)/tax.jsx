import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
export default function Tax(){
    return (
        <>
        <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Tax</Text>
        <ServiceList iconName={"document"} title={"Tax and Government Service"} subTitle={"Tax and Government Services"}/>
        <ServiceList iconName={"document"} title={"MESOB Services"} subTitle={"MESOB Services Payment"}/>
        <ServiceList iconName={"document"} title={"ICS/Immigration"} subTitle={"Immigration Services"}/>
        <ServiceList iconName={"document"} title={"AA City Traffic Mgt Service"} subTitle={"AA City Traffic Mgt Service"}/>
        </>

    )
}