import { Text } from "@react-navigation/elements"
import { ScrollView } from "react-native"
import ServiceList from "../components/serviceList"
export default function Payfor(){
    return (
        <>
        <ScrollView contentContainerStyle={{paddingBottom:50,marginBottom:60}}>
            <Text style={{textAlign:"center",paddingVertical:10,fontSize:25,fontWeight:"bold",color:"#8330c2"}}>Pay For</Text>
            <ServiceList iconName={"logo-paypal"} title={"e-Commerce and other payment"} subTitle={"e-Commerce and other payment"}/>
            <ServiceList iconName={"logo-paypal"} title={"School Fee"} subTitle={"School Fee Payment"}/>
            <ServiceList iconName={"logo-paypal"} title={"Health"} subTitle={"Hospital and related Payment"}/>
            <ServiceList iconName={"logo-paypal"} title={"Donation"} subTitle={"Donation and Fund Raising"}/>
            <ServiceList iconName={"logo-paypal"} title={"SantimPay"} subTitle={"SantimPay"}/>
            <ServiceList iconName={"logo-paypal"} title={"Hajj Umrah Payment"} subTitle={"Hajj Umrah Payment"}/>
            <ServiceList iconName={"logo-paypal"} title={"StarPay"} subTitle={"starpay"}/>
            <ServiceList iconName={"logo-paypal"} title={"Auction Ethiopia"} subTitle={"Auction cpo and subscription payments"}/>
            <ServiceList iconName={"logo-paypal"} title={"Key Housing Payments"} subTitle={"Key Housing Payments"}/>
            <ServiceList iconName={"logo-paypal"} title={"Mahibere Kidusan AAC With BranaPay"} subTitle={"Mahbere Kidusan with BranaPay"}/>
            <ServiceList iconName={"logo-paypal"} title={"BirrLink Payments"} subTitle={"BirrLink Payments"}/>
            <ServiceList iconName={"logo-paypal"} title={"YagoutPay payments"} subTitle={"YagoutPay payments"}/>
            <ServiceList iconName={"logo-paypal"} title={"Booking Technologies"} subTitle={"Booking Technologies"}/>
            <ServiceList iconName={"logo-paypal"} title={"Chip-Chip Payment"} subTitle={"Chip-Chip Payment"}/>
            <ServiceList iconName={"logo-paypal"} title={"Abronet Digital Equb"} subTitle={"Abronet Digital Equb"}/>
        </ScrollView>
        </>

    )
}