import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import Pagination from "../ui/Pagination";

const BackButton = ({ onPress, totalpages, currentpage }) => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack();

  // IMPORTANT: removes it completely from UI + layout
  if (!canGoBack) return null;

  const isDark = colorScheme === "dark";

  const iconColor = isDark ? "#ffffff" : "#111827";
  const bgColor = isDark ? "#1f2937" : "#f3f4f6";

  const handlePress = () => {
    console.log("Back button pressed");
    if (onPress) return onPress();
    router.back();
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,

          { backgroundColor: bgColor, opacity: pressed ? 0.7 : 1 },
        ]}
      >
        <Ionicons name="chevron-back" size={22} color={iconColor} />
      </Pressable>
      {totalpages > 1 && currentpage > 0 && (
        <Pagination total={totalpages} currentIndex={currentpage} />
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});
