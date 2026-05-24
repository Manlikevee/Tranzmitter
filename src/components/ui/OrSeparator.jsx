import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const OrSeparator = ({ text }) => {
  return (
    <View lightColor="" style={styles.container}>
      <ThemedView
        lightColor="#E2E2E2"
        darkColor="#e2e2e2da"
        style={styles.line}
      />
      <ThemedText
        style={styles.text}
        fontFamily="Geist_400Regular"
        fontSize={14}
      >
        {text || "OR"}
      </ThemedText>
      <ThemedView
        lightColor="#E2E2E2"
        darkColor="#e2e2e2da"
        style={styles.line}
      />
    </View>
  );
};

export default OrSeparator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 7,
    backgroundColor: "transparent",
  },
  line: {
    flex: 1,
    height: 1,
    // backgroundColor: "#EDF1F3",
  },
  text: {
    marginHorizontal: 10,
    textAlign: "center",
    lineHeight: 22,
    color: "#777777",
  },
});
