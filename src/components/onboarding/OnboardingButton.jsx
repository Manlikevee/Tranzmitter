import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function OnboardingButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: "#FF3B3B",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Geist_600SemiBold",
  },
});
