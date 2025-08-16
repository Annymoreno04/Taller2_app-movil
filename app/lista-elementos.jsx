import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Text, Searchbar, Button, Avatar } from "react-native-paper";
import { useRouter } from "expo-router";
import elementos from "../assets/elementos.json";
import { Stack } from "expo-router";

export default function ListaElementos() {
  const [textoBuscar, setTextoBuscar] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState(elementos);
  const router = useRouter();

  // Filtrar cada vez que cambia el texto de búsqueda
  useEffect(() => {
    const filtrados = elementos.filter((item) =>
      item.titulo && item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setListaFiltrada(filtrados);
  }, [textoBuscar]);

  return (
    <>
      <Stack.Screen options={{
        title: 'Lista de Elementos  ',
        headerShown: true,
        headerStyle: { backgroundColor: '#f9f8ff' },
      }} />
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f9f8ff" }}>
          <Searchbar
            style={{ marginBottom: 16 }}
            placeholder="Buscar"
            value={textoBuscar}
            onChangeText={setTextoBuscar}
          />

          {listaFiltrada.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 16,
                padding: 12,
                elevation: 2,
              }}
            >
              <Avatar.Image
                source={{ uri: item.urlImagen }}
                size={100}
                style={{ backgroundColor: "#3b5998", marginRight: 12 }}
              />
              <View style={{ flex: 1 }}>
                <Text variant="titleMedium" style={{ fontWeight: "bold", marginBottom: 4 }}>
                  {item.titulo}
                </Text>
                <Text variant="bodySmall" style={{ color: "#444", marginBottom: 8 }}>
                  {item.descripcion}
                </Text>
                <Button
                  mode="contained"
                  style={{
                    backgroundColor: "#dc8fbeff",
                    borderRadius: 24,
                    alignSelf: "flex-end",
                  }}
                  labelStyle={{ color: "white" }}
                  onPress={() =>
                    router.push({
                      pathname: "/detalle-elemento",
                      params: { id: item.id.toString() },
                    })
                  }
                >
                  Acción
                </Button>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>);
}
