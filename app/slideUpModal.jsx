import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function SlideUpModal() {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  const openModal = () => {
    setVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: SCREEN_HEIGHT,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal} style={styles.openButton}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="none">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={closeModal}
        >
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <Text style={styles.modalTitle}>👋 Hello from Modal!</Text>
            <Text style={styles.modalText}>
              This modal slid up from the bottom.
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ced4e0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 80,
  },
  openButton: {
    backgroundColor: "#720562",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#654308",
    padding: 15,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "600",
    marginBottom: 10,
  },
  modalText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#073467",
    padding: 12,
    borderRadius: 10,
  },
});
