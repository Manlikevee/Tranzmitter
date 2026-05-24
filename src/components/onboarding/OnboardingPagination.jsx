import { StyleSheet, View } from "react-native";

export default function OnboardingPagination({ currentIndex, total }) {
  return (
    <View style={styles.container}>
      {[...Array(total)].map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 40,
  },

  dot: {
    width: 55,
    height: 6,
    borderRadius: 10,
    backgroundColor: "#ffffff55",
    marginRight: 8,
  },

  activeDot: {
    backgroundColor: "#FF3B3B",
  },
});
