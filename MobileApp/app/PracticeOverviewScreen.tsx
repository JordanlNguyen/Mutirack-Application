import {View, Text, FlatList, TextInput, Pressable} from 'react-native'
import {useCallback} from 'react'
import {useEffect, useState} from 'react'
import { useLocalSearchParams, router, useFocusEffect} from 'expo-router';
import style from './style'
import {db} from '../databaseModule'
import {BASE_URL} from '../config'

export default function PracticeOverviewScreen() {

    {/*
        - user will select pieces practiced during this session from table currated to user
        - if user practiced new piece, user will select new piece and be redirected to input new piece
        - user will type notes about the session    
    */}

    const [rows, setRows] = useState<any[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const [notes, setNotes] = useState<string>('');
    const {duration, startTime, startDate} = useLocalSearchParams();

    useFocusEffect(
        useCallback(() => {
            const pieces = db.getUserPieces() || [];
            setRows(pieces);
        }, [])
    );
    
    function submitPracticeSession(){
        console.log(`duration : ${typeof duration}, startDate : ${typeof startDate}, startTime : ${typeof startTime} , selected : ${selected}`);
        db.injectPracticeSession(selected, startDate, startTime, Number(duration), notes);
        console.log("practice session injected");
    }

    return (
        <View style={style.container}>
            <Text style={style.header}>Overview</Text>
            {/* <Text style={style.duration}> Session Duration: {duration}</Text> */}
            {/*
                - pieces should display a list of pieces that are in the pieces table for the user
                - once users select a piece, the item will dissapear from the list and be added to a section of practiced in this session
                - if new piece has been practiced, direct to input new piece
            */}
            <Text style={style.overViewSubText}>Select Pieces Practiced</Text>
            <Text>{selected}</Text>
            <View style={style.pieceListContainer}>
                <FlatList
                data={(rows || []).concat({id: -1, name: 'Add New Piece'})}
                keyExtractor={(item) => item.name.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {
                        setSelected(prevArray => {
                            const prev = prevArray || [];
                            const itemId = Number(item.id);
                            console.log(typeof itemId);
                            if (prev.includes(itemId) && itemId !== -1){
                                return prev.filter((id) => id !== itemId)
                            } else if(!prev.includes(itemId) && itemId !== -1) {
                                return [...prev, itemId];
                            } else if(itemId === -1){
                                router.push('./AddNewPieceScreen');
                                return prev;
                            }
                        });
                    }}>
                        <Text style={style.itemText}>{item.name}</Text>
                    </Pressable>
                )}
                />
            </View>
            <Text style={style.overViewSubText}>Notes</Text>
            <TextInput
                multiline
                value={notes}
                style={style.OverviewNotes}
                onChangeText={setNotes}
            />
            <Pressable onPress={() => {
                submitPracticeSession(); 
                router.push('./PracticeCompletionScreen')}} 
                style={style.overViewSubmit}><Text style={{fontSize: 15, fontFamily : 'serif'}}
                >Submit</Text>
            </Pressable>
        </View>
    );
}