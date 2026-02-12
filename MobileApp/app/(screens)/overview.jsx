import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
    Keyboard,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
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

  const formatDuration = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <View style={style.container}>
      <View style={localStyle.header}>
        <Text style={localStyle.headerTitle}>Session Overview</Text>
      </View>

      <View style={localStyle.infoContainer}>
        <View style={localStyle.infoBox}>
          <Text style={localStyle.infoLabel}>Total Time</Text>
          <Text style={localStyle.infoValue}>{formatDuration(Number(duration))}</Text>
        </View>
        <View style={localStyle.infoBox}>
          <Text style={localStyle.infoLabel}>Date</Text>
          <Text style={localStyle.infoValue}>{startDate}</Text>
        </View>
        <View style={localStyle.infoBox}>
          <Text style={localStyle.infoLabel}>Start Time</Text>
          <Text style={localStyle.infoValue}>{startTime}</Text>
        </View>
      </View>

      <Text style={localStyle.sectionTitle}>Pieces Practiced</Text>
      <View style={localStyle.pieceSelectionContainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
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
                style={localStyle.pieceItem}
              >
                <Text style={[localStyle.pieceText, { color: isPracticed ? "#ffffff" : "#ffffff6e" }]}>
                  {isPracticed ? "✅" : "[   ]"} {piece.title || piece.name}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <Text style={localStyle.sectionTitle}>Notes</Text>
      <TextInput
        style={[localStyle.overviewTextInput, { marginBottom: 100 }]}
        multiline
        textAlignVertical="top"
        placeholder="Add notes about your session..."
        placeholderTextColor="#959595"
        onChangeText={setNotes}
        onSubmitEditing={Keyboard.dismiss}
      />

      <Pressable
        style={[style.submitButton, localStyle.submitButtonContainer]}
        onPress={async () => {
          const userId = await AsyncStorage.getItem("userId");
          const startDateTimeISO = new Date(`${startDate}T${startTime}`).toISOString();
          
          await services.addSession({userId, piecesPracticed, startDateTime: startDateTimeISO, duration, notes});
          router.replace("/completion");
        }}
      >
        <Text style={localStyle.submitButtonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const localStyle = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
    marginBottom: 20,
    gap: 10,
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#484b53",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  infoLabel: {
    fontSize: 12,
    color: "#959595",
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  pieceSelectionContainer: {
    backgroundColor: "#484b53",
    width: "90%",
    maxHeight: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  pieceItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#3a3d43",
  },
  pieceText: {
    fontSize: 16,
    marginLeft: 5,
  },
  submitButtonContainer: {
    position: "absolute",
    bottom: 30,
    width: 120,
    height: 50,
    backgroundColor: "#2ECC71",
    borderRadius: 15,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  overviewTextInput : {
        width : '90%',
        height : '40%',
        backgroundColor : '#25272c',
        margin : 10,
        fontSize : 15,
        fontFamily : 'serif',
        color : 'white'
    },
});

