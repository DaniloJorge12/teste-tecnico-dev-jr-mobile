import { StyleSheet, Text, View } from 'react-native';

const habilidades = [
  'React Native',
  'Expo',
  'JavaScript',
  'Node.js',
  'Supabase',
  'Git e GitHub',
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>

      <View style={styles.card}>
        {habilidades.map((item) => (
          <View key={item} style={styles.row}>
            <View style={styles.dot} />
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 28,
    backgroundColor: '#f8fbff',
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 14,
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6f1ff',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#60a5fa',
  },
  item: {
    color: '#111827',
    fontSize: 16,
  },
});