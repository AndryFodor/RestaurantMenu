import { Platform, StyleSheet } from 'react-native';
import { MenuGridTile } from './screens/MenuGridTile';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealInfo } from './screens/MealInfo'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={MenuGridTile}/>
          <Stack.Screen name='MealInfo' component={MealInfo}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : '20%'
  },
});

// Щоб використовувати навігацію в реакт нейтів додатках, для початку слід завантажити декілька бібліотек: npm install @react-navigation/native, npx expo install react-native-screens react-native-safe-area-context, npm install @react-navigation/native-stack