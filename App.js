import { Platform, StyleSheet } from 'react-native';
import { MenuGridTile } from './screens/MenuGridTile';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealInfo } from './screens/MealInfo'
import { colors } from './utils/colors';
import { MealDetails } from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: colors.darkBrown
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: colors.brown
          }
        }}>
          <Stack.Screen name='MealsCategories' component={MenuGridTile} options={{title: "All categories"}}/>
          <Stack.Screen name='MealInfo' component={MealInfo} /*options={({route}) => ({title: route.params.cuisineMeals})}*//>
          <Stack.Screen name='MealDetails' component={MealDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 0 : '20%'
  },
});

// Щоб використовувати навігацію в реакт нейтів додатках, для початку слід завантажити декілька бібліотек: npm install @react-navigation/native, npx expo install react-native-screens react-native-safe-area-context, npm install @react-navigation/native-stack
// Stack.Screen може приймати різні пропси. За допомогою пропса options можна встановити багато властивостей, якщо передати сюди об'єкт з різноманітними властивостями. Проте можна також сюди передати коллбек, який буде повертати той самий об'єкт налаштувань, але також він буде виконуватися  після переходу на відповідний екран та давати доступ до таких парамертрів, як route та navigation. Це дає можливість відображати дані динамічно, наприклад заголовок.