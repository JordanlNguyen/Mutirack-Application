import {View, Text, FlatList, StyleSheet, Pressable, useEffect, SectionList} from "react-native";
import style from "../src/style";
import React, { useState } from "react";
import services from "../src/services";
import { useFocusEffect, router } from "expo-router";
import { useCallback } from "react";

export default function Profile() {

  const [sessions, setSessions] = useState([]);
  const [groupedSessions, setGroupedSessions] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const fetchSessions = async () => {
        try {
          const allSessions = await services.getAllPracticeSessions();
          if (mounted) {
            setSessions(allSessions);
            // Group sessions by month
            const grouped = groupSessionsByMonth(allSessions);
            setGroupedSessions(grouped);
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

  console.log("Grouped Sessions:", sessions);
  const groupSessionsByMonth = (sessions) => {
    if (!sessions || sessions.length === 0) return [];

    // Sort sessions by date descending (newest first)
    const sortedSessions = [...sessions].sort((a, b) => {
      // Convert SQLite format to ISO
      const dateA = a.startDateTime.includes('T') ? a.startDateTime : a.startDateTime.replace(' ', 'T');
      const dateB = b.startDateTime.includes('T') ? b.startDateTime : b.startDateTime.replace(' ', 'T');
      return new Date(dateB) - new Date(dateA);
    });

    // Group by month/year
    const grouped = {};
    sortedSessions.forEach(session => {
      // Convert SQLite format to ISO
      const isoString = session.startDateTime.includes('T') ? session.startDateTime : session.startDateTime.replace(' ', 'T');
      const date = new Date(isoString);
      const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
      
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(session);
    });

    // Convert to array format for SectionList
    return Object.keys(grouped).map(monthYear => ({
      title: monthYear,
      data: grouped[monthYear]
    }));
  };


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
      <SectionList
        style={localStyle.flatList}
        contentContainerStyle={{ paddingBottom: 120 }}
        sections={groupedSessions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <SessionItem item={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={localStyle.sectionHeader}>
            <Text style={localStyle.sectionHeaderText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const SessionList = null;

const SessionItem = ({item}) => {
    const formatDate = (dateTimeStr) => {
        if (!dateTimeStr) return 'No date';
        
        // SQLite format: "2026-02-12 18:45:00" -> convert to ISO by replacing space with 'T'
        const isoString = dateTimeStr.includes('T') ? dateTimeStr : dateTimeStr.replace(' ', 'T');
        const date = new Date(isoString);
        
        if (isNaN(date.getTime())) return 'Invalid date';
        
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    
    return(
        <View style={localStyle.sessionItem}>
            <View style={localStyle.sessionDateContainer}><Text style={localStyle.sessionDateText}>{formatDate(item.startDateTime)}</Text></View>
            <View style={localStyle.sessionNotesContainer}><Text numberOfLines={1} ellipsizeMode="tail" style={localStyle.sessionNotesText}>{item.notes}</Text></View>
        </View>
    )
}

const localStyle = StyleSheet.create({
    pieceHeader: {
        color: "white",
        fontSize: 25,
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
        backgroundColor: "#484b53",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
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
    },
    sectionHeader: {
        backgroundColor: "#2c2e33",
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 10,
    },
    sectionHeaderText: {
        color: "#8e8e8e",
        fontSize: 15,
        fontWeight: "bold",
    }
});