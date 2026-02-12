import {
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import services from "./src/services";
import style from "./src/style";


function Index() {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isLogin, setIsLogin] = useState(1);

  function directHome() {
    router.push('/(tabs)')
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
            if (isLogin) {
              results = await services.login(userName, password);
            } else {
              results = await services.register(userName, password, name, number);
            }
            console.log("results: ", results);
            if (results === 200) {
              return directHome();
            }
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>{isLogin ? "Login" : "Register"}</Text>
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
    position: "absolute",
    top: 100,
  },
  textInputs: {
    borderBottomWidth: 1,
    fontSize: 20,
    borderColor: "white",
    width: "75%",
    color: "white",
    margin: 10,
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
    backgroundColor: "#78837d",
    width: "75%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    position: "absolute",
    bottom : 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Index;
