import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, View, StyleSheet, Text } from "react-native";
import services from "../src/services";
import style from "../src/style";
import {
    VictoryAxis,
    VictoryChart,
    VictoryLine,
    VictoryArea,
    VictoryPie
} from "victory-native";


export default function Home() {

  const [chartData, setChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const getSessionsPast7Days = async () => {
        try {
          const sessions = await services.getAllPracticeSessions();
          
          // Get today's date and calculate 7 days ago
          const today = new Date();
          // const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          
          // Day names for the chart
          const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          
          // Initialize duration map for past 7 days (ending today)
          const durationByDay = {};
          for (let i = 6; i >= 0; i--) {
            const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
            const dayName = dayNames[date.getDay()];
            const key = date.toISOString().split('T')[0]; // YYYY-MM-DD
            durationByDay[key] = { day: dayName, duration: 0 };
          }
          
          // Sum durations by date
          sessions.forEach(session => {
            const sessionDate = session.startDateTime.split('T')[0]; // Extract YYYY-MM-DD
            if (durationByDay[sessionDate]) {
              durationByDay[sessionDate].duration += session.duration || 0;
            }
          });
          
          // Convert to chart format: [{ x: "Mon", y: duration_in_minutes }, ...]
          const data = Object.values(durationByDay).map(item => ({
            x: item.day,
            y: Math.round(item.duration / 60), // Convert seconds to minutes
          }));
          
          setChartData(data);
        } catch (error) {
          console.error("Error fetching sessions for chart:", error);
        }
      };

      const getPiecesPracticedData = async () => {
        try {
          const piecesWithCounts = await services.getPiecesPracticedWithCounts();
          
          if (!piecesWithCounts || piecesWithCounts.length === 0) {
            setPieChartData([]);
            return;
          }

          // Get top 3-5 pieces (let's use 5)
          const topPieces = piecesWithCounts.slice(0, 5);
          const otherPieces = piecesWithCounts.slice(5);
          
          // Calculate "Other" count
          const otherCount = otherPieces.reduce((sum, piece) => sum + piece.practiceCount, 0);
          
          // Format data for pie chart
          const pieData = topPieces.map(piece => ({
            x: piece.title,
            y: piece.practiceCount
          }));
          
          // Add "Other" if there are more pieces
          if (otherCount > 0) {
            pieData.push({ x: "Other", y: otherCount });
          }
          
          setPieChartData(pieData);
        } catch (error) {
          console.error("Error fetching pieces practiced data:", error);
        }
      };
      
      getSessionsPast7Days();
      getPiecesPracticedData();
    }, [])
  )

  return (
    <View style={[style.container, { justifyContent: "flex-start" }]}>

      <View style={localStyle.header}>
        <Text style={localStyle.headerTitle}>Home</Text>
      </View>
      
      <View style={{marginTop: 100}}><ProgressChart data={chartData}/></View>
      <PieChart data={pieChartData}/>
      
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



const PieChart = ({ data }) => {
  // Fallback data for initial render
  const chartData = data && data.length > 0 ? data : [
    { x: "No Data", y: 1 },
  ];

  return (
    <VictoryChart height={250}>      
      <VictoryAxis style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fill: "none" } }} />
      <VictoryAxis dependentAxis style={{ axis: { stroke: "none" }, ticks: { stroke: "none" }, tickLabels: { fill: "none" } }} />      
      <VictoryPie
        data={chartData}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        colorScale={["#2ECC71", "#3498DB", "#E74C3C", "#F39C12", "#9B59B6", "#484b53"]}
        style={{
          labels: { fill: "white", fontSize: 12 }
        }}
      />
    </VictoryChart>
  )
}

const ProgressChart = ({ data }) => {
  // Fallback data for initial render
  const chartData = data && data.length > 0 ? data : [
    { x: "Sun", y: 0 },
    { x: "Mon", y: 0 },
    { x: "Tue", y: 0 },
    { x: "Wed", y: 0 },
    { x: "Thu", y: 0 },
    { x: "Fri", y: 0 },
    { x: "Sat", y: 0 },
  ];

  // Calculate max duration for Y-axis scaling
  const maxDuration = Math.max(...chartData.map(item => item.y), 0);
  
  // Determine appropriate tick interval based on max duration
  let tickInterval;
  if (maxDuration <= 30) {
    tickInterval = 5; // 5 minute increments
  } else if (maxDuration <= 60) {
    tickInterval = 10; // 10 minute increments
  } else if (maxDuration <= 120) {
    tickInterval = 15; // 15 minute increments
  } else if (maxDuration <= 180) {
    tickInterval = 30; // 30 minute increments
  } else {
    tickInterval = 60; // 1 hour increments for longer sessions
  }
  
  // Round up max to nearest tick interval
  const maxY = Math.ceil(maxDuration / tickInterval) * tickInterval;
  const tickCount = Math.floor(maxY / tickInterval) + 1;
  const tickValues = Array.from({ length: tickCount }, (_, i) => i * tickInterval);

  return (
    <VictoryChart>
      <VictoryLine
        data={chartData}
        style={{
          data: { stroke: "#10a326" },
        }}
      />
      <VictoryAxis
        style={{
          axis: { stroke: "white" },
          tickLabels: { fill: "white" },
          grid: { stroke: "#484b53", strokeWidth: 1 },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickValues={tickValues}
        tickFormat={(t) => `${t}m`}
        domain={[0, maxY]}
        style={{
          axis: { stroke: "white" },
          tickLabels: { fill: "white" },
          grid: { stroke: "#484b53", strokeWidth: 1 },
        }}
      />
      <VictoryArea
        data={chartData}
        style={{
          data: { fill: "#10a326", fillOpacity: 0.1},
        }}
      />
    </VictoryChart>
  );
};

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
})