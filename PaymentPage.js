import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null); // Track selected payment option

  const handlePaymentOptionSelect = (option) => {
    setSelectedPayment(option); // Set the selected payment option
  };

  const renderPaymentForm = () => {
    switch (selectedPayment) {
      case 'GCASH':
        return (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your GCash number"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your GCash PIN"
              secureTextEntry
            />
          </View>
        );
      case 'BDO':
        return (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your BDO account number"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your BDO account PIN"
              secureTextEntry
            />
          </View>
        );
      case 'VISA':
        return (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your VISA card number"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your card expiration date"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your CVV"
              secureTextEntry
            />
          </View>
        );
      case 'CHINA_BANK':
        return (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your China Bank account number"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your China Bank PIN"
              secureTextEntry
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>

      {/* Payment options */}
      <View style={styles.paymentOptions}>
        {['GCASH', 'BDO', 'VISA', 'CHINA_BANK'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.paymentButton,
              selectedPayment === option && styles.selectedPaymentButton, // Highlight selected option
            ]}
            onPress={() => handlePaymentOptionSelect(option)}
          >
            <Text
              style={[
                styles.paymentButtonText,
                selectedPayment === option && styles.selectedPaymentButtonText, // Highlight selected text
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render corresponding form */}
      {renderPaymentForm()}

      {/* Submit Button */}
      {selectedPayment && (
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Payment</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  paymentButton: {
    padding: 12,
    backgroundColor: '#ddd',
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
  },
  selectedPaymentButton: {
    backgroundColor: '#00C6AE', // Highlight selected button
  },
  paymentButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedPaymentButtonText: {
    color: '#fff', // Highlight selected text color
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#00C6AE',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentPage;
