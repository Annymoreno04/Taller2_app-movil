import { View, Image, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function PantallaBienvenida() {
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View>

        <Text variant="headlineMedium"
          style={{ fontWeight: 'bold', marginBottom: 8, textAlign: 'center', fontSize: 36, marginTop: 50 }}>
          ¡Bienvenido!
        </Text>

        <Text variant="bodyMedium" style={{ color: '#666', marginBottom: 20, textAlign: 'center' }}>
          ¡Nos alegra tenerte aquí!
        </Text>

        <Image
          source={require("../images/Beauty.png")}
          style={{
            width: '92%',
            height: 400,
            alignSelf: "center",
            marginTop: 10,
          }}
        />

        <Button
          mode="contained"
          onPress={() => router.push('home')}
          style={{ backgroundColor: '#dc8fbeff', width: '80%', marginTop: 20, alignSelf: "center", fontSize: 20 }}
          labelStyle={{ color: '#ffffff', fontSize: 18 }}>
          Empezar
        </Button>
      </View>
    </ScrollView>
  );
}