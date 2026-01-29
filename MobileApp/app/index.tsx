import { View, Button, Text, Pressable} from 'react-native';
import style from './style';
import { router , Redirect} from 'expo-router';

export default function Index() {
  // return <Redirect href="/tabs" />; //tabs 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World</Text>
    </View>
  );
}