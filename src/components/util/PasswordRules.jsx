import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet, View } from "react-native";

const rules = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (pw) => pw.length >= 8,
  },
  {
    id: "uppercase",
    label: "One uppercase letter",
    test: (pw) => /[A-Z]/.test(pw),
  },
  {
    id: "number",
    label: "One number",
    test: (pw) => /[0-9]/.test(pw),
  },
  {
    id: "special",
    label: "One special character (e.g. !@#$%)",
    test: (pw) => /[!@#$%^&*(),.?":{}|<>]/.test(pw),
  },
];

const ACTIVE_COLOR = "#FF4245";

export function PasswordRules({ password = "" }) {
  return (
    <View style={styles.wrapper}>
      {rules.map((rule) => {
        const isActive = rule.test(password);

        return (
          <ThemedView
            key={rule.id}
            type="background"
            lightColor="#ffffff"
            darkColor="#1a1a1a"
            style={[
              styles.chip,
              {
                borderColor: isActive ? ACTIVE_COLOR : "#d1d1d1",
                backgroundColor: isActive ? `${ACTIVE_COLOR}15` : "transparent",
              },
            ]}
          >
            <ThemedText
              fontSize={12}
              lightColor={isActive ? ACTIVE_COLOR : "#666"}
              darkColor={isActive ? ACTIVE_COLOR : "#aaa"}
              fontFamily="Geist_400Regular"
            >
              {rule.label}
            </ThemedText>
          </ThemedView>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  chip: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: "dashed",
  },
});
