import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

const AlertTitle = ({ title }) => {
  return (
    <View>
      <ThemedText
        fontFamily="Geist_600SemiBold"
        lightColor="black"
        fontSize={16}
        lineHeight={18}
        style={styles.title}
      >
        {title}
      </ThemedText>
    </View>
  );
};

export default AlertTitle;

const styles = StyleSheet.create({});
