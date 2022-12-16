import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Books from './components/Books';
import Favorites from './components/Favorites';
import { BookProvider } from './context/BookContext';
import BooksNavigation from './navigation/BooksNavigation';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BookProvider>
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'cornflowerblue'},
            headerTintColor: 'white',
            activeTintColor: 'hsl(275, 100%, 23%)', 
            inactiveTintColor: 'hsl(275, 15%, 60%)',
            style: {backgroundColor: 'hsl(275, 100%, 93%)'}
          }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Books" component={BooksNavigation} options={{headerShown:false}} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
    </BookProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
