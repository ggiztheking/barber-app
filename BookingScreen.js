import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';

export default function BookingScreen() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const bookAppointment = async () => {
    try {
      const response = await axios.post('http://TU_SERVIDOR:3000/api/appointments', {
        clientName,
        service: 'Corte Fade',
        date,
        time,
        phoneNumber
      });
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert('Error al crear cita');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={clientName}
        onChangeText={setClientName}
      />
      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Selecciona Fecha:</Text>
      <Calendar
        onDayPress={(day) => setDate(day.dateString)}
      />
      <Text style={styles.label}>Hora (ej: 15:00):</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />
      <Button title="Reservar" onPress={bookAppointment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  label: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5
  }
});
