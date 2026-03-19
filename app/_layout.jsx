import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <Stack>
      <StatusBar value="auto"/>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
      <Stack.Screen name="(services)" options={{headerShown:false}}/>
    </Stack>
  );
}
