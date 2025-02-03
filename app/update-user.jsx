import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { updateUser } from "../api";

export default function UpdateUser() {
  const router = useRouter();
  const params = useLocalSearchParams(); // Use useLocalSearchParams for query params
  const userObj = JSON.parse(params.user); // Parse the user parameter

  const [userData, setUserData] = useState({
    name: userObj.name,
    age: userObj.age.toString(),
    DOB: userObj.DOB,
    email: userObj.email,
  });

  const handleUpdateUser = async () => {
    await updateUser(userObj._id, userData); // Update user in the backend
    router.replace("/"); // Navigate back to the home screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={userData.name}
        onChangeText={(text) => setUserData({ ...userData, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={userData.age}
        keyboardType="numeric"
        onChangeText={(text) => setUserData({ ...userData, age: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="DOB"
        value={userData.DOB}
        onChangeText={(text) => setUserData({ ...userData, DOB: text })}
        style={styles.input}
      />
      <Button title="Update User" onPress={handleUpdateUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5 },
});
