import {View, Pressable, ScrollView, Text, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native'
import style from '../../src/style'
import {useState, useCallback} from 'react'
import {router, useFocusEffect} from 'expo-router'
import {db} from '../../src/databaseModule' 
import { Feather } from '@expo/vector-icons';

export default function manualAdd(){

    const [pieces, setPieces] = useState([]);
    const [piecesPracticed, setPiecesPracticed] = useState([]);
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');
    const [startMonth, setStartMonth] = useState('');
    const [startDay, setStartDay] = useState('');
    const [startYear, setStartYear] = useState('');
    const [startHour, setStartHour] = useState('');
    const [startMinute, setStartMinute] = useState('');
    const [meridiem, setMeridiem] = useState('AM')
    const [notes, setNotes] = useState(''); 

    useFocusEffect(
        useCallback(() => {
            const piecesData = db.getUserPieces() || [];
            setPieces(piecesData);
        }, [])
    );

    function submitSession(){
        const duration = (Number(hours) * 60 * 60) + Number(minutes) * 60
        db.injectPracticeSession(piecesPracticed, `${startMonth}/${startDay}/${startYear}`, `${startHour}:${startMinute}:00 ${meridiem}`, duration, notes);
        router.replace('/completion');
    }

    function changeMeridiem(meridiem){
        if (meridiem === 'AM'){
            setMeridiem('AM');
        } else {
            setMeridiem('PM');
        }
    }
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={style.container}>
                <View style={style.timeContainer}>
                    <TextInput
                        placeholder = "HH"
                        placeholderTextColor = '#959595'
                        maxLength={2}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setHours}
                    />
                    <TextInput
                        placeholder = "MM"
                        placeholderTextColor = '#959595'
                        maxLength={2}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setMinutes}
                    />
                    <View style={{justifyContent : 'center', alignItems : 'center', gap : 10}}>
                        <Pressable
                            onPress={() => changeMeridiem('AM')}
                            style={{backgroundColor : meridiem === 'AM' ? 'white' : 'transparent', borderRadius : 10, width : 30, alignItems : 'center'}}
                            ><Text>AM</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => changeMeridiem('PM')}
                            style={{backgroundColor : meridiem === 'PM' ? 'white' : 'transparent', borderRadius : 10, width : 30, alignItems : 'center'}}
                            ><Text>PM</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={style.dateContainer}>
                    <TextInput
                        placeholder = "MM"
                        placeholderTextColor = '#959595'
                        maxLength={2}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setStartMonth}
                    />
                    <TextInput
                        placeholder = "DD"
                        placeholderTextColor = '#959595'
                        maxLength={2}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setStartDay}
                    />
                    <TextInput
                        placeholder = "YYYY"
                        placeholderTextColor = '#959595'
                        maxLength={4}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setStartYear}
                    />
                    <TextInput
                        placeholder = "HH"
                        placeholderTextColor = '#959595'
                        maxLength={2}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setStartHour}
                    />
                    <TextInput
                        placeholder = "MM"
                        placeholderTextColor = '#959595'
                        maxLength={2}
                        keyboardType='numeric'
                        style={{
                            fontSize : 40,
                            color : 'white'
                        }}
                        onChangeText={setStartMinute}
                    />
                </View>

                <View style={[style.pieceSelectionContainer, {margin : 0}]}>
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

                <TextInput style={[style.overviewTextInput, {}]} multiline textAlignVertical='top' placeholder='notes' placeholderTextColor='#959595'
                    onChangeText={setNotes}
                    onSubmitEditing={() => {
                        console.log('exiting');
                        Keyboard.dismiss();
                    }}
                    returnKeyType="done"
                />

                <Pressable style={[style.submitButton, {bottom : 40}]} onPress={submitSession}>
                    <Text style ={{fontSize : 25}}> Done </Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    );
}