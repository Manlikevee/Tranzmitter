import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export function SocialAuthButton({ icon, text, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <ThemedView
        type="background"
        lightColor="#F0F1F2"
        darkColor="#7676802E"
        lightBorderColor="#F0F1F2"
        darkBorderColor="#7676802E"
        borderWidth={0.8}
        style={[styles.button, style]}
      >
        <Image source={icon} style={styles.sociallogo} resizeMode="contain" />

        <ThemedText
          lightColor="#171717"
          darkColor="#777777"
          fontFamily="InstrumentSans_400Regular"
          style={styles.text}
        >
          {text}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    justifyContent: "center",
    minHeight: 50,
  },

  sociallogo: {
    width: 20,
    height: 20,
  },

  text: {
    fontSize: 14,
    textAlign: "center",
  },
});
