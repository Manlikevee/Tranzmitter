import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Redirect href="/(alerts)/create" />
      <Text>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
