import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { createUser } from "../api";

export default function CreateUser() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    DOB: "",
    email: "",
    password: "",
  });

  const handleCreateUser = async () => {
    await createUser(userData);
    router.replace("/"); // Redirect to home screen after creating user
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => setUserData({ ...userData, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={(text) => setUserData({ ...userData, age: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="DOB"
        onChangeText={(text) => setUserData({ ...userData, DOB: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setUserData({ ...userData, password: text })}
        style={styles.input}
      />
      <Button title="Create User" onPress={handleCreateUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5 },
});