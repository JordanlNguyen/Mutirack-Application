import {View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import style from "../src/style";
import services from "../src/services";
import { router } from "expo-router";
import React from "react";

export default function AddPiece() {

    const [pieceName, setPieceName] = React.useState("");
    const [pieceComposer, setPieceComposer] = React.useState("");
    const [pieceInstrument, setPieceInstrument] = React.useState("");

    return(
        <View style={style.container}>


            <TextInput
                style={localStyle.input}
                placeholder="Enter piece name"
                placeholderTextColor="#ffffff6e"
                onChangeText={setPieceName}
            />
            <TextInput
                style={localStyle.input}
                placeholder="Enter piece Composer"
                placeholderTextColor="#ffffff6e"
                onChangeText={setPieceComposer}
            />
            <TextInput
                style={localStyle.input}
                placeholder="Enter piece instrument"
                placeholderTextColor="#ffffff6e"
                onChangeText={setPieceInstrument}
            />

            <Pressable
                style={localStyle.button}
                onPress={async () => {
                    await services.addPiece({
                        title: pieceName,
                        composer: pieceComposer,
                        instrument: pieceInstrument
                    });
                    router.replace("/profile");
                }}
            >
                <Text>Save</Text>
            </Pressable>
        </View>
    )
}

const localStyle = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'white',
        width: "80%"
    },
    button: {
        backgroundColor: "#ffffff6e",
        padding: 10,
        marginTop: 20,
        width: "80%",
        alignItems: "center",
        justifyContent: "center"
    }
})