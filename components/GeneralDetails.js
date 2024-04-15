import { StyleSheet, Text, View } from "react-native"

export const GeneralDetails = ({ affordability, complexity, duration }) => {
    return <View style={styles.detailes}>
        <Text style={styles.detailesItem}>{affordability.toUpperCase()}</Text>
        <Text style={styles.detailesItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailesItem}>{duration} min</Text>
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