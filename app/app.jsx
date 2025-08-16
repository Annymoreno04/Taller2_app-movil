import { View } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';
import { List, TouchableRipple } from 'react-native-paper';



const pantallas = [
  {
    title: "Autor",
    icon: "account-circle",
    route: "autor",
    color: "#a18cf0",
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
    title: "Formulario de registro",
    icon: "account-plus",
    route: "formulario-registro",
    color: "#a18cf0",
  },
  {
    title: "Configuración",
    icon: "cog-outline",
    route: "configuracion",
    color: "#bdbdbd",
  },
  {
    title: "Lista de usuarios",
    icon: "account-group",
    route: "lista-usuario",
    color: "#b7aae6ee",
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