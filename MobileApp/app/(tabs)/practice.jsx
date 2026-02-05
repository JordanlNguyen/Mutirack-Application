import { View, Text, Pressable, ScrollView } from 'react-native';
import style from '../../src/style'
import {useState, useRef, useEffect, useCallback} from 'react'
import {router, useFocusEffect} from 'expo-router'
import {db} from '../../src/databaseModule'
import { Feather } from '@expo/vector-icons';

export default function PracticeSessionScreen() {

    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [second, setSecond] = useState('00');
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState('not started')
    const [startDate, setStartDate] = useState('not started')
    const [submitErrorMessage, setSubmitErrorMessage] = useState('');
    const [pieces, setPieces] = useState([]);
    const [piecesPracticed, setPiecesPracticed] = useState([]);
    const timerRef = useRef<NodeJS.Timeout | null | number>(null);
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

    // reset timer
    const resetTimer = () => {
        stopTimer();
        setHour('00');
        setMinute('00');
        setSecond('00');
        setStartTime('not started');
    }

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
        // if(totalSecondsRef.current < 60){
        //     setSubmitErrorMessage('practice at least 1 minute before submitting');
        //     setTimeout(() => {setSubmitErrorMessage('');}, 2000);
        //     return;
        // }
        stopTimer;
        router.push({
            pathname : "/overview",
            params : {
                duration : totalSecondsRef.current.toString(),
                startTime : startTime,
                startDate : startDate,
                piecesID : JSON.stringify(piecesPracticed)
                // endTime : new Date().toLocaleTimeString(),
                // endDate : new Date().toLocaleDateString()
            }
        });
    }

    useFocusEffect(
        useCallback(() => {
            const piecesData = db.getUserPieces() || [];
            setPieces(piecesData);
        }, [])
    );
    
    return (
        <View style={[style.container, {}]}>
            <Pressable style={style.manualAddButton}
            onPress={() => router.push("/manualAdd")}
            >
                <Feather name="plus" size={20}/>
            </Pressable>
            <View style={style.timerContainter}>
                <Text style={style.time}> {hour}:{minute}:{second}</Text>
                <Text style={{fontSize : 13, color : 'white', fontFamily : 'serif'}}> Start Time : {startTime}</Text>
                <View style={style.timeButtonContainer}>
                    <Pressable style={[style.timeButtons, {backgroundColor : '#919492'}]} onPress={resetTimer}>
                        <Feather name='rotate-ccw' size={20}/>
                    </Pressable>
                    <Pressable style={[style.timeButtons, {backgroundColor : '#C0392B'}]} onPress={stopTimer}>
                        <Feather name='pause' size={20}/>
                    </Pressable>
                    <Pressable style={[style.timeButtons, {backgroundColor : '#2ECC71'}]} onPress={startTimer}>
                        <Feather name='play' size={20}/>
                    </Pressable>
                </View>
            </View>
            <View style={style.pieceSelectionContainer}>
                <ScrollView>
                    {pieces.map((piece) => {
                        const isPracticed = piecesPracticed.includes(piece.id)
                    return(
                        <Pressable key={piece.id}
                        onPress={() => {
                            if(piecesPracticed.includes(piece.id)){
                                setPiecesPracticed(piecesPracticed.filter(id => id !== piece.id));
                            } else {
                                setPiecesPracticed([...piecesPracticed, piece.id]);;
                            }
                        }}
                        >
                            <Text style={{fontSize : 20, margin : 5, marginLeft : 15}}>{isPracticed ? '✅' : '[   ]'} {piece.name}</Text>
                        </Pressable>
                    );})}
                </ScrollView>
            </View>
            <Pressable style={[style.submitButton, {bottom : 180}]} onPress={finishSession}>
                <Feather name="check" size={20}/>
            </Pressable>

            {submitErrorMessage !== '' && (
                <View style={style.submitErrorMessageContainer}>
                    <Text style={{ 
                    textAlign: 'center', 
                    fontSize: 15, 
                    fontFamily: 'serif',
                    color: 'black'
                    }}>
                    {submitErrorMessage}
                    </Text>
                </View>
            )}
        </View>
    );
}

// ----------------------- to do ------------------------------
// - logical error where user can go to overview without starting practice session
// - when done is pressed, timer should stop