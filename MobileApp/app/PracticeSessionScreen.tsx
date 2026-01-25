import { View, Text, Pressable } from 'react-native';
import style from './style'
import {useState, useRef, useEffect} from 'react'
import {router} from 'expo-router'

export default function PracticeSessionScreen() {

    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState('not started')
    const [startDate, setStartDate] = useState('not started')

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const totalSecondsRef = useRef(0);

  // start the timer
  const startTimer = () => {
        if (running) return; // prevent multiple intervals
        if (startTime === 'not started') {
            setStartTime(new Date().toLocaleTimeString())
            setStartDate(new Date().toLocaleDateString())
        }
        setRunning(true);
            timerRef.current = setInterval(() => {
            totalSecondsRef.current += 1;

            const hrs = Math.floor(totalSecondsRef.current / 3600);
            const mins = Math.floor((totalSecondsRef.current % 3600) / 60);
            const secs = totalSecondsRef.current % 60;

            // format to two digits
            setHour(hrs.toString().padStart(2, '0'));
            setMinute(mins.toString().padStart(2, '0'));
            setSecond(secs.toString().padStart(2, '0'));
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

    // cleanup on unmount
    useEffect(() => {
        return () => {
        if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const finishSession = () => {
        //redirect to overview screen
        //send duration in seconds and day of practice
        //when practice is done, track time of stopping practice and date of stop practice
        router.push({
            pathname : "/PracticeOverviewScreen",
            params : {
                duration : totalSecondsRef.current.toString(),
                startTime : startTime,
                startDate : startDate,
                endTime : new Date().toLocaleTimeString(),
                endDate : new Date().toLocaleDateString()
            }
        });
    }
    
    return (
        <View style={[style.container, {flex : 2}]}>
            <Pressable style={style.backButton} onPress={() => router.back()}>
                <Text style ={{fontSize : 30, color : 'white'}}> {"<-"} </Text>
            </Pressable>
            <Text style={style.header}> Practice Session </Text>
            <View style={style.timerContainter}>
                <Text style={style.time}> {hour}:{minute}:{second}</Text>
            </View>
            <View style={style.timeButtonContainer}>
                <Pressable style={[style.timeButtons, {backgroundColor : 'red'}]} onPress={stopTimer}>
                    <Text style={{fontSize : 30}}>Pause</Text>
                </Pressable>
                <Pressable style={[style.timeButtons, {backgroundColor : 'green'}]} onPress={startTimer}>
                    <Text style={{fontSize : 30}}>Start</Text>
                </Pressable>
            </View>
            <Text style={{marginTop : 10, fontSize : 20, color : 'white'}}> Start Time : {startTime}</Text>
            <Pressable style={style.submitButton} onPress={finishSession}>
                <Text style ={{fontSize : 25}}> Done </Text>
            </Pressable>
        </View>
    );
}

// ----------------------- to do ------------------------------
// - logical error where user can go to overview without starting practice session
// - when done is pressed, timer should stop