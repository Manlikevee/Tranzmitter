import { StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
const PageHeader = ({
  title,
  subtitle,
  align = "left",
  titleSize = 16,
  subtitleSize = 12.8,
}) => {
  return (
    <ThemedView
      style={[
        styles.container,
        { alignItems: align === "center" ? "center" : "flex-start" },
      ]}
    >
      <ThemedText
        style={styles.title}
        fontSize={titleSize}
        fontFamily="InstrumentSans_600SemiBold"
        lineHeight={titleSize * 1.25}
      >
        {title}
      </ThemedText>

      {subtitle ? (
        <ThemedText
          style={styles.subtitle}
          fontSize={subtitleSize}
          fontFamily="InstrumentSans_400Regular"
          lineHeight={subtitleSize * 1.15}
        >
          {subtitle}
        </ThemedText>
      ) : null}
    </ThemedView>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    backgroundColor: "transparent",
  },
  title: {
    textTransform: "uppercase",
    lineHeight: 20,
  },
  subtitle: {
    marginTop: 1,
    lineHeight: 23,
    opacity: 0.8,
  },
});
