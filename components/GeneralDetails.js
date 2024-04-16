import { StyleSheet, Text, View } from "react-native"

export const GeneralDetails = ({ affordability, complexity, duration, style, textStyle }) => {
    return <View style={[styles.detailes, style]}>
        <Text style={[styles.detailesItem, textStyle]}>{affordability.toUpperCase()}</Text>
        <Text style={[styles.detailesItem, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailesItem, textStyle]}>{duration} min</Text>
    </View>
}

const styles = StyleSheet.create({
    detailes: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    detailesItem: {
        paddingHorizontal: 10,
    },
})