import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { List, Avatar, Searchbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import usuarios from "../assets/usuarios.json";
import { Stack } from 'expo-router';

export default function ListaUsuarios() {
  const [filtro, setFiltro] = useState('');
  const router = useRouter();

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    usuario.email.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Stack.Screen options={{
        title: 'Lista de Usuarios',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />

      <View style={{ flex: 1, padding: 20, backgroundColor: "#f9f8ff" }}>
        <Searchbar
          style={{ marginBottom: 16 }}
          placeholder="Buscar usuario"
          value={filtro}
          onChangeText={setFiltro}
        />

        <FlatList
          data={usuariosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <List.Item
              title={item.nombre}
              description={item.email}
              left={() => <Avatar.Text label={item.nombre[0]} size={40} style={{ backgroundColor: '#dc8fbeff' }} />}
              onPress={() =>
                router.push({
                  pathname: "/perfil-usuario",
                  params: { id: item.id.toString() },
                })
              }
              style={{
                backgroundColor: '#fff',
                padding: 16,
                borderRadius: 12,
                marginBottom: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 2,
              }}
            />
          )}
        />
      </View>
    </>);
}
