import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../themed-text";

const CustomButton = ({
  onPress,
  title,
  disabled = false,
  helperText,
  lightColor = "#FF383C",
  darkColor = "#FF383C",
  lighttextColor = "#fff",
  darktextColor = "#fff",

  // optional icon
  iconName,
  iconSize = 18,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const backgroundColor = isDark ? darkColor : lightColor;
  const iconColor = isDark ? darktextColor : lighttextColor;

  const handlePress = () => {
    if (disabled) {
      if (helperText) Alert.alert(helperText);
      return;
    }

    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={[
        styles.button,
        { backgroundColor },
        disabled && styles.disabledButton,
      ]}
    >
      <View style={styles.content}>
        {iconName && (
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
        )}

        <ThemedText
          lightColor={lighttextColor}
          darkColor={darktextColor}
          style={styles.buttonText}
        >
          {title}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 13,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    minHeight: 50,
    justifyContent: "center",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  disabledButton: {
    opacity: 0.45,
  },

  buttonText: {
    fontSize: 15.5,
    fontFamily: "Geist_500Medium",
    lineHeight: 18,
  },
});
