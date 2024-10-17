import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useMemo, useState } from "react";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { ProfileCard } from "../components/ProfileCard";
import { useFetchUsers } from "../hooks/use-fetch-users";

export const Home = () => {
  const [userName, setUserName] = useState<string>("");
  const { isLoading, resultData, fetchData } = useFetchUsers(userName);

  const users = useMemo(() => resultData.items, [resultData]);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          onChangeText={setUserName}
          value={userName}
          placeholder="Digite o nome do usuário"
        />
        <Button
          onPress={fetchData}
          accessibilityLabel="Buscar usuário no GitHub"
        >
          🔎
        </Button>
      </View>

      <View style={styles.results}>
        {isLoading && <ActivityIndicator />}
        <FlatList
          data={users}
          renderItem={({ item }) => <ProfileCard {...item} />}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ gap: 8 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 8,
    alignItems: "center",
  },
  search: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    paddingTop: 8,
  },
  results: {
    width: "90%",
    paddingTop: 8,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
