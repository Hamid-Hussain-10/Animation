import React, { useRef } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Card from "./card";
import SlideUpModal from "./slideUpModal";

export default function Index() {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
            <Text style={styles.text}>Press Me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <Card />
      <SlideUpModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#585c4a",
    padding: 20,
    marginTop: 50,
    borderRadius: 12,
    shadowColor: "#575454",
    shadowOffset: { width: 8, height: 11 },
    shadowOpacity: 0.6,
    elevation: 4,
  },
  text: { color: "#fff", fontWeight: "bold" },
});
