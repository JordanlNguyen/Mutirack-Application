import {View, Text, ScrollView, Pressable, TextInput, Keyboard} from 'react-native';
import {useState, useCallback} from 'react';
import {useLocalSearchParams, useFocusEffect, router} from 'expo-router';
import style from '../../src/style';
import {db} from '../../src/databaseModule';
/*
    --------- data needed from practice session ---------
    - duration in seconds (INT)
    - startDate mm/dd/yyyy (STRING)
    - startTime hh:mm:ss (STRING)
    - piecesID ([STRING])

    --------- data needed from user in overview ---------
    - notes (STRING)

    --------- user actions on this screens ---------
    - user can :
        - edit duration
        - edit pieces that are practiced
        - type up notes
        - submit session
*/
export default function overview(){
    const {duration, startTime, startDate, piecesID} = useLocalSearchParams()
    const [piecesPracticed, setPiecesPracticed] = useState(() => JSON.parse(piecesID));
    const [pieces, setPieces] = useState([]);
    const [notes, setNotes] = useState('');

    useFocusEffect(
        useCallback(() => {
            const piecesData = db.getUserPieces() || [];
            setPieces(piecesData);
        }, [])
    );

    function submitSession(){
        db.injectPracticeSession(piecesPracticed, startDate, startTime, Number(duration), notes);
        router.replace('/completion');
    }

    return(
        <View style={style.container}>
            <Text style={{color : 'white'}}>Total Time : {duration}</Text>
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

            <TextInput style={style.overviewTextInput} multiline textAlignVertical='top' placeholder='notes' placeholderTextColor='#959595'
                onChangeText={setNotes}
                onSubmitEditing={Keyboard.dismiss}
            />

            <Pressable style={[style.submitButton, {bottom : 40}]} onPress={submitSession}>
                <Text style ={{fontSize : 25}}> Done </Text>
            </Pressable>
        </View>
    );
}