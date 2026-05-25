import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import ImageColors from "react-native-image-colors";

const lightenColor = (hex, amount = 0.85) => {
  hex = hex.replace("#", "");
  const num = parseInt(hex, 16);

  let r = (num >> 16) + Math.round((255 - (num >> 16)) * amount);
  let g = ((num >> 8) & 255) + Math.round((255 - ((num >> 8) & 255)) * amount);
  let b = (num & 255) + Math.round((255 - (num & 255)) * amount);

  return `rgb(${r}, ${g}, ${b})`;
};

const AutoIconCard = ({ source, size = 28, padding = 16 }) => {
  const [color, setColor] = useState("#FF383C");

  useEffect(() => {
    const getColor = async () => {
      try {
        const result = await ImageColors.getColors(
          Image.resolveAssetSource(source).uri,
        );

        const detected = result.primary || result.dominant || result.average;

        if (detected) setColor(detected);
      } catch (e) {}
    };

    getColor();
  }, [source]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: lightenColor(color), padding },
      ]}
    >
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          tintColor: color,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AutoIconCard;
