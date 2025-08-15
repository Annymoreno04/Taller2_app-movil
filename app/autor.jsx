import { View, ScrollView } from 'react-native';
import { Text, Avatar } from 'react-native-paper';

export default function Autor() {

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 24,
        elevation: 4,
        marginTop: 16,
      }}>
        <Avatar.Image
          size={200}
          source={require('../images/annie.png')}
          style={{
            marginBottom: 16,
          }}
        />

        <Text variant="titleLarge" style={{
          fontSize: 26,
          fontWeight: 'bold',
          color: '#dc8fbeff',
          marginBottom: 12,
          textAlign: 'center',
        }}>
          Anny Johana Moreno Leudo
        </Text>

        <View style={{ width: '100%', marginBottom: 18 }}>
          <Text variant="bodyMedium" style={{ fontSize: 16, color: '#444', marginBottom: 6, textAlign: 'left' }}>
            <Text style={{ fontWeight: 'bold', color: '#dc8fbeff' }}>Asignatura: </Text>
            Desarrollo de Aplicaciones Móviles
          </Text>

          <Text variant="bodyMedium" style={{ fontSize: 16, color: '#444', marginBottom: 6, textAlign: 'left' }}>
            <Text style={{ fontWeight: 'bold', color: '#dc8fbeff' }}>Universidad: </Text>
            Tecnológica del Chocó 'Diego Luis Córdoba'
          </Text>

          <Text variant="bodyMedium" style={{ fontSize: 16, color: '#444', marginBottom: 6, textAlign: 'left' }}>
            <Text style={{ fontWeight: 'bold', color: '#dc8fbeff' }}>Correo: </Text>
            anny.moreno392@utch.edu.co
          </Text>

          <Text variant="bodyMedium" style={{ fontSize: 16, color: '#444', marginBottom: 6, textAlign: 'left' }}>
            <Text style={{ fontWeight: 'bold', color: '#dc8fbeff' }}>Teléfono: </Text>
            +57 3222555666
          </Text>
        </View>

        <View style={{
          width: '100%',
          backgroundColor: '#FFF0F8',
          borderRadius: 12,
          padding: 16,
          marginTop: 8,
          elevation: 2,
        }}>
          <Text variant="titleMedium" style={{
            fontSize: 18,
            color: '#dc8fbeff',
            marginBottom: 8,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
            Sobre mí
          </Text>

          <Text variant="bodyMedium" style={{
            fontSize: 15,
            color: '#666',
            textAlign: 'justify',
            lineHeight: 22,
          }}>
            Estudiante de ingeniería de telecomunicaciones e informática con enfoque en la creación de aplicaciones móviles innovadoras para el sector de belleza y cuidado personal.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
