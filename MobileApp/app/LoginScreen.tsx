import React, {useState} from 'react';
import {Text, View, TextInput, Pressable} from 'react-native';
import {router} from 'expo-router';
import style from './style';
import {BASE_URL} from '../config';
import tocken from '../tockenServices';
 

function LoginScreen(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    {/* login user method */}
    function loginUser(){
        console.log("login in user");
        fetch(`${BASE_URL}/user/login`, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify({username, password})
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
        <Text style={style.loginTitle}>Login</Text>
        <View style={style.spacing}/>
        {/*user name text field*/}
        <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> Username </Text> </View>
        <TextInput
            style={style.textField}
            value={username}
            onChangeText={setUsername}
        />
        <View style={style.spacing}/>
        {/* password text field */}
        <View style={style.textFieldContainer}> <Text style={style.textFieldHeader}> Password </Text> </View>
        <TextInput
            style={style.textField}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />
        <View style={style.spacing}/>
        {/* login button */}
        <Pressable style={style.welcomeButtons} onPress={loginUser}>
            <Text style={{fontSize : 20, fontWeight : 'bold', fontFamily : 'serif'}}> Login </Text>
        </Pressable>
    </View>
    );
}

export default LoginScreen;