
import { View, StyleSheet, ScrollView} from 'react-native';
import { Text, Avatar, Button, List } from 'react-native-paper';
import { useLocalSearchParams, useRouter } from 'expo-router';
import usuarios from "../assets/usuarios.json";

export default function PerfilUsuario() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const usuario = usuarios.find((u) => u.id.toString() === id);

  if (!usuario) {
    return (
      <View style={styles.center}>
        <Text>Usuario no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Avatar.Text
          label={usuario.nombre[0]}
          size={150}
          style={styles.avatar}
        />

        <Text variant="headlineMedium" style={styles.name}>
          {usuario.nombre}
        </Text>



        <View style={{ width: '100%', gap: 10, marginBottom: 20 }}>
        
          <View style={styles.listItem}><List.Item title={`Correo: ${usuario.email}`} left={props => <List.Icon {...props} icon="email" color="#607080" />} /></View>
          <View style={styles.listItem}><List.Item title={`Teléfono: ${usuario.telefono || 'No disponible'}`} left={props => <List.Icon {...props} icon="phone" color="#607080" />} /></View>
          <View style={styles.listItem}><List.Item title={`Dirección: ${usuario.direccion || 'No disponible'}`} left={props => <List.Icon {...props} icon="map-marker" color="#607080" />} /></View>
          
        </View>
  <Button mode="text" style={styles.logoutButton} labelStyle={styles.logoutLabel} onPress={() => router.push('/app')}>Cerrar sesión</Button>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { alignItems: 'center', padding: 20 },
  avatar: { backgroundColor: '#dc8fbeff', marginBottom: 16 },
  name: { fontWeight: 'bold', marginBottom: 8 },
  email: { color: '#666', marginBottom: 16 },
  infoTitle: { fontWeight: 'bold', marginTop: 12 },
  listItem: { borderWidth: 1, borderColor: '#ddd', borderRadius: 24, backgroundColor: 'white', marginBottom: 10 },
  logoutButton: { marginTop: 10 },
  logoutLabel: { color: '#dc8fbeff', fontWeight: 'bold', fontSize: 16 },
});

