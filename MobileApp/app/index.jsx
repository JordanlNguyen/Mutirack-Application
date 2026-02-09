import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import * as Keychain from "react-native-keychain";
import style from "./src/style";


function Index() {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isLogin, setIsLogin] = useState(1);
  const router = useRouter();

  function directHome() {
    router.push({
      pathname: "/(tabs)/index",
    });
  }

  async function storeToken(token) {
    await Keychain.setGenericPassword(token);
  }

  async function login(un, pw) {
    const url = "http://10.0.2.2:3000/users/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: un, password: pw }),
      });
      await storeToken(response.data.token);
      return response.status;
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function register(un, pw, nm, pn) {
    const url = "http://10.0.2.2:3000/users/register";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: un,
          password: pw,
          name: nm,
          phonenumber: pn,
        }),
      });
      console.log(await response.text());
    } catch (error) {
      console.log(error);
    } finally {
      return;
    }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        <Text style={localStyle.title}>Musitrack</Text>
        <TextInput
          placeholder="UserName"
          placeholderTextColor="grey"
          onChangeText={setUserName}
          style={localStyle.textInputs}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor="grey"
          onChangeText={setPassword}
          style={localStyle.textInputs}
        />
        {!isLogin ? (
          <TextInput
            placeholder="Name"
            style={localStyle.textInputs}
            placeholderTextColor="grey"
            onChangeText={setName}
          />
        ) : null}
        {!isLogin ? (
          <TextInput
            placeholder="phone number"
            style={localStyle.textInputs}
            placeholderTextColor="grey"
            onChangeText={setNumber}
            keyboardType="numeric"
            maxLength={10}
          />
        ) : null}
        <View style={localStyle.loginRegisterSwitchPanel}>
          <Pressable>
            <Text
              style={{ color: isLogin ? "white" : "grey", fontSize: 18 }}
              onPress={() => setIsLogin(1)}
            >
              {" "}
              Login{" "}
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{ color: isLogin ? "grey" : "white", fontSize: 18 }}
              onPress={() => setIsLogin(0)}
            >
              {" "}
              Register
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={localStyle.submitButton}
          onPress={async () => {
            var results = 0;
            console.log("pressed");
            if (isLogin) {
              results = await login(userName, password);
            } else {
              results = await register(userName, password, name, number);
            }
            console.log(results);
            if (results === 200) {
              console.log("going home");
              return directHome();
            }
          }}
        >
          <Text>Submit</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
  // return <Redirect href="/(tabs)" />; //tabs
}

const localStyle = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 50,
  },
  textInputs: {
    borderBottomWidth: 1,
    fontSize: 20,
    borderColor: "white",
    width: "75%",
    color: "white",
  },
  loginRegisterSwitchPanel: {
    width: "65%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    margin: 30,
    bottom: 0,
    position: "absolute",
  },
  submitButton: {
    margin: 50,
    backgroundColor: "red",
    width: "75%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});

export default Index;
