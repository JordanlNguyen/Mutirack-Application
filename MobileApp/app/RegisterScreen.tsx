import {View, Text, TextInput, Button, Pressable} from 'react-native';
import React from 'react';
import {router} from 'expo-router';
import { useState } from 'react';
import style from './style';
import { BASE_URL } from '../config';
import tocken from '../tockenServices';

export default function RegisterScreen(){

    const [username, setUsername] = useState('');
    const [first_name, setFirstName] =useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [verify_password, setVerifyPassword] = useState('');

    function registerUser(){
        fetch(`${BASE_URL}/user/register`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify({username, first_name, last_name, password})
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === "success"){
                tocken.setTocken(data.tocken);
                router.replace('/Home');
            } else {
                console.error("Login failed:", data.message);
            }
        })
        .catch(err => console.error(err));
    }

    return(
        <View style={style.container}>
            <View>
                <Button
                    title="Go Back"
                    onPress={() => router.back()}
                />
            </View>
            <Text style={style.registerTitle}> Register </Text>
                <View style={style.spacing}/>
                {/*user name text field*/}
                <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> Username </Text> </View>
                <TextInput
                    style={style.textField}
                    onChangeText={setUsername}
                />
                <View style={style.spacing}/>

                {/* first_name*/}
                <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> First Name </Text> </View>
                <TextInput
                    style={style.textField}
                    onChangeText={setFirstName}
                />
                <View style={style.spacing}/>

                {/* last_name*/}
                <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> Last Name </Text> </View>
                <TextInput
                    style={style.textField}
                    onChangeText={setLastName}
                />
                <View style={style.spacing}/>

                {/* password*/}
                <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> Password </Text> </View>
                <TextInput
                    style={style.textField}
                    onChangeText={setPassword}
                />
                <View style={style.spacing}/>

                {/* password verfification */}
                <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> Verify Password </Text> </View>
                <TextInput
                    style={style.textField}
                    onChangeText={setVerifyPassword}
                />
                <View style={style.spacing}/>
                {/* login button */}
                <Pressable style={style.welcomeButtons} onPress={registerUser}>
                    <Text style={{fontSize : 20, fontWeight : 'bold', fontFamily : 'serif'}}> Register </Text>
                </Pressable>
        </View>
    );
}