import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { db } from '../databaseModule';
import style from './style';

export default function AddNewPieceScreen() {
    const [name, setName] = useState('');
    const [composer, setComposer] = useState('');
    const [instrumentation, setInstrumentation] = useState('');
    const router = useRouter();

    const handleAddPiece = () => {
        if (!name.trim() || !composer.trim() || !instrumentation.trim()) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        db.addPiece(name.trim(), composer.trim(), instrumentation.trim());
        Alert.alert('Success', 'Piece added successfully');
        setName('');
        setComposer('');
        setInstrumentation('');
        router.back();
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>Add New Piece</Text>
            <TextInput
                style={style.input}
                placeholder="Piece Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={style.input}
                placeholder="Composer"
                value={composer}
                onChangeText={setComposer}
            />
            <TextInput
                style={style.input}
                placeholder="Instrumentation"
                value={instrumentation}
                onChangeText={setInstrumentation}
            />
            <Pressable style={style.button} onPress={handleAddPiece}>
                <Text style={style.buttonText}>Add Piece</Text>
            </Pressable>
        </View>
    );
}