import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import './global.css';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.safeArea}>
        <StatusBar
          backgroundColor="#ffc0cb"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <View className="flex-1 bg-black">
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#b0a4b3',
  },
});