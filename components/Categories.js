import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import { useBook } from "../context/BookContext";

export default function Categories(){
    const [books] = useBook()

    if(!books){
      return null
    }
  return(
          <FlatList
              data = {books}
              renderItem = {({item})=>{
                  return <CategoryItem product = {item} />
              }}

              keyExtractor = {item => item.categoryId}

          />
  )
}
