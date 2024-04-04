import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Start</Text>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    margin: Platform.OS ==='ios' ? 0 : '10%'
  },
});
