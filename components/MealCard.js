import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
// TouchableOpacity
export const MealCard = ({ affordability, title, complexity, image, duration, ingredients, steps, isGlutenFree, isLactoseFree, isVegan, isVegetarian, id }) => {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={Platform.OS === "android" ? {color: '#dedbdb'} : null}
            style={({pressed}) => pressed && styles.pressed && Platform.OS === "ios"} >
                <View>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.detailes}>
                    <Text style={styles.detailesItem}>{affordability.toUpperCase()}</Text>
                    <Text style={styles.detailesItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailesItem}>{duration} min</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
    detailes: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    detailesItem: {
        paddingHorizontal: 10,
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