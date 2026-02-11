import {View, Text} from 'react-native';
import {useEffect} from 'react';
import {router} from 'expo-router';

export default function compeltion(){
    useEffect (() => {
        const timer = setTimeout(() => {
            router.replace('/(tabs)');
        }, 3000);
    }, []);

    return(
        <View>
            <Text>Completed Session</Text>
        </View>
    );
}