import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface RestartButtonProps {
  resetCookie: () => void;
}

export default function RestartButton({ resetCookie }: RestartButtonProps) {
  const restart = () => {
    resetCookie();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={restart}>
        <Text style={styles.text}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 25,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "rgba(232,232,232,0.43)",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },
});