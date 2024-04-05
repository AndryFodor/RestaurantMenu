import { FlatList, StyleSheet } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import { GridTileItem } from "../components/GridTileItem"

// Об'єкт navigation доступний кожному компоненту, який визначений безпосередньо як екран (є в компоненту <Stack.Screen />). Цей об'єкт по дефолту передається компоненту в пропсах, і за допомгою деструкторизації його можна отримати в пропсах і використовувати. Використовується цей об'єкт для того, аби перемикатися між екранами. Тобто, якщо є ще якісь екрани в додатку, якщо викликати метод navigate в цього об'єкта і передати йому першим параметром назву екрана, яка вказана як name, то додаток переміститься на інший екран, як на іншу сторінку в реакті. Щоб передати якісь дані, можна другим параметром в цій функції вказати об'єкт з довільними полями, які будуть даними на стороні екрана, на який переходить користувач

const RenderMethod = (navigation) => (data) => {
    return <GridTileItem title={data.item.title} jump={() => navigation.navigate('MealInfo', {categoryId: data.item.id, cuisineMeals: data.item.title})}/>
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