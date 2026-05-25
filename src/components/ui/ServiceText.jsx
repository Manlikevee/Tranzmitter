import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

const ServiceText = ({ title, subtitle }) => {
  return (
    <View
      style={{
        gap: 4,
      }}
    >
      {title && (
        <ThemedText
          fontSize={16}
          fontFamily="Geist_600SemiBold"
          style={styles.title}
        >
          {title}
        </ThemedText>
      )}
      {/* <ThemedText
        fontSize={16}
        fontFamily="Geist_600SemiBold"
        style={styles.title}
      >
        {title}
      </ThemedText> */}
      <ThemedText
        fontSize={14}
        lineHeight={20}
        lightColor="#3C3C4399"
        numberOfLines={2}
        fontFamily="InstrumentSans_400Regular"
        style={styles.subtitle}
      >
        {subtitle}
      </ThemedText>
    </View>
  );
};

export default ServiceText;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
  },
});
