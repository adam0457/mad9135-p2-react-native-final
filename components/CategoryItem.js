
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CategoryItem({product, onPress}){

  const testImg = '../assets/img/7habits.jpg'
  console.log(product.image)
  console.log(testImg)

  return (
            <TouchableOpacity onPress = {onPress}>
                  
                  <View style = {styles.container} >
                      <Image style = {styles.img} source={product.image} />
                      <Text style ={styles.category} >{product.category}</Text>
                  </View>
                  
            </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container:{
    
    backgroundColor: 'white',
    width: 350,
    marginBottom: 16,
    padding: 10,
    borderRadius: 8
  
  },
  img:{
    width: 100,
    height:100,
    borderRadius:48
  },

  category:{
    fontSize:32,
    color:"hsl(349,100%,24%)"
    
  }
})