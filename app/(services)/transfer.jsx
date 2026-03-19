import { Text } from "@react-navigation/elements"
import { ScrollView } from "react-native"
import ServiceList from "../components/serviceList"
export default function Transfer(){
    return (
        <>
        <ScrollView>
            <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Transfer</Text>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to CBE Account"} subTitle={"Transfer to CBE Account"}/>
            <ServiceList iconName={"arrow-redo"} title={"Own Account Transfer"} subTitle={"Transfer between your accounts"}/>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to CBEBirr Agent"} subTitle={"Transfer to CBEBirr Agent"}/>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to CBEBirr Wallet"} subTitle={"Bank to CBEBirr Wallet transfer"}/>
            <ServiceList iconName={"arrow-redo"} title={"Make Payment to Beneficiary"} subTitle={"Transfer to your beneficiaries"}/>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to Wallet"} subTitle={"Transfer to Wallets"}/>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to Other Banks"} subTitle={"Transfer to Other Banks"}/>
            <ServiceList iconName={"arrow-redo"} title={"Local Money Transfer"} subTitle={"Transfer to any non CBE customer"}/>
            <ServiceList iconName={"arrow-redo"} title={"Awach"} subTitle={"Awach"}/>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to telebirr Agent"} subTitle={"Transfer to telebirr Agent"}/>
            <ServiceList iconName={"arrow-redo"} title={"Transfer to Micro Finance Institution"} subTitle={"Deposite Micro Finance Institution"}/>
        </ScrollView>
        </>

    )
}