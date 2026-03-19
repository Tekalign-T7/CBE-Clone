import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
export default function Utility(){
    return (
        <>
           <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Utility</Text>
           <ServiceList iconName={"bulb"} title={"Electric, Water and Nedaj"} subTitle={"Electric, Water and Nedaj payment"}/>
           <ServiceList iconName={"flash"} title={"Ethiopian Electric Utility Prepaid"} subTitle={"EEU Prepaid Topup using serial number"}/>
        </>

    )
}