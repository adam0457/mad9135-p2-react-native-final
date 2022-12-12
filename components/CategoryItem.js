
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CategoryItem({product}){

  return (
            <View>
                  <Text>{product.category}</Text>
            </View>
  )

}