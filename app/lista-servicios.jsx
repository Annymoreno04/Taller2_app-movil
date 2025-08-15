import { View } from 'react-native';
import { ScrollView } from 'react-native';
import { Text, List, Chip, IconButton } from 'react-native-paper';

const servicios = [
  {
    id: 1,
    titulo: 'Servicio de Notificación Telefónica',
    descripcion: 'Abrir servicios telefónicos para alertas de dispositivos para mejor la notificación en tiempo real de',
    icono: 'phone',
    color: '#7ed957',
  },
  {
    id: 2,
    titulo: 'Protección inteligente',
    descripcion: 'Aplicación de alarma para el hogar, protegiendo la seguridad de tu hogar',
    icono: 'shield-home',
    color: '#5da7f2',
  },
  {
    id: 3,
    titulo: 'Compras',
    descripcion: 'Encuentra rápidamente productos y marcas, descubre mas productos inteligentes',
    icono: 'cart',
    color: '#f7b267',
  },
  {
    id: 4,
    titulo: 'Maestro de Iluminación',
    descripcion: 'Proporcione soluciones de iluminación personalizadas a través de IA',
    icono: 'lightbulb-on',
    color: '#a18cf0',
  },
  {
    id: 5,
    titulo: 'Asistente de voz de terceros',
    descripcion: 'Utiliza altavoces inteligentes, ...',
    icono: 'account-voice',
    color: '#5da7f2',
  },
];

function ServicioItem({ servicio }) {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 12,
      marginBottom: 20,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    }}>
      <View style={{ backgroundColor: servicio.color, borderRadius: 24, padding: 10, marginRight: 12 }}>
        <List.Icon icon={servicio.icono} color="white" />
      </View>
      <View style={{ flex: 1 }}>
        <Text variant="titleMedium" style={{ fontWeight: 'bold', marginBottom: 4 }}>
          {servicio.titulo}
          {servicio.nuevo && <Chip style={{ backgroundColor: '#ffb300', marginLeft: 8 }} textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>New</Chip>}
        </Text>
        <Text variant="bodySmall" style={{ color: '#444', marginBottom: 8 }}>{servicio.descripcion}</Text>
      </View>
      <List.Icon icon="chevron-right" color="#bbb" />
    </View>
  );
}

export default function ListaServicios() {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', padding: 10, paddingTop: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 0 }}>
          <IconButton icon="home" size={24} style={{ marginLeft: 0 }} />
          <IconButton icon="cog-outline" size={24} />
        </View>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 20 }}>Lista de servicios</Text>
        <ServicioItem servicio={servicios[0]} />
        <ServicioItem servicio={servicios[1]} />
        <ServicioItem servicio={servicios[2]} />
        <ServicioItem servicio={servicios[3]} />
        <ServicioItem servicio={servicios[4]} />
      </View>
    </ScrollView>
  );
}
