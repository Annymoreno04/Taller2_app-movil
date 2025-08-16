import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import usuarios from "../assets/usuarios.json";
import { Stack } from 'expo-router';

export default function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContrasena, setMostrarContrasena] = useState(false);



  const buscarUsuario = () => {

    if (!correo || correo.trim() === '') {
      Alert.alert("Campo requerido", "Por favor ingrese su correo electrónico");
      return;
    }

    if (!contrasena || contrasena.trim() === '') {
      Alert.alert("Campo requerido", "Por favor ingrese su contraseña");
      return;
    }

    const usuarioEncontrado = usuarios.find(
      (u) => u.email.toLowerCase() === correo.toLowerCase() && u.clave === contrasena
    );

    if (usuarioEncontrado) {
      Alert.alert(
        "Usuario encontrado",
        `Bienvenid@ ${usuarioEncontrado.nombre}\nCorreo: ${usuarioEncontrado.email}`
      );
    } else {
      Alert.alert("No encontrado", "No existe un usuario con este correo y contraseña.");
    }
  };


  return (
    <>
      <Stack.Screen options={{
        title: 'Iniciar sesión',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <ScrollView style={{ flex: 1, backgroundColor: '#f9f8ff' }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: "#f9f8ff" }}>
          <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>INICIAR SESIÓN</Text>

          <TextInput
            label="Correo electrónico"
            value={correo}
            onChangeText={setCorreo}
            left={<TextInput.Icon icon="email" color='#c898b6' />}
            style={{ marginBottom: 15, backgroundColor: 'white' }}
            autoCapitalize="none"
            mode='outlined'
            theme={{ roundness: 20 }}
          />

          <TextInput
            label="Contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry={!mostrarContrasena}
            left={<TextInput.Icon icon="lock" color="#c898b6" />}
            right={
              <TextInput.Icon
                icon={mostrarContrasena ? "eye-off" : "eye"}
                onPress={() => setMostrarContrasena(!mostrarContrasena)}
              />
            }
            style={{ marginBottom: 15, backgroundColor: 'white' }}
            mode="outlined"
            theme={{ roundness: 20 }}
          />

          <Text style={{ color: '#a18cf0', textAlign: 'right', marginBottom: 20, marginTop: 5, fontSize: 13 }}>
            ¿Olvidaste tu contraseña?
          </Text>

          <Button mode="contained" style={{ backgroundColor: '#dc8fbeff', borderRadius: 30, marginBottom: 20, paddingVertical: 5 }} labelStyle={{ fontWeight: 'bold', fontSize: 18 }} onPress={buscarUsuario}>
            INICIAR SESIÓN
          </Button>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#bbb' }} />
            <Text style={{ marginHorizontal: 8, color: '#bbb', fontWeight: 'bold' }}>O</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: '#bbb' }} />
          </View>

          <TextInput
            label="Iniciar sesión con Google"
            mode="outlined"
            disabled={true}
            left={<TextInput.Icon icon="google" />}
            style={{ backgroundColor: 'white' }}
            theme={{ roundness: 20, colors: { text: '#000' } }}
          />

          <TextInput
            label="Iniciar sesión con Apple"
            mode="outlined"
            disabled={true}
            left={<TextInput.Icon icon="apple" />}
            style={{ marginBottom: 5, backgroundColor: 'white' }}
            theme={{ roundness: 20, colors: { text: '#000' } }}
          />

        </View>
      </ScrollView>
    </>);
}
