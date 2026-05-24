import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import OnboardingButton from "./OnboardingButton";
import OnboardingPagination from "./OnboardingPagination";

export default function OnboardingSlide({
  item,
  currentIndex,
  totalSlides,
  onNext,
  onSkip,
}) {
  return (
    <ImageBackground
      source={item.image}
      style={styles.container}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(209, 101, 101, 0)", "#7B16FF00", "black"]}
        style={styles.overlay}
      />

      {/* Skip */}
      <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Bottom Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <OnboardingPagination currentIndex={currentIndex} total={totalSlides} />

        <OnboardingButton title={item.buttonText} onPress={onNext} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFill,
  },

  skipButton: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },

  skipText: {
    fontFamily: "Geist_600SemiBold",
    fontSize: 14,
  },

  content: {
    padding: 24,
    paddingBottom: 50,
  },

  title: {
    color: "#fff",
    fontSize: 48,
    lineHeight: 52,
    fontFamily: "Geist_700Bold",
    textTransform: "capitalize",
  },
});
