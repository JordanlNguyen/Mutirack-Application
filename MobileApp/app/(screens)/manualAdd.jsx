import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
    Keyboard,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import services from "../src/services";
import style from "../src/style";

export default function manualAdd() {
  const [pieces, setPieces] = useState([]);
  const [piecesPracticed, setPiecesPracticed] = useState([]);
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startDay, setStartDay] = useState("");
  const [startYear, setStartYear] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [meridiem, setMeridiem] = useState("AM");
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

  async function submitSession() {
    const duration = Number(hours) * 60 * 60 + Number(minutes) * 60;
    const userId = await AsyncStorage.getItem("userId");

    if (!userId) {
      console.error("userId is null or undefined");
      return;
    }

    const paddedMonth = String(startMonth).padStart(2, "0");
    const paddedDay = String(startDay).padStart(2, "0");
    const paddedHour = String(startHour).padStart(2, "0");
    const paddedMinute = String(startMinute).padStart(2, "0");

    let hour24 = Number(paddedHour);
    if (meridiem === "PM" && hour24 < 12) hour24 += 12;
    if (meridiem === "AM" && hour24 === 12) hour24 = 0;
    const startTime = `${String(hour24).padStart(2, "0")}:${paddedMinute}:00`;
    const startDate = `${startYear}-${paddedMonth}-${paddedDay}`;
    const startDateTimeISO = new Date(`${startDate}T${startTime}`).toISOString();

    await services.addSession({
      userId,
      piecesPracticed,
      startDateTime: startDateTimeISO,
      duration,
      notes,
    });

    router.replace("/completion");
  }

  function changeMeridiem(meridiem) {
    if (meridiem === "AM") {
      setMeridiem("AM");
    } else {
      setMeridiem("PM");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        {/* Header */}
        <View style={localStyle.header}>
          <Text style={localStyle.headerTitle}>Add Session Manually</Text>
        </View>

        {/* Duration Section */}
        <Text style={localStyle.sectionTitle}>Duration</Text>
        <View style={localStyle.inputSection}>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Hours</Text>
            <TextInput
              placeholder="0"
              placeholderTextColor="#959595"
              maxLength={2}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setHours}
            />
          </View>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Minutes</Text>
            <TextInput
              placeholder="0"
              placeholderTextColor="#959595"
              maxLength={2}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setMinutes}
            />
          </View>
        </View>

        {/* Date Section */}
        <Text style={localStyle.sectionTitle}>Date</Text>
        <View style={localStyle.inputSection}>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Month</Text>
            <TextInput
              placeholder="MM"
              placeholderTextColor="#959595"
              maxLength={2}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setStartMonth}
            />
          </View>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Day</Text>
            <TextInput
              placeholder="DD"
              placeholderTextColor="#959595"
              maxLength={2}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setStartDay}
            />
          </View>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Year</Text>
            <TextInput
              placeholder="YYYY"
              placeholderTextColor="#959595"
              maxLength={4}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setStartYear}
            />
          </View>
        </View>

        {/* Time Section */}
        <Text style={localStyle.sectionTitle}>Start Time</Text>
        <View style={localStyle.inputSection}>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Hour</Text>
            <TextInput
              placeholder="HH"
              placeholderTextColor="#959595"
              maxLength={2}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setStartHour}
            />
          </View>
          <View style={localStyle.inputGroup}>
            <Text style={localStyle.inputLabel}>Minute</Text>
            <TextInput
              placeholder="MM"
              placeholderTextColor="#959595"
              maxLength={2}
              keyboardType="numeric"
              style={localStyle.input}
              onChangeText={setStartMinute}
            />
          </View>
          <View style={localStyle.meridiem}>
            <Pressable
              onPress={() => changeMeridiem("AM")}
              style={[
                localStyle.meridiemButton,
                { backgroundColor: meridiem === "AM" ? "#2ECC71" : "#484b53" },
              ]}
            >
              <Text style={localStyle.meridiemText}>AM</Text>
            </Pressable>
            <Pressable
              onPress={() => changeMeridiem("PM")}
              style={[
                localStyle.meridiemButton,
                { backgroundColor: meridiem === "PM" ? "#2ECC71" : "#484b53" },
              ]}
            >
              <Text style={localStyle.meridiemText}>PM</Text>
            </Pressable>
          </View>
        </View>

        {/* Pieces Section */}
        <Text style={localStyle.sectionTitle}>Pieces Practiced</Text>
        <View style={localStyle.pieceSelectionContainer}>
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

        {/* Notes Section */}
        <Text style={localStyle.sectionTitle}>Notes</Text>
        <TextInput
          style={localStyle.notesInput}
          multiline
          textAlignVertical="top"
          placeholder="Add any notes..."
          placeholderTextColor="#959595"
          onChangeText={setNotes}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          returnKeyType="done"
        />

        <Pressable
          style={[style.submitButton, localStyle.submitButtonContainer]}
          onPress={submitSession}
        >
          <Text style={localStyle.submitButtonText}>Done</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}

const localStyle = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
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
  inputSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 10,
    gap: 10,
    alignSelf: "center",
    maxHeight: 90,
  },
  inputGroup: {
    flex: 1,
    backgroundColor: "#484b53",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 12,
    color: "#959595",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  meridiem: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  meridiemButton: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  meridiemText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  pieceSelectionContainer: {
    backgroundColor: "#484b53",
    width: "90%",
    maxHeight: 200,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: "center",
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
  notesInput: {
    width: "90%",
    height: "15%",
    backgroundColor: "#25272c",
    margin: 15,
    marginBottom: 190,
    fontSize: 15,
    fontFamily: "serif",
    color: "white",
    padding: 12,
    borderRadius: 10,
    alignSelf: "center",
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
});
