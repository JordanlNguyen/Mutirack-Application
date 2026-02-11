import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { db } from "../src/databaseModule";
import style from "../src/style";
import {
    VictoryAxis,
    VictoryChart,
    VictoryLine,
    VictoryArea,
    VictoryPie
} from "victory-native";


export default function Home() {

  // const [displayedMessage, setDisplayedMessage] = useState(
  //   `Hello ${db.getUserName()}`,
  // );
  // const [practicedToday, setPracticedToday] = useState(
  //   db.getTotalPracticeToday(),
  // );
  // const [practicedThisWeek, setPracticedThisWeek] = useState(
  //   db.getTotalPracticeThisWeek(),
  // );
  // const [practicedThisMonth, setPracticedThisMonth] = useState(
  //   db.getTotalPracticeThisMonth(),
  // );
  // const [userName, setUserName] = useState(db.getUserName());
  // const fadeAnim = useRef(new Animated.Value(1)).current;
  // const currentIndexRef = useRef(0);

  // useFocusEffect(
  //   useCallback(() => {
  //     const name = db.getUserName();

  //     setUserName(name);
  //     setPracticedToday(db.getTotalPracticeToday());
  //     setPracticedThisWeek(db.getTotalPracticeThisWeek());
  //     setPracticedThisMonth(db.getTotalPracticeThisMonth());
  //   }, []),
  // );
  // const messages = [
  //   `Hello ${userName}`,
  //   `Todays Practice : ${practicedToday}`,
  //   `This Weeks Practice : ${practicedThisWeek}`,
  //   `This Months Practice : ${practicedThisMonth}`,
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Fade out
  //     Animated.timing(fadeAnim, {
  //       toValue: 0,
  //       duration: 500,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       // After fade out, change message
  //       currentIndexRef.current =
  //         (currentIndexRef.current + 1) % messages.length;
  //       setDisplayedMessage(messages[currentIndexRef.current]);
  //       // Then fade in
  //       Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 500,
  //         useNativeDriver: true,
  //       }).start();
  //     });
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);



  return (
    <View style={[style.container, { justifyContent: "flex-start" }]}>

      {/* <Title fadeAnim={fadeAnim} displayedMessage={displayedMessage} /> */}
      <ProgressChart/>
      <PieChart/>
      
    </View>
  );
}


const Title = ({ fadeAnim, displayedMessage }) => {
  return (
    <View style={style.statusContainer}>
      <Animated.Text
        style={{
          fontSize: 30,
          fontFamily: "serif",
          textAlign: "center",
          color: "white",
          opacity: fadeAnim,
        }}
      >
        {" "}
        {displayedMessage}{" "}
      </Animated.Text>
    </View>
  );
};



const PieChart = () => {
  return (
    <VictoryChart height={250}>      
      <VictoryAxis style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fill: "none" } }} />
      <VictoryAxis dependentAxis style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fill: "none" } }} />      
      <VictoryPie
        data={[
          { x: "Label1", y: 10 },
          { x: "Label2", y: 20 },
        ]}
        labels={({ datum }) => datum.x}
        style={{
          labels: { fill: "white", fontSize: 12 }
        }}
      />
    </VictoryChart>
  )
}

const ProgressChart = () => {
  return (
    <VictoryChart>
      <VictoryLine
        data={[
          { x: "Mon", y: 2 },
          { x: "Tue", y: 3 },
          { x: "Wed", y: 5 },
          { x: "Thu", y: 4 },
          { x: "Fri", y: 6 },
          { x: "Sat", y: 7 },
          { x: "Sun", y: 8 },
        ]}
        style={{
          data: { stroke: "#10a326" },
        }}
      />
      <VictoryAxis
        style={{
          axis: { stroke: "white" },
          tickLabels: { fill: "white" },
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: "white" },
          tickLabels: { fill: "white" },
        }}
      />
      <VictoryArea
        data={[
          { x: "Mon", y: 2 },
          { x: "Tue", y: 3 },
          { x: "Wed", y: 5 },
          { x: "Thu", y: 4 },
          { x: "Fri", y: 6 },
          { x: "Sat", y: 7 },
          { x: "Sun", y: 8 },
        ]}
        style={{
          data: { fill: "#10a326", fillOpacity: 0.1},
        }}
      />
    </VictoryChart>
  );
};