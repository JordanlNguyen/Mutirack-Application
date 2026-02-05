import { StyleSheet, View, Button, Text, Pressable, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import style from '../src/style';
import {useState} from 'react'
import { router , Redirect} from 'expo-router';


function Index() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isLogin, setIsLogin] = useState(1);

  async function login(un, pw){
    const url = "http://10.0.2.2:3000/users/login"
    try {
      const response = await fetch(url, {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userName: un, password: pw})
      })
      console.log(response.status)
      return
    }catch(error){
      console.log("error: " ,error)
      return
    }
  }


  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
          <Text style={localStyle.title}>Musitrack</Text>
          <TextInput
            placeholder="UserName"
            placeholderTextColor='grey'
            onChangeText={setUserName}
            style={localStyle.textInputs}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor='grey'
            onChangeText={setPassword}
            style={localStyle.textInputs}
          />
          {!isLogin ? <TextInput placeholder="Name" style={localStyle.textInputs} placeholderTextColor='grey'/> : null}
          {!isLogin ? <TextInput placeholder="phone number" style={localStyle.textInputs} placeholderTextColor='grey' keyboardType='numeric' maxLength={8}/> : null}
          <View style={localStyle.loginRegisterSwitchPanel}>
            <Pressable><Text style={{ color : isLogin ? 'white' : 'grey',fontSize : 18}} onPress={() => setIsLogin(1)}> Login </Text></Pressable>
            <Pressable><Text style={{ color : isLogin ? 'grey' : 'white',fontSize : 18}} onPress={() => setIsLogin(0)}> Register</Text></Pressable>
          </View>
          <Pressable style={localStyle.submitButton} onPress={() => login(userName, password)}><Text>Submit</Text></Pressable>
        </View>
    </TouchableWithoutFeedback>
  );
  // return <Redirect href="/(tabs)" />; //tabs 
}

const localStyle = StyleSheet.create({
  title : {
    color : 'white',
    fontSize : 50,
  },
  textInputs : {
    borderBottomWidth : 1,
    fontSize : 20,
    borderColor : 'white',
    width : '75%',
    color : 'white'
  },
  loginRegisterSwitchPanel : {
    width : '65%',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 30,
    margin : 30,
    bottom : 0,
    position : 'absolute'
  },
  submitButton : {
    margin : 50,
    backgroundColor : 'red',
    width : '75%',
    height : 40,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 16
  }
});

export default Index