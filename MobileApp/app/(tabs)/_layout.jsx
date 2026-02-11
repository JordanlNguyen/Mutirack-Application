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
                headerShadowVisible : false,
                headerTitleAlign : 'center',
                title: 'Home',
                headerStyle : {
                    backgroundColor : '#2c2e33',
                    height : 50
                },
                headerTintColor : '#5c5d5f',
                headerTitleStyle : {
                    alignSelf : 'center',
                    fontFamily : 'serif'
                },
                headerStatusBarHeight : 0
            }}
        />

        <Tabs.Screen
            name="practice"
            options={{
                headerShadowVisible : false,
                headerTitleAlign : 'center',
                title: 'Practice',
                headerStyle : {
                    backgroundColor : '#2c2e33',
                    height : 50
                },
                headerTintColor : '#5c5d5f',
                headerTitleStyle : {
                    alignSelf : 'center',
                    fontFamily : 'serif'
                },
                headerStatusBarHeight : 0
            }}
        />

        <Tabs.Screen
            name="sessions"
            options={{
                headerShadowVisible : false,
                headerTitleAlign : 'center',
                title: 'Sessions',
                headerStyle : {
                    backgroundColor : '#2c2e33',
                    height : 50
                },
                headerTintColor : '#5c5d5f',
                headerTitleStyle : {
                    alignSelf : 'center',
                    fontFamily : 'serif'
                },
                headerStatusBarHeight : 0
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                headerShadowVisible : false,
                headerTitleAlign : 'center',
                title: 'Profile',
                headerStyle : {
                    backgroundColor : '#2c2e33',
                    height : 50
                },
                headerTintColor : '#5c5d5f',
                headerTitleStyle : {
                    alignSelf : 'center',
                    fontFamily : 'serif'
                },
                headerStatusBarHeight : 0
            }}
        />
        </Tabs>
    );
}