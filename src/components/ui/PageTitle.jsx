import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import { getRedactedSubtitle } from "../util/helpers";

const PageTitle = ({ title, subtitle, bottomgap, nototp }) => {
  const safeSubtitle = getRedactedSubtitle(subtitle);
  const subtext = `${nototp ? "" : "We sent a 6 digit code to the email "} ${safeSubtitle}`;
  return (
    <View style={{ marginBottom: bottomgap, gap: 4 }}>
      <ThemedText
        fontSize={18}
        lineHeight={28}
        fontFamily="Geist_500Medium"
        style={styles.title}
      >
        {title}
      </ThemedText>
      {subtitle && (
        <ThemedText
          fontSize={13}
          lineHeight={20}
          fontFamily="Geist_400Regular"
          style={styles.subtitle}
        >
          {subtext}
        </ThemedText>
      )}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  title: {},
});
