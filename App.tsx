import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import WelcomePage from './WelcomePage';
import SignInPage from './SignInPage';
import VerifyAccountPage from './VerifyAccountPage';
import FindRoom from './FindRoom';

// Create the Stack Navigator
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">
            
                <Stack.Screen
                     name="FindRoom" 
                     component={FindRoom} 
                     options={{ title: 'Find Room' }} />

                <Stack.Screen 
                    name="LandingPage" 
                    component={LandingPage} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="SignUpPage" 
                    component={SignUpPage} 
                    options={{ title: 'Sign Up' }}
                />
                
                <Stack.Screen
                    name="Welcome"
                    component={WelcomePage}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="SignInPage"
                    component={SignInPage}
                    options={{ title: 'Sign In' }}
                />
                <Stack.Screen
                    name="VerifyAccountPage"
                    component={VerifyAccountPage}
                    options={{ title: 'Verify' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
