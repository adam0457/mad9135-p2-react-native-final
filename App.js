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
import Chart from './components/Chart';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BookProvider>
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'hsl(349,100%,24%)'},
            headerTintColor: 'white',
            activeTintColor: 'hsl(275, 100%, 23%)', 
            inactiveTintColor: 'hsl(275, 15%, 60%)',
            
          }}

          
      >
        <Tab.Screen name="Books" component={BooksNavigation} options={{
          headerShown:false,
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name="open-book" size={24} color = "hsl(349,100%,24%)" /> )

          }}
          />
        <Tab.Screen name="Favorites" component={Favorites}  options={{
                                        tabBarIcon: ({ focused, size, color }) => (
                                          <MaterialIcons name= "favorite-outline" size={24} color="hsl(349,100%,24%)" />
                                      ),
                                    }} />
        <Tab.Screen name="Cart" component={Chart}  options={{
                                        tabBarIcon: ({ focused, size, color }) => (
                                        <MaterialCommunityIcons name="cart-outline" size={24} color = "hsl(349,100%,24%)" />
                                      ),
                                    }} />
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
