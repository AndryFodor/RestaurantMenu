import { FlatList, Image, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data";

const MealCard = ({ affordability, title, complexity, image, duration, ingredients, steps, isGlutenFree, isLactoseFree, isVegan, isVegetarian, id }) => {
    return (
        <View style={{ borderWidth: 2, borderColor: 'red', margin: 30 }}>
            <Text>{title}</Text>
            <Image source={{ uri: image }} style={{ width: 250, height: 250, alignSelf: 'center', marginVertical: 20 }} />
            <Text>Affordability - {affordability}</Text>
            <Text>Complexity - {complexity}</Text>
            <Text>Duration - {duration}</Text>
            <Text>Ingredients: </Text>
            <View>
                {ingredients.map((el, i) => <View key={id + " " + i}>
                    <Text>
                        #{i + 1} - {el}
                    </Text>
                </View>)}
            </View>
            <Text>Steps:</Text>
            <View>
                {steps.map((el, i) => <View key={id + " " + i}>
                    <Text>
                        #{i + 1} - {el}
                    </Text>
                </View>)}
            </View>
            <Text>Is gluten free?  {isGlutenFree ? "free" : "not free"}</Text>
            <Text>Is lactose free?  {isLactoseFree ? "free" : "not free"}</Text>
            <Text>Is gluten free?  {isGlutenFree ? "free" : "not free"}</Text>
            <Text>Is good for vegan? {isVegan ? "good" : "bad"}</Text>
            <Text>Is good for vegetarian? {isVegetarian ? "good" : "bad"}</Text>
        </View>
    )
}

// Отримати передані дані також можна за допомогою пропсів, які так само автоматично передаються в екран під іменем route. Щоб отримати доступ до полів, під якими передавалися дані, треба звернутися до властивості params. Тут вже по імені можна звертатися до необхідних даних
// Якщо до відповідних об'єктів (route navigate) треба отримати доступ не в компоненті, що є екраном, можна використати відповідні хуки, які нададуть доступ до цих об'єктів в дочірніх компонентах екрана.
export const MealInfo = ({ route }) => {
    console.log("New component");
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
            <Text>
                Meal information view
            </Text>
            <View>
                <Text>
                    {cuisineMeals}
                </Text>
            </View>
            <FlatList data={content} renderItem={data => data.item} />
        </View>
    )
}