import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export const IconButton = ({ onPressHandler, color }) => <Pressable
    style={({ pressed }) => pressed && { opacity: .6 }}
    onPress={onPressHandler}
>
    <Ionicons name="star" size={30} color={color} />
</Pressable>