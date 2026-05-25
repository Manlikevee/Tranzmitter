import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const AlertDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const handleDelete = () => {
    Alert.alert("Delete Alert", "Are you sure you want to delete this alert?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // call delete API here
          Alert.alert("Deleted", `Alert ${id} removed`);
          router.replace("/(alerts)");
        },
      },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.title}>Alert Details</Text>

      <Text style={styles.label}>ID: {id}</Text>
      <Text style={styles.label}>Type: Banditry / attack</Text>
      <Text style={styles.label}>Description: Armed attackers or bandits</Text>

      <View style={styles.actions}>
        <Button
          title="Edit"
          onPress={() => router.push(`/(alerts)/edit/${id}`)}
        />

        <Button title="Delete" color="red" onPress={handleDelete} />
      </View>
    </ThemedView>
  );
};

export default AlertDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  label: {
    fontSize: 16,
  },
  actions: {
    marginTop: 20,
    gap: 10,
  },
});
