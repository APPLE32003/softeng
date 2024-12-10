import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
  FlatList,
} from 'react-native';

const FindRoom = ({ navigation }) => {
  const [stayType, setStayType] = React.useState(true); // true for 'Stay' (Hotels), false for 'Pass'
  const [airConditioned, setAirConditioned] = React.useState(true);
  const [fanSelected, setFanSelected] = React.useState(false); // Track fan selection
  const [checkIn, setCheckIn] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  const [adults, setAdults] = React.useState('');
  const [children, setChildren] = React.useState('');
  const [rooms, setRooms] = React.useState('');
  const [selectedHotel, setSelectedHotel] = React.useState(null); // Track selected hotel

  const hotelsData = [
    { id: '1', name: 'The Loop Towers' },
    { id: '2', name: 'N Hotel' },
    { id: '3', name: 'FB Budgetel Suites' },
    { id: '4', name: 'FB Dormitel' },
    { id: '5', name: 'De Luxe Hotel' },
    { id: '6', name: 'Ultra Winds Mountain Resort' },
    { id: '7', name: 'Bridge Hotel' },
    { id: '8', name: 'Miami Inn' },
    { id: '9', name: 'Gardens of Malasag Eco-Tourism' },
    { id: '10', name: 'Seda Centrio' },
    { id: '11', name: 'The Pacifico Boutique Hotel' },
    { id: '12', name: 'RedDoorz near Lapasan Plaza' },
    { id: '13', name: 'The VIP Hotel' },
    { id: '14', name: 'Hotel Sogo - Cagayan De Oro' },
    { id: '15', name: 'RedDoorz @ Camaman-An' },
    { id: '16', name: 'Chali Resort & Conference Center' },
    { id: '17', name: 'Win Min Transient Inn' },
    { id: '18', name: 'Red Planet Cagayan De Oro' },
    { id: '19', name: 'Grand City Hotel' },
    { id: '20', name: 'Mallberry Suites' },
    { id: '21', name: 'New Dawn Hotel Plus' },
    { id: '22', name: 'Bridge Hotel Express' },
    { id: '23', name: 'New Dawn Pensionne' },
    { id: '24', name: 'Demiren Hotel' },
    { id: '25', name: 'GC Suites' },
  ];

  const handleHotelPress = (hotelName) => {
    setSelectedHotel(hotelName); // Set the selected hotel
  };

  const renderHotelItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.hotelItem,
        selectedHotel === item.name && styles.selectedHotelItem, // Apply selected style
      ]}
      onPress={() => handleHotelPress(item.name)}
    >
      <Text
        style={[
          styles.hotelItemText,
          selectedHotel === item.name && styles.selectedHotelText, // Apply selected text style
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Stay/Pass Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Stay</Text>
        <Switch value={stayType} onValueChange={setStayType} />
        <Text style={styles.switchLabel}>Pass</Text>
      </View>

      {/* Hotels Tab */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, stayType && styles.activeTab]}>
          <Text style={stayType ? styles.activeTabText : styles.tabText}>Hotels</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal List of Hotel Names */}
      <FlatList
        data={hotelsData}
        horizontal
        renderItem={renderHotelItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.hotelListContainer}
      />

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
          onPress={() => setFanSelected(!fanSelected)}
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

      {/* Pay Button */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => navigation.navigate('PaymentPage')} // Navigate to PaymentPage
      >
        <Text style={styles.searchButtonText}>PAY</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
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
  hotelListContainer: {
    paddingVertical: 8,
  },
  hotelItem: {
    backgroundColor: '#ddd',
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  selectedHotelItem: {
    backgroundColor: '#00C6AE', // Highlight background color when selected
  },
  hotelItemText: {
    fontSize: 14,
    color: '#333',
  },
  selectedHotelText: {
    color: '#fff', // Highlight text color when selected
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
    backgroundColor: '#007BFF',
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
});

export default FindRoom;
