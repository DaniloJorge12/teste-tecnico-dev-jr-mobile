import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Image style={styles.avatar} source={require('../assets/imagem-perfil.png')} />
        <Text style={styles.nome}>Danilo Jorge</Text>
        <Text style={styles.cargo}>Desenvolvedor Mobile Júnior</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Sobre mim</Text>
        <Text style={styles.text}>
          Sou um desenvolvedor que gosta de construir apps simples, organizados e funcionais.
          Tenho foco em React Native, JavaScript e aprendizado constante.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 28,
    backgroundColor: '#f8fbff',
    gap: 14,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#b9dbff',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  nome: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  cargo: {
    color: '#3b82f6',
    fontSize: 15,
    marginTop: 4,
  },
  title: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#111827',
    fontSize: 15,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
});