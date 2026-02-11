import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import services from "../src/services";
import style from "../src/style";

export default function sessions() {

  return (
    <View style={style.container}>
      <List />
    </View>
  );
}

const List = ({ sessions }) => {

  const [sessions, setSessions] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchSessions = async () => {
        const sessions = await services.getAllPracticeSessions();
        setSessions(sessions);
      };
      fetchSessions();
    }, []),
  );

  return (
    <FlatList
      contentContainerStyle={{ alignItems: "center" }}
      data={sessions}
      keyExtractor={(item) => item.id.toString()} // unique key
      renderItem={({ item }) => (
        <Pressable
          style={style.sessionItems}
          onPress={() => {
            const res = services.getSingleSession(item.id);
          }}
        >
          <View style={style.quantitativeSessionDataContainer}>
            <Text style={{ color: "white" }}>{item.startDate}</Text>
            <Text style={{ color: "white" }}>{item.duration}</Text>
          </View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ textAlign: "left", flex: 1 }}
          >
            {item.notes}
          </Text>
        </Pressable>
      )}
    />
  )
}
