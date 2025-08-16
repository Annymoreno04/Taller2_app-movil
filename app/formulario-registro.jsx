import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import usuarios from "../assets/usuarios.json";
import { Stack } from 'expo-router';


export default function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmContrasena, setConfirmContrasena] = useState("");
  const [showContrasena, setShowContrasena] = useState(false);
  const [showConfirmContrasena, setShowConfirmContrasena] = useState(false);

  const registrarUsuario = () => {
    if (!nombre || !correo || !contrasena || !confirmContrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios. Por favor, llénalos todos.');
      return;
    }

    const usuarioExistente = usuarios.find(u => u.email.toLowerCase() === correo.toLowerCase());
    if (usuarioExistente) {
      Alert.alert('Error', 'Este correo ya está registrado.');
      return;
    }

    if (contrasena !== confirmContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      email: correo,
      clave: contrasena
    };

    usuarios.push(nuevoUsuario);
    Alert.alert('Éxito', 'Usuario registrado con éxito.');
  };

  return (
    <>
      <Stack.Screen options={{
        title: 'Registro de Usuario',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <ScrollView style={{ backgroundColor: "#f9f8ff" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 30 }}>Registro</Text>

          <Text variant="titleMedium" style={{ marginBottom: 7 }}>Nombre</Text>
          <TextInput
            left={<TextInput.Icon icon="account" color="#c898b6" />}
            style={{ marginBottom: 10, backgroundColor: 'white' }}
            value={nombre}
            onChangeText={setNombre}
            autoCapitalize="none"
            mode='outlined'
            theme={{ roundness: 25 }}
          />

          <Text variant="titleMedium" style={{ marginBottom: 7 }}>Correo electrónico</Text>
          <TextInput
            left={<TextInput.Icon icon="email" color="#c898b6" />}
            style={{ marginBottom: 10, backgroundColor: 'white' }}
            value={correo}
            onChangeText={setCorreo}
            autoCapitalize="none"
            mode='outlined'
            theme={{ roundness: 25 }}
          />

          <Text variant="titleMedium" style={{ marginBottom: 7 }}>Contraseña</Text>
          <TextInput
            left={<TextInput.Icon icon="lock" color="#c898b6" />}
            right={<TextInput.Icon icon={showContrasena ? "eye-off" : "eye"} onPress={() => setShowContrasena(!showContrasena)} />}
            value={contrasena}
            onChangeText={setContrasena}
            style={{ marginBottom: 10, backgroundColor: 'white' }}
            autoCapitalize="none"
            mode='outlined'
            theme={{ roundness: 25 }}
            secureTextEntry={!showContrasena}
          />

          <Text variant="titleMedium" style={{ marginBottom: 7 }}>Confirmar contraseña</Text>
          <TextInput
            left={<TextInput.Icon icon="lock" color="#c898b6" />}
            right={<TextInput.Icon icon={showConfirmContrasena ? "eye-off" : "eye"} onPress={() => setShowConfirmContrasena(!showConfirmContrasena)} />}

            value={confirmContrasena}
            onChangeText={setConfirmContrasena}
            style={{ backgroundColor: 'white' }}
            autoCapitalize="none"
            mode='outlined'
            theme={{ roundness: 25 }}
            secureTextEntry={!showConfirmContrasena}
          />

          <Button mode="contained" style={{ backgroundColor: '#dc8fbeff', borderRadius: 30, marginTop: 20, paddingVertical: 5 }} labelStyle={{ fontSize: 18 }} onPress={registrarUsuario}>
            Registrarse
          </Button>
        </View>
      </ScrollView>
    </>);
}
