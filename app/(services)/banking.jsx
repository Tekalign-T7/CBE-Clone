import { Text } from "@react-navigation/elements"
import ServiceList from "../components/serviceList"
import { View } from "react-native"
export default function Banking(){
    return (
        <>
            <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Banking</Text>
            <ServiceList iconName={"card"} title={"Manage Beneficiaries"} subTitle={"Add or Delete your Friend Account"}/>
            <ServiceList iconName={"card"} title={"View Locked Amount"} subTitle={"View Locked Amount Detail"}/>
            <ServiceList iconName={"card"} title={"Create Standing Order"} subTitle={"Create Standing Order"}/>
            <ServiceList iconName={"card"} title={"Visa Card Services"} subTitle={"Visa Card Services"}/>
            <ServiceList iconName={"card"} title={"Manage Standing Order"} subTitle={"View, Cancel or update standing order"}/>
        </>

    )
}