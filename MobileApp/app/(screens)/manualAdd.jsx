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

    await services.addSession({
      userId,
      startDate,
      startTime,
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
        <View style={style.timeContainer}>
          <TextInput
            placeholder="HH"
            placeholderTextColor="#959595"
            maxLength={2}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setHours}
          />
          <TextInput
            placeholder="MM"
            placeholderTextColor="#959595"
            maxLength={2}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setMinutes}
          />
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
          >
            <Pressable
              onPress={() => changeMeridiem("AM")}
              style={{
                backgroundColor: meridiem === "AM" ? "white" : "transparent",
                borderRadius: 10,
                width: 30,
                alignItems: "center",
              }}
            >
              <Text>AM</Text>
            </Pressable>
            <Pressable
              onPress={() => changeMeridiem("PM")}
              style={{
                backgroundColor: meridiem === "PM" ? "white" : "transparent",
                borderRadius: 10,
                width: 30,
                alignItems: "center",
              }}
            >
              <Text>PM</Text>
            </Pressable>
          </View>
        </View>
        <View style={style.dateContainer}>
          <TextInput
            placeholder="MM"
            placeholderTextColor="#959595"
            maxLength={2}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setStartMonth}
          />
          <TextInput
            placeholder="DD"
            placeholderTextColor="#959595"
            maxLength={2}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setStartDay}
          />
          <TextInput
            placeholder="YYYY"
            placeholderTextColor="#959595"
            maxLength={4}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setStartYear}
          />
          <TextInput
            placeholder="HH"
            placeholderTextColor="#959595"
            maxLength={2}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setStartHour}
          />
          <TextInput
            placeholder="MM"
            placeholderTextColor="#959595"
            maxLength={2}
            keyboardType="numeric"
            style={{
              fontSize: 40,
              color: "white",
            }}
            onChangeText={setStartMinute}
          />
        </View>

        <View style={[style.pieceSelectionContainer, { margin: 0 }]}>
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
          style={[style.overviewTextInput, {}]}
          multiline
          textAlignVertical="top"
          placeholder="notes"
          placeholderTextColor="#959595"
          onChangeText={setNotes}
          onSubmitEditing={() => {
            console.log("exiting");
            Keyboard.dismiss();
          }}
          returnKeyType="done"
        />

        <Pressable
          style={[style.submitButton, { bottom: 40 }]}
          onPress={submitSession}
        >
          <Text style={{ fontSize: 25 }}> Done </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
