import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Button from "@/components/Button";

interface InlineButtonsProps {
  buttons: {
    label: string;
    onPress: () => void;
    theme?: "primary" | "secondary" | "default";
  }[];
  spacing?: number;
}

export default function InlineButtons({
  buttons,
  spacing = 40,
}: InlineButtonsProps) {
  return (
    <View style={[styles.container, { gap: spacing }]}>
      {buttons.map((btn, index) => (
        <View key={index} style={styles.flexButton}>
          <Button label={btn.label} onPress={btn.onPress} theme={btn.theme} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    width: "100%",
    height: 68,
  },
  flexButton: {
    flex: 1,
  },
});
