import {View, Text, FlatList, StyleSheet, Pressable, useEffect} from "react-native";
import style from "../src/style";
import React, { useState } from "react";
import services from "../src/services";
import { useFocusEffect, router } from "expo-router";
import { useCallback } from "react";

export default function Profile() {

  const [pieces, setPieces] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const fetchPieces = async () => {
        try {
          const allPieces = await services.getAllPieces();
          if (mounted) {
            setPieces(allPieces);
          }
        } catch (error) {
          console.error("Error fetching pieces:", error);
        }
      };

      fetchPieces();

      return () => {
        mounted = false;
      };
    }, []),
  );


  return (
    <View style={style.container}>

      <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <Text style={localStyle.pieceHeader}>Pieces</Text>
        <Pressable
            onPress={() => router.push("/addPiece")}
        >
            <Text style={{color: "#ffffff6e", marginRight: 15}}> add piece +</Text>
        </Pressable>
      </View>
      <FlatList
        style={localStyle.flatList}
        contentContainerStyle={{ paddingBottom: 120 }}
        data={pieces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <PieceItem item={item} />
        )}
      />
    </View>
  );
}

const PieceList = null;

const PieceItem = ({item}) => {
    return(
        <View style={localStyle.pieceItem}>
            <Text style={localStyle.pieceText}>
            {item.title || item.name}
            </Text>
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
    pieceItem: {
        backgroundColor: "#494949ea",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        minHeight: 40
    },
    flatList: {
        width: "100%",
    }
});
