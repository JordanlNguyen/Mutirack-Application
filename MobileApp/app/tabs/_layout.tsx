import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Dimensions} from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarStyle: style.bar,
            tabBarActiveTintColor: '#E6E8EB',
            tabBarInactiveTintColor: '#8B9099',
            headerShown: false,
        }}
        >
        <Tabs.Screen
            name="index"
            options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
            ),
            }}
        />

        {/* <Tabs.Screen
            name="practice"
            options={{
            title: 'Practice',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="alarm" size={size} color={color} />
            ),
            }}
        /> */}
        </Tabs>
    );
}

const style = StyleSheet.create({
    bar : {
        backgroundColor: '#23252A',
        borderTopColor: 'transparent',
        position : 'absolute',
        bottom : 20
    }
});