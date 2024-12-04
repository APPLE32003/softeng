import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, Image } from 'react-native';

const FindRoom = ({ navigation }) => {
  const [stayType, setStayType] = React.useState(true); // true for 'Stay' (Hotels), false for 'Pass'
  const [airConditioned, setAirConditioned] = React.useState(true);
  const [fanSelected, setFanSelected] = React.useState(false); // Track fan selection
  const [checkIn, setCheckIn] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [children, setChildren] = React.useState('');
  const [rooms, setRooms] = React.useState('');

  // Function to toggle fan selection
  const toggleFan = () => {
    setFanSelected(!fanSelected);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Stay/Pass Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Stay</Text>
        <Switch value={stayType} onValueChange={setStayType} />
        <Text style={styles.switchLabel}>Pass</Text>
      </View>

      {/* Hotels Tab (Villas removed) */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, stayType && styles.activeTab]}>
          <Text style={stayType ? styles.activeTabText : styles.tabText}>Hotels</Text>
        </TouchableOpacity>
      </View>

      {/* Location Input */}
      <TextInput style={styles.input} placeholder="Where do you want" />

      {/* Check-in Date & Time */}
      <TextInput
        style={styles.input}
        placeholder="Check-in date & time (e.g., 2024-12-10 14:00)"
        value={checkIn}
        onChangeText={setCheckIn}
      />

      {/* Check-out Date & Time */}
      <TextInput
        style={styles.input}
        placeholder="Check-out date & time (e.g., 2024-12-12 11:00)"
        value={checkOut}
        onChangeText={setCheckOut}
      />

      {/* Guests Selection: Adults, Children, Rooms */}
      <View style={styles.guestInputContainer}>
        <TextInput
          style={[styles.guestInput, styles.input]}
          placeholder="Adults"
          keyboardType="numeric"
          value={adults}
          onChangeText={setAdults}
        />
        <TextInput
          style={[styles.guestInput, styles.input]}
          placeholder="Children"
          keyboardType="numeric"
          value={children}
          onChangeText={setChildren}
        />
        <TextInput
          style={[styles.guestInput, styles.input]}
          placeholder="Rooms"
          keyboardType="numeric"
          value={rooms}
          onChangeText={setRooms}
        />
      </View>

      {/* Fan/Air Conditioned */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleOption, fanSelected && styles.activeOption]} 
          onPress={toggleFan}
        >
          <Text>Fan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleOption, airConditioned && styles.activeOption]} 
          onPress={() => setAirConditioned(!airConditioned)}
        >
          <Text style={airConditioned ? styles.activeTabText : {}}>Air conditioned</Text>
        </TouchableOpacity>
      </View>

      {/* Search Button */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => alert(`Searching with Check-in: ${checkIn}, Check-out: ${checkOut}`)}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {/* Space for Best Places / Hotels */}
      <View style={styles.bestPlacesContainer}>
        <Text style={styles.bestPlacesTitle}>Best Places to Stay</Text>

        {/* Example Hotel 1 */}
        <View style={styles.placeItem}>
          <Image 
            style={styles.placeImage} 
            source={{ uri: 'https://your-image-url.com/hotel1.jpg' }} 
          />
          <Text style={styles.placeText}>Hotel Paradise</Text>
        </View>

        {/* Example Hotel 2 */}
        <View style={styles.placeItem}>
          <Image 
            style={styles.placeImage} 
            source={{ uri: 'https://your-image-url.com/hotel2.jpg' }} 
          />
          <Text style={styles.placeText}>Ocean View Resort</Text>
        </View>

        {/* Example Hotel 3 */}
        <View style={styles.placeItem}>
          <Image 
            style={styles.placeImage} 
            source={{ uri: 'https://your-image-url.com/hotel3.jpg' }} 
          />
          <Text style={styles.placeText}>Mountain Retreat</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  switchLabel: {
    marginHorizontal: 8,
    fontSize: 16,
    color: '#333',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Adjusted to center the Hotels tab
    marginVertical: 16,
  },
  tab: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007BFF',
  },
  tabText: {
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
  },
  guestInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guestInput: {
    flex: 1,
    marginHorizontal: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  toggleOption: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  activeOption: {
    backgroundColor: '#007BFF', // Highlighted background color
  },
  searchButton: {
    backgroundColor: '#00C6AE',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bestPlacesContainer: {
    marginTop: 30, // Space between search button and best places section
  },
  bestPlacesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  placeItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  placeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  placeText: {
    fontSize: 18,
    color: '#333',
  },
});

export default FindRoom;
