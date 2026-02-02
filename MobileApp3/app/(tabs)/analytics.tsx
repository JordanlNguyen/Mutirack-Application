import {useCallback, useState} from "react";
import { View , Text} from "react-native";
import{useFocusEffect} from 'expo-router';
import { VictoryChart, VictoryBar, VictoryAxis } from "victory-native";
import style from '../../src/style'
import {db} from '../../src/databaseModule';

export default function Analytics() {

  const [dailyPractice, setDailyPractice] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      const res = db.getDurationsOnEachDay();
      setDailyPractice(res);
    },[])
  );

  return (
    <View style={style.container}>
        <View style={style.dailyPracticeChart}>
          <Text style={style.chartTitle}>Daily Practice</Text>
          <VictoryChart
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
            <VictoryBar
            data={dailyPractice}
            x={"startDate"}
            y={"totalDuration"}
            />
          </VictoryChart>
        </View>
    </View>
  );
}