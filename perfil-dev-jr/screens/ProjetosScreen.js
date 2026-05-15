import { useState } from 'react';

import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const projetos = [
  'Portal do Aluno',
  'Controle de Serviços',
];

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  const enviarContato = () => {
    if (!mensagem.trim()) {
      Alert.alert('Atenção', 'Escreva uma mensagem antes de enviar.');
      return;
    }

    Alert.alert('Contato enviado', 'Mensagem enviada com sucesso.');
    setMensagem('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projetos e contato</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Projetos</Text>
        {projetos.map((item) => (
          <View key={item} style={styles.row}>
            <View style={styles.line} />
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <Text style={styles.contact}>E-mail: danilo.jorge.dev@gmail.com</Text>
        <Text style={styles.contact}>GitHub: github.com/danilojorgedev</Text>
        <Text style={styles.contact}>LinkedIn/Portfólio: linkedin.com/in/danilojorge-dev</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Enviar contato</Text>
        <TextInput
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Escreva sua mensagem"
          placeholderTextColor="#6b7280"
          multiline
          style={styles.input}
        />
        <Button title="Enviar contato" onPress={enviarContato} color="#60a5fa" />
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
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
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
    gap: 10,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e6f1ff',
  },
  line: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#60a5fa',
  },
  item: {
    color: '#111827',
    fontSize: 16,
  },
  contact: {
    color: '#111827',
    fontSize: 15,
    lineHeight: 22,
  },
  input: {
    minHeight: 110,
    borderWidth: 1,
    borderColor: '#b9dbff',
    borderRadius: 12,
    padding: 12,
    color: '#111827',
    backgroundColor: '#ffffff',
    textAlignVertical: 'top',
  },
});