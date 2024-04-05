import { FlatList, StyleSheet } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import { GridTileItem } from "../components/GridTileItem"

const RenderMethod = (data) => <GridTileItem title={data.item.title}/>

export const MenuGridTile = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={RenderMethod}
            numColumns={2}
            style={styles.flatList}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
    }
}) 