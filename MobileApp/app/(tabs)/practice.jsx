import { Feather } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View, StyleSheet } from "react-native";
import services from "../src/services";
import style from "../src/style";

export default function PracticeSessionScreen() {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState("not started");
  const [startDate, setStartDate] = useState("not started");
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [pieces, setPieces] = useState([]);
  const [piecesPracticed, setPiecesPracticed] = useState([]);
  const timerRef = useRef(null);
  const totalSecondsRef = useRef(0);

  // start the timer
  const startTimer = () => {
    if (running) return; // prevent multiple intervals
    if (startTime === "not started") {
      const now = new Date();
      const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
      const time = now.toTimeString().split(' ')[0]; // HH:MM:SS
      setStartTime(time);
      setStartDate(date);
    }
    setRunning(true);
    timerRef.current = setInterval(() => {
      totalSecondsRef.current += 1;

      const hrs = Math.floor(totalSecondsRef.current / 3600);
      const mins = Math.floor((totalSecondsRef.current % 3600) / 60);
      const secs = totalSecondsRef.current % 60;

      // format to two digits
      setHour(hrs.toString().padStart(2, "0"));
      setMinute(mins.toString().padStart(2, "0"));
      setSecond(secs.toString().padStart(2, "0"));
    }, 1000);
  };

  // stop the timer
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setRunning(false);
  };

  // reset timer
  const resetTimer = () => {
    stopTimer();
    setHour("00");
    setMinute("00");
    setSecond("00");
    setStartTime("not started");
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const finishSession = () => {
    stopTimer();
    router.push({
      pathname: "/overview",
      params: {
        duration: totalSecondsRef.current.toString(),
        startTime: startTime,
        startDate: startDate,
        piecesID: JSON.stringify(piecesPracticed)
      },
    });
  };

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
    <View style={[style.container, {}]}>

      <View style={localStyle.header}>
        <Text style={localStyle.headerTitle}>Practice Session</Text>
      </View>
      
      <TimerSection
        hour={hour}
        minute={minute}
        second={second}
        startTime={startTime}
        resetTimer={resetTimer}
        stopTimer={stopTimer}
        startTimer={startTimer}
      />

      <View style={localStyle.headerRow}>
        <Text style={localStyle.sectionTitle}>Pieces</Text>
        <Pressable onPress={() => router.push("/addPiece")}>
          <Text style={{ color: "#ffffff6e", fontSize: 14 }}>+ add piece</Text>
        </Pressable>
      </View>
      <View style={localStyle.pieceSelectionContainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {pieces.map((piece) => {
            const isPracticed = piecesPracticed.includes(piece.id);
            return (
              <ListItem key={piece.id} piece={piece} isPracticed={isPracticed} piecesPracticed={piecesPracticed} setPiecesPracticed={setPiecesPracticed} />
            );
          })}
        </ScrollView>
      </View>

      <Pressable
        style={localStyle.finishButton}
        onPress={finishSession}
      >
        <Text style={localStyle.finishButtonText}> Finish Session</Text>
      </Pressable>

      {submitErrorMessage !== "" && (
        <View style={style.submitErrorMessageContainer}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontFamily: "serif",
              color: "black",
            }}
          >
            {submitErrorMessage}
          </Text>
        </View>
      )}
    </View>
  );
}


const ListItem = ({ piece, isPracticed, piecesPracticed, setPiecesPracticed }) => {
    return(
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
    )
}

const TimerSection = ({ hour, minute, second, startTime, resetTimer, stopTimer, startTimer }) => {
  return (
      <View style={localStyle.timeContainer}>
        <Text style={style.time}>
          {" "}
          {hour}:{minute}:{second}
        </Text>
        <Text style={{ fontSize: 13, color: "white", fontFamily: "serif" }}>
          {" "}
          Start Time : {startTime}
        </Text>
        <View style={style.timeButtonContainer}>
          <Pressable
            style={[style.timeButtons, { backgroundColor: "#919492" }]}
            onPress={resetTimer}
          >
            <Feather name="rotate-ccw" size={20} />
          </Pressable>
          <Pressable
            style={[style.timeButtons, { backgroundColor: "#C0392B" }]}
            onPress={stopTimer}
          >
            <Feather name="pause" size={20} />
          </Pressable>
          <Pressable
            style={[style.timeButtons, { backgroundColor: "#2ECC71" }]}
            onPress={startTimer}
          >
            <Feather name="play" size={20} />
          </Pressable>
        </View>
      </View>
  )
}
const localStyle = StyleSheet.create({
    header: {
      width: "100%",
      paddingVertical: 20,
      paddingHorizontal: 15,
      marginBottom: 10,
      top: 0,
      position: "absolute",
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
    pieceSelectionContainer: {
      backgroundColor: "#484b53",
      width: "90%",
      maxHeight: 250,
      borderRadius: 10,
      marginBottom: 20,
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
    finishButton: {
      backgroundColor: "#2ECC71",
      flexDirection: "row",
      padding: 0,
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center",
      width: 150,
      height: 50,
    },
    finishButtonText: {
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      marginLeft: 8,
    },
    timeContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
    },
})