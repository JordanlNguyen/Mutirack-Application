import style from './style';
import {View, Text, Pressable, Animated} from 'react-native';
import { useEffect, useState, useRef } from 'react';
import {router} from 'expo-router';
import tocken from '../tockenServices';
import {db} from '../databaseModule';

export default function Home(){

    const [displayedMessage, setDisplayedMessage] = useState(`Hello ${db.getUserName()}`);

    const [practicedToday, setPracticedToday] = useState(db.getTotalPracticeToday());
    const [practicedThisWeek, setPracticedThisWeek] = useState(db.getTotalPracticeThisWeek());
    const [practicedThisMonth, setPracticedThisMonth] = useState(db.getTotalPracticeThisMonth());
    const userName = db.getUserName();
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const currentIndexRef = useRef(0);
    const messages = [
        `Hello ${userName}`,
        `Todays Practice : ${practicedToday}`,
        `This Weeks Practice : ${practicedThisWeek}`,
        `This Months Practice : ${practicedThisMonth}`
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                // After fade out, change message
                currentIndexRef.current = (currentIndexRef.current + 1) % messages.length;
                setDisplayedMessage(messages[currentIndexRef.current]);
                // Then fade in
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }).start();
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return(
        <View style={[style.container, { justifyContent : 'flex-start'}]}>
            <View style={style.statusContainer}>
                <Animated.Text style={{fontSize : 30, fontFamily : 'serif', textAlign : 'center', color : 'white', opacity: fadeAnim}}> {displayedMessage} </Animated.Text>
            </View>
            
            <Pressable style={style.practiceButton}>
                <Text style={style.practiceButtonText}> Start Practice Session</Text>
            </Pressable>
        </View>
    );
}