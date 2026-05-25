import { Image, StyleSheet, View } from "react-native";

const IconBadge = ({
  source,
  backgroundColor = "#FFEAEA",
  size = 19,
  padding = 19,
  borderRadius = 10,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          padding,
          borderRadius,
        },
      ]}
    >
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 46,
    height: 46,
  },
});

export default IconBadge;
