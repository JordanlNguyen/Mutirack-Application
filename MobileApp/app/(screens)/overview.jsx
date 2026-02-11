import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
    Keyboard,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import services from "../src/services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "../src/style";


export default function overview() {
  const { duration, startTime, startDate, piecesID } = useLocalSearchParams();
  const [piecesPracticed, setPiecesPracticed] = useState(() =>
    JSON.parse(piecesID),
  );
  const [pieces, setPieces] = useState([]);
  const [notes, setNotes] = useState("");

  useFocusEffect(
    useCallback(() => {
      let mounted = true;
      (async () => {
        try {
          const piecesData = await services.getAllPieces();
          if (mounted) setPieces(piecesData || []);
        } catch (e) {
          console.error('Failed to load pieces', e);
        }
      })();
      return () => { mounted = false; };
    }, []),
  );

  return (
    <View style={style.container}>
      <Text style={{ color: "white" }}>Total Time : {duration}</Text>
      <View style={style.pieceSelectionContainer}>
        <ScrollView>
          {pieces.map((piece) => {
            const isPracticed = piecesPracticed.includes(piece.id);
            return (
              <Pressable
                key={piece.id}
                onPress={() => {
                  if (piecesPracticed.includes(piece.id)) {
                    setPiecesPracticed(
                      piecesPracticed.filter((id) => id !== piece.id),
                    );
                  } else {
                    setPiecesPracticed([...piecesPracticed, piece.id]);
                  }
                }}
              >
                <Text style={{ fontSize: 20, margin: 5, marginLeft: 15 }}>
                  {isPracticed ? "✅" : "[   ]"} {piece.title || piece.name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <TextInput
        style={style.overviewTextInput}
        multiline
        textAlignVertical="top"
        placeholder="notes"
        placeholderTextColor="#959595"
        onChangeText={setNotes}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Pressable
        style={[style.submitButton, { bottom: 40 }]}
        onPress={async () => {
          const userId = await AsyncStorage.getItem("userId");
          await services.addSession({userId, piecesPracticed, startDate, startTime, duration, notes});
          router.replace("/completion");
        }}
      >
        <Text style={{ fontSize: 25 }}> Submit </Text>
      </Pressable>
    </View>
  );
}
