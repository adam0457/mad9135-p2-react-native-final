
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CategoryItem({product, onPress}){

  const testImg = '../assets/img/7habits.jpg'
  console.log(product.image)
  console.log(testImg)

  return (
            <TouchableOpacity onPress = {onPress}>
                  
                  <View>
                      <Image style = {styles.img} source={product.image} />
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