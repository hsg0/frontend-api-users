import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { getUsers, deleteUser } from "../api";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <View style={styles.container}>
      <Button title="Create User" onPress={() => router.push("/create-user")} />
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>
              {item.name} - {item.email}
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/update-user",
                    params: { user: JSON.stringify(item) }, // Pass the user object as a string
                  })
                }
              >
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item._id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  userItem: { padding: 10, borderBottomWidth: 1, marginVertical: 5 },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
  edit: { color: "blue" },
  delete: { color: "red" },
});
