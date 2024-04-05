import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"

let prevColor = '000';
const generateHexDigit = (exclude) => {
    // 97 - 102
    let first = String.fromCharCode(Math.floor(Math.random() * 6 + 97))
    //49 - 57
    let second = String.fromCharCode(Math.floor(Math.random() * 9 + 49))
    if(exclude.charCodeAt() >= 97 && exclude.charCodeAt() <= 102){
        return second;
    }else{
        return first;
    }
}

export const GridTileItem = ({title}) => {
    prevColor = prevColor.split('').map(el => generateHexDigit(el)).join('');
    let textColor = prevColor.split('').map(el => generateHexDigit(el)).join('');
    return (
        <View style={[styles.container, { backgroundColor: `#${prevColor}` }]}>
            <Pressable>
                <View style={styles.innerContainer}>
                    <Text style={[styles.textStyles, { color: `#${textColor}` }]}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '4%',
        height: Dimensions.get('window').height / 5,
        elevation: 4
    },
    innerContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b6af98'
    },
    textStyles: {
        fontSize: 20
    }
})