import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SignInPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Logic for signing in can go here, like calling an API to validate the credentials
        // If successful, navigate to the VerifyAccountPage
        navigation.navigate('VerifyAccountPage');  // Navigate to the VerifyAccountPage for identity verification
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="envelope" size={20} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Email" 
                        style={styles.input} 
                        keyboardType="email-address" 
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Password" 
                        style={styles.input} 
                        secureTextEntry 
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('VerifyAccountPage')}  // Updated to match the correct screen name
                >
                 <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or sign up using</Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
                        <Text style={styles.socialButtonText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.footerText}>
                    By signing in, you agree to our <Text style={styles.link}>Terms</Text>
                </Text>
                <Text style={styles.signUpText}>
                    Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('SignUpPage')}>Sign Up</Text>
                </Text>
            </View>
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
    form: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 15,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#0055ff',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    orText: {
        marginVertical: 15,
        fontSize: 14,
        color: '#666',
    },
    socialButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    socialButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    socialButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    footerText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginVertical: 15,
    },
    link: {
        color: '#0055ff',
    },
    signUpText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
});
