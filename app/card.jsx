import { Animated, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useRef } from "react";

const Card = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { opacity: fadeIn }]}>
        <Image
          source={require("../assets/images/1.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome To The Card</Text>
        <Text style={styles.subtitle}>Animated Card</Text>
        <Text style={styles.subtitle}>Card</Text>
      </Animated.View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202b45",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 40,
  },
  card: {
    width: "90%",
    backgroundColor: "#766409",
    padding: 20,
    borderRadius: 25,
    shadowColor: "#ffffff",
    shadowOpacity: 0.5,
    shadowOffset: { width: 10, height: 14 },
    shadowRadius: 16,
    elevation: 8,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 40,
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
  },
});
