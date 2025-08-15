import { View } from 'react-native';
import {FlatList, StyleSheet  } from 'react-native';
import { router, Stack } from 'expo-router';
import { List, TouchableRipple } from 'react-native-paper';



const pantallas = [
  {
    title: "Autor",
    icon: "account-circle",
    route: "autor",
    color: "#f36e9c",
  },
  {
    title: "Inicio de sesión",
    icon: "lock",
    route: "inicio-sesion",
    color: "#ed82b2",
  },
  {
    title: "Pantalla principal",
    icon: "home",
    route: "pantalla-principal",
    color: "#7ca9f3",
  },
  {
    title: "Lista de elementos",
    icon: "format-list-bulleted",
    route: "lista-elementos",
    color: "#f36e9c",
  },
  {
    title: "Detalle de elemento",
    icon: "account",
    route: "detalle-elemento",
    color: "#a18cf0",
  },
  {
    title: "Formulario de registro",
    icon: "cog",
    route: "formulario-registro",
    color: "#bdbdbd",
  },
  {
    title: "Configuración",
    icon: "account",
    route: "configuracion",
    color: "#bdbdbd",
  },
  {
    title: "Perfil de usuario",
    icon: "account",
    route: "lista-usuario",
    color: "#bdbdbd",
  },
  {
    title: "Lista de servicios",
    icon: "book",
    route: "lista-servicios",
    color: "#7ca9f3",
  }
];

export default function App() {
  return (
    <>
      <Stack.Screen options={{
        title: 'Pantallas',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />

      <View style={{ flex: 1, backgroundColor: "#f9f8ff", padding: 20 }}>
        <FlatList
          data={pantallas}
          keyExtractor={(item) => item.route}
          renderItem={({ item }) => (
            <TouchableRipple
              onPress={() => router.push(item.route)}
              rippleColor="rgba(0,0,0,0.08)"
            >
              <List.Item
                title={item.title}
                titleStyle={styles.itemTitle}
                style={styles.itemContainer}
                left={(props) => (
                  <List.Icon {...props} icon={item.icon} color={item.color} />
                )}
                right={(props) => (
                  <List.Icon {...props} icon="chevron-right" color="#A5AEBC" />
                )}
              />
            </TouchableRipple>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 24,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});