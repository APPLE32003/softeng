import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
                    <TextInput placeholder="Full Name" style={styles.input} />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="envelope" size={20} color="#666" style={styles.icon} />
                    <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="phone" size={20} color="#666" style={styles.icon} />
                    <TextInput placeholder="+63" style={styles.input} keyboardType="phone-pad" />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
                    <TextInput placeholder="Password" style={styles.input} secureTextEntry />
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Welcome')} // Navigate to the Welcome page
                >
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or sign in using</Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]} >
                        <Text style={styles.socialButtonText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.footerText}>
                    By creating an account, you agree to our <Text style={styles.link}>Terms</Text>
                </Text>
                <Text style={styles.signInText}>
                    Already have an account? <Text style={styles.link} onPress={() => navigation.navigate('SignInPage')}>Sign In</Text>
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
    signInText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
});
