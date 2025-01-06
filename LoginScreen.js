import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://TU_SERVIDOR:3000/api/users/login', {
        email,
        password
      });
      alert(response.data.message);
      // Aquí podrías guardar el token en AsyncStorage o context
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <View>
      <Text>Correo:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Contraseña:</Text>
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
