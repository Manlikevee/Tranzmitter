import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

const NoAccount = ({
  text = "Don't have an account?",
  actionText = "Sign up",
  href = "/(auth)/(register)",
}) => {
  return (
    <View style={styles.noaccountcontainer}>
      <ThemedText
        fontSize={15}
        lineHeight={20}
        fontFamily="Geist_400Regular"
        lightColor="#3C3C4399"
        darkColor="#EBEBF5B2"
      >
        {text}{" "}
      </ThemedText>

      <Link href={href} style={styles.signupLink}>
        <ThemedText
          fontSize={15}
          lineHeight={20}
          fontFamily="Geist_600SemiBold"
          lightColor="#000000"
          darkColor="#fff"
        >
          {actionText}
        </ThemedText>
      </Link>
    </View>
  );
};

export default NoAccount;

const styles = StyleSheet.create({
  noaccountcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
    gap: 3,
  },
  signupLink: {
    fontFamily: "Geist_600SemiBold",
    fontSize: 15,
    lineHeight: 20,
  },
});
