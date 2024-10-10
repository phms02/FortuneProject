import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface OpenCookieProps {
  openCookie: () => void;
  isCookieOpen: boolean;
}

export default function OpenCookie({ openCookie, isCookieOpen }: OpenCookieProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={isCookieOpen}
        onPress={openCookie}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Open your cookie!</Text>
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
    backgroundColor: "#FF2E63",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
});