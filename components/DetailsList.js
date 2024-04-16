import { StyleSheet, Text, View } from "react-native"
import { colors } from "../utils/colors"

export const DetailsList = ({ elements, numbered, title }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {elements.map((el, idx) => <View key={el} style={styles.li}>
            <Text style={[styles.liText, numbered ? { alignSelf: 'flex-start' } : null]}>
                {numbered ? `#${idx + 1}` : null} {el}
            </Text>
        </View>)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: '2%'
    },
    title: {
        fontSize: 20,
        color: colors.lightBrown,
        borderBottomColor: colors.lightBrown,
        borderBottomWidth: 1,
        marginVertical: '3%',
        paddingBottom: '3%',
        width: '60%',
        alignSelf: 'center',
        textAlign: 'center',
    },
    li: {
        marginHorizontal: '10%',
        marginVertical: '1%',
        paddingVertical: '2%',
        paddingHorizontal: '10%',
        alignItems: 'center',
        backgroundColor: colors.darkBrown,
        borderRadius: 20
    },
    liText: {
        color: colors.brown,
        fontWeight: 'bold',
        fontSize: 16,
    }
})