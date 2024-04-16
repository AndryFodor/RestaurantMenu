import { useLayoutEffect } from "react"
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { GeneralDetails } from "../components/GeneralDetails"
import { colors } from "../utils/colors"
import { DetailsList } from "../components/DetailsList"
import { IconButton } from "../components/IconButton"

export const MealDetails = ({ route, navigation }) => {
    const { mealTitle, ingredients, steps, isGlutenFree, isLactoseFree, isVegan, isVegetarian, image, affordability, complexity, duration } = route.params
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton color={colors.lightBrown} onPressHandler={() => {console.log("Button pressed");}}/>
        });
    }, [])
    return <ScrollView>
        <Image source={{ uri: image }} style={{ width: "100%", height: 300 }} />
        <Text style={styles.title}>{mealTitle}</Text>
        <GeneralDetails affordability={affordability} complexity={complexity} duration={duration} textStyle={styles.textStyle} />
        <DetailsList elements={ingredients} numbered={false} title={"Ingredients"} />
        <DetailsList elements={steps} numbered={true} title={"Steps"} />
    </ScrollView>
}

const styles = StyleSheet.create({
    textStyle: {
        color: colors.darkBrown,
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '500',
        color: colors["brown-white"]
    }
})