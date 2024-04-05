import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from "react-native"

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

export const GridTileItem = ({title, jump}) => {
    prevColor = prevColor.split('').map(el => generateHexDigit(el)).join('');
    let textColor = prevColor.split('').map(el => generateHexDigit(el)).join('');
    return (
        <View style={[styles.container, { backgroundColor: `#${prevColor}` }]}>
            <Pressable 
            android_ripple={{color: '#f4eaef'}} 
            style={({pressed}) => pressed && styles.iPhone}
            onPress={jump}>
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
        borderRadius: 12,
        elevation: 12,
        shadowColor: '#f92c2c',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: .4,
        shadowRadius: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b6af9208'
    },
    textStyles: {
        fontSize: 20,
        fontWeight: '500'
    },
    iPhone: {
        opacity: .5,
        paddingBottom: '3%'
    }
})