import { View, Button, Text, Pressable} from 'react-native';
import style from './style';
import { router , Redirect} from 'expo-router';

export default function Index() {
  return <Redirect href="/Home" />;
    // <View style={style.container}>
    // <Text style={style.welcomeTitle}>Musitrack</Text>
    //     <View style={style.welcomeButtonContainer}>
    //       <Pressable style={style.welcomeButtons} onPress={() => router.push('/LoginScreen')}>
    //         <Text style={{fontSize : 20, fontWeight : 'bold', fontFamily : 'serif'}}> Login </Text>
    //       </Pressable>
    //       <Pressable style={[style.welcomeButtons, {backgroundColor : 'grey'}]} onPress={() => router.push('/RegisterScreen')}>
    //         <Text style={{fontSize : 20, fontWeight : 'bold', fontFamily : 'serif'}}> Register </Text>
    //       </Pressable>
    //     </View>
    // </View>
    // );
}