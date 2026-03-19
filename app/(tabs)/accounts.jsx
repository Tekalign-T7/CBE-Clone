import { Text, View ,Image,StyleSheet, ScrollView,} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoHeader from "../components/infoheader";
import List from "../components/list";


export default function Account() {
  const padding=useSafeAreaInsets()

  return(
    <ScrollView>
      <View style={{paddingTop:padding.top*0.002,}}>
       <InfoHeader/>
        <View style={{alignItems:"center",height:60}}>
            <Text style={{color:"gray",fontSize:20,fontWeight:"bold",}}><Text style={{color:"green"}}>.</Text>...</Text>
            <Text style={{color:"#651E9B"}}>Payments.</Text>
        </View>
        <View style={styles.container}>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"1200"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"250"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"500"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"85"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"3000"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"400"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"15"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"500"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"720"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"100"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"150"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"200"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"1000"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"60"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"2250"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"450"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"310"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"500"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"800"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"120"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"950"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"55"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"200"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"1400"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"670"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"400"}/>
          <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"1000"}/>
          <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"250"}/>
          <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"180"}/>
          <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"2100"}/>
        </View>
     </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent: "center",
    paddingBottom:15,
    gap:10,
    alignItems: "center",
    backgroundColor:"#F2F2F2",
    
  },
  text:{
    fontSize:35,
    fontWeight:"bold",
    color:"#651E9B"
  },
  button:{
    fontSize:25,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#BA8E4F",
    borderRadius:50,
    height:50,
    width:50,
  },
  copyrightText:{
    marginTop:"38%",
    color:"#651E9B"
  }
})