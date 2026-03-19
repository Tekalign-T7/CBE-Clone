import { Text, View ,Image,StyleSheet,ScrollView} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import List from "../components/list";
export default function recent() {
  const padding=useSafeAreaInsets()
  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={{color:"#651E9B",fontSize:15,marginTop:5}}>Recent Transactions</Text>
        <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"430"}/>
        <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"1500"}/>
        <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"200"}/>
        <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"85"}/>
        <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"1250"}/>
        <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"300"}/>
        <List deposited={false} action={"Withdrawal"} method={"ATM Cash Withdrawal"} amount={"200"}/>
        <List deposited={true} action={"Deposit"} method={"Mobile Debit"} amount={"620"}/>
        <List deposited={false} action={"Withdrawal"} method={"Mobile Debit"} amount={"90"}/>
        <List deposited={true} action={"Deposit"} method={"ATM Cash Withdrawal"} amount={"2500"}/>
      </View>
    </ScrollView>

  )
}


const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor:"#F2F2F2",
    paddingBottom:15,
    gap:10,
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