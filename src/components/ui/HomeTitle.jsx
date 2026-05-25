import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import IconBadge from "./IconBadge";

const HomeTitle = ({ image, title, subtitle, service_content }) => {
  return (
    <View style={styles.contentcontainer}>
      <IconBadge
        source={service_content.icon}
        backgroundColor={service_content.bg}
      />
      {/* <View style={styles.imagecontainer}>{image}</View> */}
      <View style={styles.container}>
        <ThemedText
          fontFamily="Geist_600SemiBold"
          lightColor="black"
          fontSize={16}
          lineHeight={18}
          style={styles.title}
        >
          {title}
        </ThemedText>
        <ThemedText
          fontFamily="Geist_400Regular"
          lightColor="#3C3C4399"
          style={styles.subtitle}
          fontSize={14}
          lineHeight={17}
        >
          {subtitle}
        </ThemedText>
      </View>
    </View>
  );
};

export default HomeTitle;

const styles = StyleSheet.create({
  contentcontainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    // gap: 2,
    flexDirection: "column",
  },
  imagecontainer: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
  },
  // title: {
  //   fontSize: 18,
  // },
  // subtitle: {
  //   fontSize: 14,
  // },
});
