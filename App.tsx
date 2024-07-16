import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Animated, {
  EntryAnimationsValues,
  ExitAnimationsValues,
  LayoutAnimation,
  LinearTransition,
  withTiming,
} from "react-native-reanimated";

function ExitAnimation(values: ExitAnimationsValues): LayoutAnimation {
  "worklet";
  return {
    initialValues: {
      width: values.currentWidth,
    },
    animations: {
      width: withTiming(0, { duration: 5000 }),
    },
  };
}

function EnterAnimation(values: EntryAnimationsValues): LayoutAnimation {
  "worklet";
  return {
    initialValues: {
      width: 0,
    },
    animations: {
      width: withTiming(values.targetWidth, { duration: 5000 }),
    },
  };
}

export default function App() {
  const [isOnlyRight, setIsOnlyRight] = useState(true);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {isOnlyRight ? null : (
          <Animated.View
            exiting={ExitAnimation}
            entering={EnterAnimation}
            style={styles.button}
          >
            <Text style={styles.text}>Left</Text>
          </Animated.View>
        )}
        <Animated.View
          style={styles.button}
          layout={LinearTransition.duration(5000)}
        >
          <Text style={styles.text}>Right</Text>
        </Animated.View>
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
