import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function LandingPage({ navigation }) { // Add navigation prop
    return (
        <ImageBackground 
            source={require('./assets/bg.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <StatusBar style="light" />
            <View style={styles.overlay}>
                <View style={styles.header}>
                    <Text style={styles.title}>Hotel Quest</Text>
                    <Text style={styles.subtitle}>Find your perfect stay, anywhere, anytime.</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('SignUpPage')} // Navigate to SignUpPage
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 18,
        color: '#d1e7ff',
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#ffaa00',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LandingPage;
