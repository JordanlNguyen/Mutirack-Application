import { View, Text, TextInput} from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import style from '../style';

export default function PracticeCompletionScreen() {

    useEffect(() => {
    // Redirect after 3 seconds (3000 ms)
    const timer = setTimeout(() => {
        router.dismissAll();
        router.replace('/Home'); // or router.replace('/home') to prevent going back
    }, 3000);

    // Cleanup the timer if the component unmounts early
    return () => clearTimeout(timer);
    }, []);

    return (
        <View style={style.container}>
            <Text style={style.title}>Practice Completed</Text>
        </View>
    );
}