import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

// Components imports...
import CookieImage from "./components/CookieImage";
import Buttons from "./components/buttons";

// Utils imports...
import phrases from "./utils/phrases";

export default function App() {
  const [cookieImage, setCookieImage] = useState(require("../assets/closed-cookie.png"));
  const [phrase, setPhrase] = useState<string>("");
  const [isCookieOpen, setIsCookieOpen] = useState<boolean>(false);

  const openCookie = () => {
    const randomPhraseIndex: number = Math.floor(Math.random() * phrases.length);

    setPhrase(phrases[randomPhraseIndex]);
    setCookieImage(require("../assets/opened-cookie.png"));
    setIsCookieOpen(true);
  };

  const resetCookie = () => {
    setCookieImage(require("../assets/closed-cookie.png"));
    setPhrase("");
    setIsCookieOpen(false);
  };

  return (
    <LinearGradient colors={["#8E2DE2", "#4A00E0"]} style={styles.container}>
      <StatusBar style="auto" />
      <CookieImage cookieImage={cookieImage} />
      <Text style={styles.phrase}>{phrase}</Text>
      <Buttons openCookie={openCookie} resetCookie={resetCookie} isCookieOpen={isCookieOpen} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  phrase: {
    paddingTop: 20,
    paddingHorizontal: 25,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FFE900",
  },
});