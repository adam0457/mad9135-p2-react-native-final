import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryItem from "./CategoryItem";
import { useBook } from "../context/BookContext";

export default function Categories({navigation}){
    const [books] = useBook()

    if(!books){
      return null
    }
  return(
    <SafeAreaView style={styles.container}>
      
          <FlatList
              data = {books}
              renderItem = {({item})=>{
                  return <CategoryItem product = {item} onPress = {()=> navigation.navigate('SecondNavigation', {id:item.categoryId})} />
              }}
              keyExtractor = {item => item.categoryId}

            
          />
          
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"flex-end",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "darkgrey",
  },
  
  text: {
    fontSize: 48,
  },

  flatlistContainer:{
    backgroundColor:"aquamarine",
    marginBottom:16,
    borderRadius:8
  }
});
