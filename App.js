import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { MenuGridTile } from './screens/MenuGridTile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MenuGridTile />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS ==='ios' ? 0 : '20%'
  },
});
