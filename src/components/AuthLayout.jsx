import { ThemedView } from "@/components/themed-view";
import { LinearGradient } from "expo-linear-gradient";
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export function AuthLayout({
  children,
  spacestart = 0,
  showGradient = false,
  gradientColors = ["#ff383b33", "transparent"],

  Logo,
  Header,

  spacing = 17,
  paddingHorizontal = 15,
}) {
  return (
    <ThemedView
      darkColor="#000000"
      lightColor="white"
      type="background"
      style={{ flex: 1 }}
    >
      {spacestart && <View style={{ height: spacestart }} />}

      {showGradient && (
        <LinearGradient
          colors={gradientColors}
          style={styles.topGradient}
          pointerEvents="none"
        />
      )}

      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.container,
              {
                gap: spacing,
                paddingHorizontal,
              },
            ]}
            style={{ flex: 1 }}
          >
            {Logo && (
              <View>
                <Logo />
              </View>
            )}

            {Header && <Header />}

            {children}
            <View style={{ height: 20 }} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    gap: 17,

    paddingHorizontal: 15,
  },
  topGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.2, // 10% of screen height
    zIndex: 1,
  },
  forgotpassword: {
    // textAlign: "right",
    marginTop: -10,
    fontSize: 14,
    lineHeight: 20,
  },
  forgotpasswordtext: {
    fontFamily: "Geist_400Regular",
    textDecorationLine: "underline",
    // textDecorationColor: "#3C3C4399",
  },
});
