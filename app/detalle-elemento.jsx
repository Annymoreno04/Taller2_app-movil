
import { View } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Button, Avatar, Searchbar } from 'react-native-paper';
import { useLocalSearchParams } from "expo-router";
import elementos from "../assets/elementos.json";
import { Stack } from "expo-router";


export default function DetalleElemento() {
  const { id } = useLocalSearchParams();
  const elemento = elementos.find((el) => el.id.toString() === id);

  if (!elemento) {
    return (
      <View style={styles.center}>
        <Text>Elemento no encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{
        title: 'Detalle del Elemento',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <ScrollView style={{ backgroundColor: "#f9f8ff" }}>
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 18,
          padding: 24,
          elevation: 4,
          marginTop: 100,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          alignSelf: 'center',
        }}>
          <View style={styles.imageContainer}>
            <Avatar.Image
              source={{ uri: elemento.urlImagen }}
              size={150}
              style={styles.avatar}
            />
          </View>

          <Text variant="headlineMedium" style={styles.title}>
            {elemento.titulo}
          </Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{elemento.descripcion}</Text>
          </View>

          <Text style={styles.price}>$65.000{elemento.precio}</Text>

          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Acción
          </Button>
        </View>
      </ScrollView>
    </>);
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    backgroundColor: "#dc8fbeff",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  avatar: {
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  descriptionContainer: {
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  description: {
    color: "#222",
    textAlign: "left",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#dc8fbeff",
    borderRadius: 24,
    width: "100%",
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});