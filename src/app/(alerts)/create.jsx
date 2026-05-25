import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AlertTitle from "@/components/ui/AlertTitle";
import BlankBottomSheet from "@/components/ui/BlankBottomSheet";
import CustomButton from "@/components/ui/CustomButton";
import HomeTitle from "@/components/ui/HomeTitle";
import InputComponent from "@/components/ui/InputComponent";
import RadiusPill from "@/components/ui/RadiusPill";
import AppMap from "@/components/util/AppMap";
import BackButton from "@/components/util/BackButton";
import NotificationPill from "@/components/util/NotificationPill";
import { title_services } from "@/constants/onboardingData";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const create = () => {
  const inputProps = {
    borderRadius: 10,
    borderWidth: 0.8,
    bgLightColor: "#AAAAAA14",
    bgDarkColor: "#7676802E",
    lightBorderColor: "#AAAAAA14",
    darkBorderColor: "#7676802E",
  };

  const radiusOptions = ["500M", "2KM", "5 KM", "10 KM"];
  const [selectedRadius, setSelectedRadius] = useState("10 KM");
  const [search, setSearch] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const handleRadiusSelect = (radius) => {
    setSelectedRadius(radius);
  };

  const bottomSheetRef = useRef(null);

  const openSheet = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
            // flex: 1,
            padding: 16,
            gap: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <BackButton />

          <HomeTitle
            title="Banditry / attack"
            nototp={true}
            subtitle="Armed attackers or bandits"
            service_content={title_services[1]}
          />

          <AlertTitle title="Notify people within" />

          <View style={styles.pillrow}>
            {radiusOptions.map((radius) => (
              <RadiusPill
                key={radius}
                radius={radius}
                selected={selectedRadius === radius}
                onPress={() => handleRadiusSelect(radius)}
              />
            ))}
          </View>
          <View>
            <InputComponent
              {...inputProps}
              // label="Location"
              placeholder="e.g Lagos, New York, London"
              inputState={search}
              setInputState={setSearch}
            />

            <CustomButton
              title="Use my current location"
              iconName="location-outline"
              lightColor="#F2F2F7"
              darkColor="#2C2C2E"
              lighttextColor="#000"
              darktextColor="#fff"
              onPress={() => {}}
            />
          </View>

          <AppMap latitude={6.618781} longitude={3.319255} />

          <NotificationPill
            alert_type="info"
            // title="Emergency Alert Notice"
            subtitle="This will alert everyone within 1km of your location. Only use for real emergencies."
          />

          <InputComponent
            {...inputProps}
            label="Enter additional info (optional)"
            placeholder="Any extra details you want to add..."
            inputState={extraInfo}
            setInputState={setExtraInfo}
            multiline
            numberOfLines={7}
            istextarea
            maxLength={1000}
          />

          <CustomButton
            title="Send alert now"
            onPress={() => {
              openSheet();
            }}
          />

          <CustomButton
            title="Schedule for later"
            lightColor="#F2F2F7"
            darkColor="#2C2C2E"
            lighttextColor="#000"
            darktextColor="#fff"
            onPress={() => {
              router.replace("/(home)");
            }}
          />

          <BlankBottomSheet
            ref={bottomSheetRef}
            footerComponent={
              <ThemedView
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 16,
                  marginHorizontal: 5,
                  paddingBottom: 22,
                }}
              >
                <ThemedText>
                  By using this feature, you confirm that you are in a real
                </ThemedText>
              </ThemedView>
            }
          >
            <ThemedText>
              Misuse of the emergency alert feature can lead to penalties. Only
              use it for genuine emergencies to ensure the safety of yourself
              and others.
            </ThemedText>
          </BlankBottomSheet>

          <ThemedView
            style={{ height: 104, flex: 1, backgroundColor: "transparent" }}
          ></ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    gap: 20,
  },
  pillrow: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
});
