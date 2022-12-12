
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CategoryItem({product, onPress}){

  return (
            <TouchableOpacity onPress = {onPress}>
                  <Text>{product.category}</Text>
            </TouchableOpacity>
  )

}