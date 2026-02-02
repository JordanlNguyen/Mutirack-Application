import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import React from 'react';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex : 1, backgroundColor : '#2c2e33'}}>
        {/* Stack handles screen navigation for Expo Router */}
        <Stack
          screenOptions={{
            headerShown: false, // hide default header, you can enable later if needed
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}