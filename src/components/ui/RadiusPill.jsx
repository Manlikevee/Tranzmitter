import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const RadiusPill = ({ radius, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }} activeOpacity={0.7}>
      <ThemedView
        lightColor={selected ? "#FF383C" : "#AAAAAA14"}
        darkColor={selected ? "#FF383C" : "#7676802E"}
        lightBorderColor={selected ? "#FF383C" : "#7676802E"}
        darkBorderColor={selected ? "#FF383C" : "#7676802E"}
        borderWidth={0.8}
        style={{
          padding: 10,
          borderRadius: 8,
          alignItems: "center",
          borderWidth: 0.8,
        }}
      >
        <ThemedText
          lightColor={selected ? "white" : "#767680"}
          fontSize={15}
          fontFamily="Geist_600SemiBold"
        >
          {" "}
          {radius}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default RadiusPill;

const styles = StyleSheet.create({});
