import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [isOnlyRight, setIsOnlyRight] = useState(true);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {isOnlyRight ? null : (
          <View style={styles.button}>
            <Text style={styles.text}>Left</Text>
          </View>
        )}
        <View style={styles.button}>
          <Text style={styles.text}>Right</Text>
        </View>
      </View>
      <Button title="Toggle" onPress={() => setIsOnlyRight(!isOnlyRight)} />
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
