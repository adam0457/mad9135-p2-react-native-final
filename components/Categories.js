// import { FlatList } from "react-native";
// import CategoryItem from "./CategoryItem";
// import { useBook } from "../context/BookContext";

// export default function Categories({navigation}){
//     const [books] = useBook()

//     if(!books){
//       return null
//     }
//   return(
//           <FlatList
//               data = {books}
//               renderItem = {({item})=>{
//                   // return <CategoryItem product = {item} onPress = {()=> navigation.navigate('Books', {id:item.categoryId})} />
//                   return <CategoryItem product = {item} onPress = {()=> navigation.navigate('SecondNavigation', {id:item.categoryId})} />
//               }}

//               keyExtractor = {item => item.categoryId}

//           />
//   )
// }
