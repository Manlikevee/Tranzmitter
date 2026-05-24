import logo from "@/assets/emergencylogo.png";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const LogoComponent = ({ width, height }) => {
  return (
    <Image
      source={logo}
      style={{
        width: width || 30,
        height: height || 30,
        marginRight: 10,
        paddingBottom: 12,
      }}
      resizeMode="contain"
    />
  );
};

export default LogoComponent;

const styles = StyleSheet.create({});
