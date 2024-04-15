import { useLayoutEffect } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { GeneralDetails } from "../components/GeneralDetails"
import { colors } from "../utils/colors"
import { DetailsList } from "../components/DetailsList"

export const MealDetails = ({ route, navigation }) => {
    const { mealTitle, ingredients, steps, isGlutenFree, isLactoseFree, isVegan, isVegetarian, image, affordability, complexity, duration } = route.params
    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealTitle
        })
    }, [])
    return <ScrollView>
        <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
        <GeneralDetails affordability={affordability} complexity={complexity} duration={duration} textStyle={styles.textStyle} />
        <DetailsList elements={ingredients} numbered={false} title={"Ingredients"}/>
        <DetailsList elements={steps} numbered={true} title={"Steps"}/>
    </ScrollView>
}

const styles = StyleSheet.create({
    textStyle: {
        color: colors.darkBrown, 
        fontWeight: 'bold', 
        fontSize: 20
    }
})