import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  EntryAnimationsValues,
  ExitAnimationsValues,
  LayoutAnimation,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

function ExitAnimation(values: ExitAnimationsValues): LayoutAnimation {
  "worklet";
  return {
    initialValues: {
      width: values.currentWidth,
    },
    animations: {
      width: withTiming(0, { duration: 1000 }),
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
      width: withTiming(values.targetWidth, { duration: 1000 }),
    },
  };
}

const availableWidth = Dimensions.get("window").width - 32 - 10;
export default function App() {
  const [isOnlyRight, setIsOnlyRight] = useState(true);

  const leftStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isOnlyRight ? 0 : availableWidth / 2),
    };
  }, [isOnlyRight]);

  const rightStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(isOnlyRight ? availableWidth : availableWidth / 2),
    };
  }, [isOnlyRight]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Animated.View style={[styles.button, leftStyle]}>
          <Text style={styles.text} numberOfLines={1}>
            Left
          </Text>
        </Animated.View>
        <Animated.View style={[styles.button, rightStyle]}>
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
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
