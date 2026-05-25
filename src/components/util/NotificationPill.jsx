import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import IconBadge from "../ui/IconBadge";

const NotificationPill = ({ title, subtitle, alert_type = "info" }) => {
  const alertStyles = {
    info: {
      icon: require("@/assets/info.png"),
      iconBg: "#FFA60014",
      color: "#D1931E",
      lightBg: "#FFFDF5",
      darkBg: "#2B2412",
      border: "#FFCC0030",
    },

    error: {
      icon: require("@/assets/warning.png"),
      iconBg: "#FF6C6C14",
      color: "#FF383C",
      lightBg: "#FFF5F5",
      darkBg: "#2A1515",
      border: "#FF383C30",
    },

    success: {
      icon: require("@/assets/success.png"),
      iconBg: "#15FF0014",
      color: "#34C759",
      lightBg: "#F4FFF6",
      darkBg: "#14241A",
      border: "#34C75930",
    },
  };

  const service_content = alertStyles[alert_type] || alertStyles.info;

  return (
    <ThemedView
      //   borderWidth={0}
      lightColor={service_content.lightBg}
      darkColor={service_content.darkBg}
      lightBorderColor={service_content.border}
      darkBorderColor={service_content.border}
      style={styles.contentcontainer}
    >
      <IconBadge
        source={service_content.icon}
        backgroundColor={service_content.iconBg}
      />

      <View style={styles.container}>
        {title && (
          <ThemedText
            fontFamily="Geist_600SemiBold"
            lightColor={service_content.color}
            darkColor={service_content.color}
            fontSize={16}
            lineHeight={18}
          >
            {title}
          </ThemedText>
        )}
        {/* <ThemedText
          fontFamily="Geist_600SemiBold"
          lightColor={service_content.color}
          darkColor={service_content.color}
          fontSize={16}
          lineHeight={18}
        >
          {title}
        </ThemedText> */}

        <ThemedText
          fontFamily="Geist_400Regular"
          lightColor={service_content.color}
          darkColor={service_content.color}
          fontSize={14}
          lineHeight={17}
        >
          {subtitle}
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default NotificationPill;

const styles = StyleSheet.create({
  contentcontainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
    padding: 14,
    borderRadius: 14,
  },

  container: {
    flex: 1,
  },
});
