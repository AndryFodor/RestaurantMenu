import { FlatList, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data";
import { MealCard } from "../components/MealCard";



// Отримати передані дані також можна за допомогою пропсів, які так само автоматично передаються в екран під іменем route. Щоб отримати доступ до полів, під якими передавалися дані, треба звернутися до властивості params. Тут вже по імені можна звертатися до необхідних даних
// Якщо до відповідних об'єктів (route navigate) треба отримати доступ не в компоненті, що є екраном, можна використати відповідні хуки, які нададуть доступ до цих об'єктів в дочірніх компонентах екрана.
export const MealInfo = ({ route }) => {
    const { categoryId, cuisineMeals } = route.params;

    const content = MEALS.filter(el => el.categoryIds.includes(categoryId)).map(el =>
        <MealCard
            affordability={el.affordability}
            complexity={el.complexity}
            duration={el.duration}
            image={el.imageUrl}
            ingredients={el.ingredients}
            isGlutenFree={el.isGlutenFree}
            isLactoseFree={el.isLactoseFree}
            isVegan={el.isVegan}
            isVegetarian={el.isVegetarian}
            steps={el.steps}
            title={el.title}
            key={el.id} />
    )

    return (
        <View>  
            <View>
                <Text>
                    {cuisineMeals}
                </Text>
            </View>
            <FlatList data={content} renderItem={data => data.item} />
        </View>
    )
}