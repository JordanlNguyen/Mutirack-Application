import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Dimensions} from 'react-native';
import {TabBar} from '../components/TabBar';

export default function TabLayout() {
    return (
        <Tabs tabBar={props => <TabBar {...props}/>}>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                title: 'Home',
            }}
        />

        <Tabs.Screen
            name="practice"
            options={{
                headerShown: false,
                title: 'Practice',
            }}
        />

        <Tabs.Screen
            name="sessions"
            options={{
                headerShown: false,
                title: 'Sessions',
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                headerShown: false,
                title: 'Profile',
            }}
        />
        </Tabs>
    );
}