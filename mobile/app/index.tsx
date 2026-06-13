import { View, Text, StyleSheet } from 'react-native';

export default function ProblemsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Problems</Text>
      <Text style={styles.sub}>Problem list coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#f1f5f9', marginBottom: 8 },
  sub: { color: '#64748b' },
});
