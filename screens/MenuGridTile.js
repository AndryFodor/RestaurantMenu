import { FlatList, StyleSheet } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import { GridTileItem } from "../components/GridTileItem"

const RenderMethod = (navigation) => (data) => {
    return <GridTileItem title={data.item.title} jump={() => navigation.navigate('MealInfo')}/>
}

export const MenuGridTile = ({navigation}) => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={RenderMethod(navigation)}
            numColumns={2}
            style={styles.flatList}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
    }
}) 