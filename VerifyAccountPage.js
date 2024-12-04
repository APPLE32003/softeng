import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function VerifyAccountPage({ navigation }) {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerify = () => {
        // Handle the verification process here
        // Log the code for debugging and navigate to the FindRoom page
        console.log(`Verification code: ${verificationCode}`);
        
        // Navigate to the FindRoom page after successful verification
        navigation.navigate('FindRoom');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Your Account</Text>
            <Text style={styles.message}>We’ve sent a verification code to your email address. Please enter it below.</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter verification code"
                placeholderTextColor="#888"
                value={verificationCode}
                onChangeText={setVerificationCode}
                keyboardType="numeric"
                maxLength={6}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleVerify} // Handle account verification on press
            >
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.linkButton}
                onPress={() => navigation.navigate('ResendCode')} // Navigate to Resend Code page
            >
                <Text style={styles.linkText}>Resend Code</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.linkButton}
                onPress={() => navigation.navigate('Login')} // Navigate back to Login page
            >
                <Text style={styles.linkText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00d4ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0055ff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkButton: {
        marginTop: 10,
    },
    linkText: {
        color: '#fff',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});
