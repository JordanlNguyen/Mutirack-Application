import {View, Text, FlatList, StyleSheet, Pressable, useEffect} from "react-native";
import style from "../src/style";
import React, { useState } from "react";
import services from "../src/services";
import { useFocusEffect, router } from "expo-router";
import { useCallback } from "react";

export default function Profile() {

  const [sessions, setSessions] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const fetchSessions = async () => {
        try {
          const allSessions = await services.getAllPracticeSessions();
          if (mounted) {
            setSessions(allSessions);
          }
        } catch (error) {
          console.error("Error fetching sessions:", error);
        }
      };

      fetchSessions();
      return () => {
        mounted = false;
      };
    }, []),
  );


  return (
    <View style={style.container}>

      <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={localStyle.pieceHeader}>Sessions</Text>
        <Pressable
            onPress={() => router.push("/manualAdd")}
        >
            <Text style={{color: "#ffffff6e", marginRight: 15}}> add session +</Text>
        </Pressable>
      </View>
      <FlatList
        style={localStyle.flatList}
        contentContainerStyle={{ paddingBottom: 120 }}
        data={sessions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <SessionItem item={item} />
        )}
      />
    </View>
  );
}

const SessionList = null;

const SessionItem = ({item}) => {
    return(
        <View style={localStyle.sessionItem}>
            <View style={localStyle.sessionDateContainer}><Text style={localStyle.sessionDateText}>{item.startDate}</Text></View>
            <View style={localStyle.sessionNotesContainer}><Text numberOfLines={1} ellipsizeMode="tail" style={localStyle.sessionNotesText}>{item.notes}</Text></View>
        </View>
    )
}

const localStyle = StyleSheet.create({
    pieceHeader: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 15
    },
    pieceText: {
        color: "white",
        fontSize: 16,
        marginVertical: 10,
        marginLeft: 15
    },
    sessionItem: {
        backgroundColor: "#494949ea",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        minHeight: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    flatList: {
        width: "100%",
    },
    sessionDateContainer: {
        width: "90%",
        fontSize: 16,
        marginVertical: 10,
        marginLeft: 15
    },
    sessionNotesContainer: {
        flex: 1,
        width: "90%",
        justifyContent: "flex-end",
        marginVertical: 10,
        marginLeft: 15,
    },
    sessionNotesText: {
        color: "#e1e1e19a",
        fontSize: 14
    },
    sessionDateText: {
        color: "white",
        fontSize: 16,
    }
});