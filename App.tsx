import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.text}>Left</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>Right</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
  },
  button: {
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
