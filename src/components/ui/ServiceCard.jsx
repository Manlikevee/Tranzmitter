import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "../themed-view";
import IconBadge from "./IconBadge";
import ServiceText from "./ServiceText";

const ServiceCard = ({ title, subtitle, icon, bg }) => {
  return (
    <ThemedView
      style={styles.container}
      lightColor="#AAAAAA14"
      darkColor="#7676802E"
      borderRadius={10}
      padding={16}
      borderWidth={0.8}
      lightBorderColor="#AAAAAA14"
      darkBorderColor="#7676802E"
    >
      <TouchableOpacity
        style={{
          flex: 1,
          gap: 12,
        }}
        activeOpacity={0.7}
        onPress={() => {
          router.push("/(alerts)/create");
        }}
      >
        <IconBadge source={icon} backgroundColor={bg} />

        <ServiceText title={title} subtitle={subtitle} />
      </TouchableOpacity>
    </ThemedView>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
    minHeight: 160, // keeps equal height
  },
});
