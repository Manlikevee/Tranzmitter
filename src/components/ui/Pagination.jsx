import { Dimensions, StyleSheet, View } from "react-native";
import { ThemedView } from "../themed-view";

const { width } = Dimensions.get("window");
const maxWidth = width / 2.7;

export default function Pagination({ currentIndex = 0, total = 1 }) {
  const gap = 6;

  const pillWidth = total > 0 ? (maxWidth - gap * (total - 1)) / total : 10;

  return (
    <ThemedView style={styles.wrapper}>
      <View style={[styles.container, { width: maxWidth }]}>
        {Array.from({ length: total }).map((_, index) => {
          const isCompleted = index < currentIndex; // ✅ FIX HERE

          return (
            <View
              key={index}
              style={[
                styles.pill,
                {
                  width: pillWidth,
                  marginRight: index === total - 1 ? 0 : gap,
                  backgroundColor: isCompleted ? "#FF383C" : "#EDEDED",
                },
              ]}
            />
          );
        })}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  pill: {
    height: 4,
    borderRadius: 999,
  },
});
