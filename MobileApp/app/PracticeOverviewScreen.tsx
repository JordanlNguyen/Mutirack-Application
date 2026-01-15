import {View, Text, TextInput} from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import style from './style'
import {BASE_URL} from '../config'

export default function PracticeOverviewScreen() {

    {/* show summary of practice session
        have user input piece / composer / instrument / notes  
        
        backend needs:
            - user id
            - title
            - composer
            - instrument
            - notes
            -startTime
            -endTime
            -startDate
            -endDate
    */}

    const {duration, startTime, startDate, endTime, endDate} = useLocalSearchParams();
    
    function postPracticeSession() {
        fetch(`${BASE_URL}/`

        );
    }

    return (
        <View style={style.container}>
            <Text style={[style.title, style.overviewTitle]}>Overview</Text>
            <Text style={{color : 'white'}}> Time practced : {duration}</Text>
            <TextInput
                style={style.overviewTextFields}
                placeholder='Piece'
            />
            <TextInput
                style={style.overviewTextFields}
                placeholder='composer'
            />
            <TextInput
                style={style.overviewTextFields}
                placeholder='instrument'
            />
            <TextInput
                multiline
                textAlignVertical="top"
                style={[style.overviewTextFields, {height : 100}]}
                placeholder='notes'
            />
        </View>
    );
}