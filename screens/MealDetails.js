import { useLayoutEffect } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { GeneralDetails } from "../components/GeneralDetails"

export const MealDetails = ({ route, navigation }) => {
    const { mealTitle, ingredients, steps, isGlutenFree, isLactoseFree, isVegan, isVegetarian, image, affordability, complexity, duration } = route.params
    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealTitle
        })
    }, [])
    return <View>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <GeneralDetails affordability={affordability} complexity={complexity} duration={duration} />
        <Text>Ingredients</Text>
        <ScrollView>
            {ingredients.map(el => <Text key={el}>{el}</Text>)}
        </ScrollView>
        <Text>Steps</Text>
        <ScrollView>
            {steps.map((el, idx) => <Text key={el}>#{idx + 1} - {el}</Text>)}
        </ScrollView>
    </View>
}