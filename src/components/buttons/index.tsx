import React from "react";
import { View, StyleSheet } from "react-native";

// Importing buttons...
import RestartButton from "./RestartButton";
import OpenCookie from "./OpenCookie";

interface ButtonsProps {
  openCookie: () => void;
  resetCookie: () => void;
  isCookieOpen: boolean;
}

export default function Buttons({ openCookie, resetCookie, isCookieOpen }: ButtonsProps) {
  return (
    <View style={styles.container}>
      <OpenCookie openCookie={openCookie} isCookieOpen={isCookieOpen} />
      <RestartButton resetCookie={resetCookie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    top: 10,
  },
});