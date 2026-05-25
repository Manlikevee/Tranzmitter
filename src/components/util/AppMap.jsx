import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const AppMap = ({
  latitude = 37.78825,
  longitude = -122.4324,
  height = 180,
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <MapView
        // mapType="satellite"
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0321,
        }}
      />
    </View>
  );
};

export default AppMap;

const styles = StyleSheet.create({
  container: {
    borderRadius: 9,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
