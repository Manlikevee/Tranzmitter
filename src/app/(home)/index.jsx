import { ThemedView } from "@/components/themed-view";
import InputComponent from "@/components/ui/InputComponent";
import ServiceCard from "@/components/ui/ServiceCard";
import { WebBadge } from "@/components/web-badge";
import { MaxContentWidth } from "@/constants/theme";
import { useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const services = [
  {
    id: "1",
    title: "Banditry / attack",
    subtitle: "Armed attackers or bandits",
    icon: require("@/assets/services/ico1.png"),
    bg: "#FAC70E14",
  },
  {
    id: "2",
    title: "Fire emergency",
    subtitle: "Fire outbreaks or smoke alerts",
    icon: require("@/assets/services/ico2.png"),
    bg: "#FF6C6C14",
  },
  {
    id: "3",
    title: "Medical emergency",
    subtitle: "Health or injury situations",
    icon: require("@/assets/services/ico3.png"),
    bg: "#D06E0C14",
  },
  {
    id: "4",
    title: "Accident",
    subtitle: "Road or workplace accidents",
    icon: require("@/assets/services/ico2.png"),
    bg: "#FFF4E5",
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        <FlatList
          data={services}
          keyExtractor={(item) => item.id}
          numColumns={2}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          ListHeaderComponent={
            <InputComponent
              setInputState={setSearch}
              inputState={search}
              placeholder="Search...e.g robbery, fire, bandi..."
              icontype="magnifier"
              borderRadius={10}
              borderWidth={0.8}
              bgLightColor="#7676801F"
              bgDarkColor="#7676802E"
              lightBorderColor="#7676801F"
              darkBorderColor="#7676802E"
            />
          }
          renderItem={({ item }) => (
            <ServiceCard
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              bg={item.bg}
            />
          )}
        />

        <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
          />
        </View>
        {Platform.OS === "web" && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 10,
    maxWidth: MaxContentWidth,
  },
  list: {
    paddingBottom: 24,
    gap: 12,
  },
  row: {
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 1,
  },
  container: {
    flex: 1,
    // height: 300,
  },
  map: {
    width: "100%",
    height: 180,
  },
});
