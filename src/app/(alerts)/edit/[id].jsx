import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";

const EditAlertScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // mock existing data (replace with API later)
  const [title, setTitle] = useState("Banditry / attack");
  const [description, setDescription] = useState("Armed attackers or bandits");

  const handleSave = () => {
    // call API here
    Alert.alert("Updated", `Alert ${id} updated successfully`);

    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Alert title"
        style={styles.input}
      />

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={styles.input}
        multiline
      />

      <Button title="Save Changes" onPress={handleSave} />
    </ThemedView>
  );
};

export default EditAlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
});
