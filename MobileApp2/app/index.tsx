import { View, Button, Text, Pressable} from 'react-native';
import style from '../src/style';
import { router , Redirect} from 'expo-router';

export default function Index() {
  return <Redirect href="/(tabs)" />; //tabs 
}