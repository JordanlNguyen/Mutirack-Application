import {useCallback, useState} from "react";
import { View , Text, Dimensions} from "react-native";
import{useFocusEffect} from 'expo-router';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryPie, VictoryLine } from "victory-native";
import style from '../../src/style'
import {db} from '../../src/databaseModule';

export default function Analytics() {

  const [dailyPractice, setDailyPractice] = useState([]);
  const screenWidth = Dimensions.get('window');

  useFocusEffect(
    useCallback(() => {
      const res = db.getDurationsOnEachDay();
      setDailyPractice(res);
    },[])
  );

  return (
    <View style={style.container}>
        <View style={style.chartModule}>
          <View style={style.chartBox}>
            <Text style={style.chartTitle}>Practice Trend</Text>
            <VictoryChart
            width={250}
            height={250}
            >
              <VictoryAxis
                style={{
                  axis: { stroke: "rgb(255, 255, 255)" },
                  ticks: { stroke: "#6B7280" },
                  tickLabels: { fill: "#6B7280", textAnchor : "end"},
                }}
              />
              <VictoryAxis
                tickValues={[0,30,60,90,120,150,180]}
                dependentAxis
                style={{
                  axis: { stroke: "#ffffff" },
                  ticks: { stroke: "#6B7280" },
                  tickLabels: { fill: "#6B7280" }
                }}
              />
              <VictoryLine
              data={dailyPractice}
              x={"startDate"}
              y={"totalDuration"}
              />
            </VictoryChart>
          </View>
          <View style={style.chartBox}>
            <Text style={style.chartTitle}>Practice Calender</Text>
            
          </View>
        </View>
        <VictoryChart
        height={250}
        >
          <VictoryPie
          />      
        </VictoryChart>
    </View>
  );
}