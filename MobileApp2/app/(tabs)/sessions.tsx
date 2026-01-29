import {View, Text, FlatList} from 'react-native';
import {useState, useCallback} from 'react';
import {useFocusEffect} from 'expo-router'
import style from '../../src/style'
import {db} from '../../src/databaseModule';

export default function sessions(){
    const [sessions, setSessions] = useState<any[]>([]);

    useFocusEffect(
        useCallback(() => {
            const sessions = db.getAllSession() || [];
            setSessions(sessions);
        },[])
    );

    return(
        <View style={style.container}>
            <FlatList
                data={sessions}
                keyExtractor={(item) => item.id.toString()}  // unique key
                renderItem={({ item }) => (
                    <View>
                        <Text style={{color : 'white'}}>{item.id} : {item.duration} : {item.startDate} : {item.startTime}</Text>
                    </View>
                )}
            />
        </View>
    );
}