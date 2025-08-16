import React, { useState } from 'react';
import { View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Searchbar } from 'react-native-paper';
import { Stack } from 'expo-router';
import elementos from "../assets/elementos.json";

export default function Home() {
  const [value, setValue] = useState('inicio');
  const [dato, setDato] = useState(elementos);
  const [buscar, setBuscar] = useState('');

  const handleSetValue = (val) => {
    setValue(val);
    if (val === 'inicio') {
      setBuscar('');
      setDato(elementos);
    }
  };

  const MostrarTodo = (index) => {
    const newData = [...dato];
    newData[index].mostrarTodo = !newData[index].mostrarTodo;
    setDato(newData);
  };

  const onChangeSearch = (query) => {
    setBuscar(query);
    if (query.trim() === '') {
      setDato(elementos);
    } else {
      const filtered = elementos.filter(item =>
        item.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setDato(filtered);
    }
  };

  return (
    <>
      <Stack.Screen options={{
        title: 'Home',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <FlatList
        contentContainerStyle={{ padding: 20, backgroundColor: '#f9f8ff', paddingTop: 20 }}
        data={dato}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              <Button
                mode={value === 'inicio' ? 'contained' : 'outlined'}
                onPress={() => handleSetValue('inicio')}
                style={{ flex: 1, marginHorizontal: 4, borderColor: '#dc8fbeff', backgroundColor: value === 'inicio' ? '#dc8fbeff' : 'transparent' }}
                labelStyle={{ color: value === 'inicio' ? 'white' : '#dc8fbeff' }}
              >
                Inicio
              </Button>
              <Button
                mode={value === 'buscar' ? 'contained' : 'outlined'}
                onPress={() => handleSetValue('buscar')}
                style={{ flex: 1, marginHorizontal: 4, borderColor: '#dc8fbeff', backgroundColor: value === 'buscar' ? '#dc8fbeff' : 'transparent' }}
                labelStyle={{ color: value === 'buscar' ? 'white' : '#dc8fbeff' }}
              >
                Buscar
              </Button>
            </View>
            {value === 'buscar' && (
              <Searchbar
                style={{ marginBottom: 16 }}
                placeholder="Buscar"
                onChangeText={onChangeSearch}
                value={buscar}
              />
            )}
            {value !== 'buscar' && (
              <Image
                source={require('../images/Manicurista.png')}
                style={{ width: '100%', height: 250, marginBottom: 24 }}
                resizeMode="contain"
              />
            )}
          </>
        }
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.urlImagen }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.description}>
              {item.mostrarTodo
                ? item.descripcion
                : item.descripcion.substring(0, 30) + '...'}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => MostrarTodo(index)}>
                <Text style={styles.buttonLabel}>
                  {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </>);

}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  buttonLabel: {
    color: '#dc8fbeff',
  },
});