import style from './style';
import {View, Text, Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import {router} from 'expo-router';
import tocken from '../tockenServices';

export default function Home(){

    const messages = [
        "Hello Name",
        "Welcome Back!",
        "Have a great day!",
        "Ready to explore?",
        "Let's get started!"
    ];
    const [curMessageIndex, setCurMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {setCurMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);}, 3000); //milliseconds
        return () => clearInterval(interval);
    }, []);

    function redirectToPracticeSession(){
        router.push('/PracticeSessionScreen');
    }

    {/* data fetching */}
    const [dayPracticeTime, setDayPracticeTime] = useState(0);
    const [weekPracticeTime, setWeekPracticeTime] = useState(0);
    const [monthPracticeTime, setMonthPracticeTime] = useState(0);
    function getTotalPracticeTime(){
        const userTocken = tocken.getTocken();
        
    }

    return(
        <View style={[style.container, { justifyContent : 'flex-start'}]}>
            <View style={style.dynamicHomeDashboard}>
                <Text style={{fontSize : 60}}> {messages[curMessageIndex]} </Text>
            </View>
            <Pressable style={style.practiceButton} onPress={redirectToPracticeSession}>
                <Text> Start Practice Session</Text>
            </Pressable>
        </View>
    );
}

/* Needed for home screen display
 * 
 * - name
 * - total practice session
 *   - day
 *   - week
 *   - month
 */