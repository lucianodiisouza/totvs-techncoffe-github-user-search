import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { User } from "../utils/types";

export const ProfileCard: React.FC<User> = ({ avatar_url, login }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{login}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 4,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "lightgray",
  },
  name: {
    color: "black",
    fontWeight: "bold",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
});
