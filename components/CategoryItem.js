
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CategoryItem({product, onPress}){

  return (
            <TouchableOpacity onPress = {onPress}>
                  
                  <View>
                      <Image style = {styles.img} source={require(`../assets/img/${product.image}.jpg`)} />
                      <Text>{product.category}</Text>
                  </View>
                  
            </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  

  },
  img:{
    width: 150,
    height:150
  }
})