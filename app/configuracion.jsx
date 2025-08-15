import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, List, Switch, Button } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true);
  const router = useRouter();
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 30 }}>Ajustes</Text>

        <View style={{ gap: 10 }}>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
            <List.Item
              title="Cuenta"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
            <List.Item
              title="Notificaciones"
              right={props => (
                <Switch value={notificaciones} onValueChange={setNotificaciones} color="#dc8fbeff" />
              )}
            />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
            <List.Item
              title="Privacidad"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
            <List.Item
              title="Seguridad"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>
          <View style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 24, marginBottom: 5, backgroundColor: 'white' }}>
            <List.Item
              title="Ayuda"
              right={props => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => {}}
            />
          </View>
        </View>

        <Button
          mode="text"
          style={{ marginTop: 30 }}
          labelStyle={{ color: '#dc8fbeff', fontSize: 16 }}
          onPress={() => {
            alert('Sesión cerrada');
            router.push('/app');
          }}
        >
          Cerrar sesión
        </Button>
      </View>
    </ScrollView>
  );
}
