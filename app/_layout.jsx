import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <Stack>
      <StatusBar value="auto" backgroundColor="#651E9B"/>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
  );
}
