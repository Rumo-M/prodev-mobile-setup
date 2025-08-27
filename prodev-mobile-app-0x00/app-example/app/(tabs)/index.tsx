import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First App Created</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
