import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../utils/colors"
import {useNavigation} from '@react-navigation/native'
import { GeneralDetails } from "./GeneralDetails"
// TouchableOpacity
export const MealCard = (props) => {
    const {affordability, title, complexity, image, duration, ...detailsScreen} = props
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Pressable android_ripple={Platform.OS === "android" ? {color: '#dedbdb'} : null}
            style={({pressed}) => pressed && styles.pressed && Platform.OS === "ios"} 
            onPress={() => navigation.navigate('MealDetails', {mealTitle: title, image, affordability, complexity, duration, ...detailsScreen})}>
                <View>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <GeneralDetails affordability={affordability} complexity={complexity} duration={duration}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBrown,
        margin: '5%',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5,
        shadowOffset: {height: 2, width: 0},
        shadowColor: 'black',
        shadowOpacity: .6,
        shadowRadius: 5
    },
    image: {
        width: '100%',
        height: 250,
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
    },
    pressed: {
        opacity: .5
    }
})


{/* <Text>Ingredients: </Text>
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
            <Text>Is good for vegetarian? {isVegetarian ? "good" : "bad"}</Text> */}