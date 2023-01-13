import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { } from 'stream-chat-expo'
import { StreamChat } from "stream-chat";

export default function App() {
  const client = StreamChat.getInstance("a9n9yt3mjp5w");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
