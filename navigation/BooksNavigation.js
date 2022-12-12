import Books from "../components/Books";
import BookDetails from "../components/BookDetails";
import Categories from "../components/categories";
import { createStackNavigator } from "@react-navigation/stack";
import SecondNavigation from "./SecondNavigation";

const Stack = createStackNavigator()

export default function BooksNavigation(){

  return(
          <Stack.Navigator>
              <Stack.Screen name="Categories" component={Categories} /> 
              <Stack.Screen name="SecondNavigation" component={SecondNavigation} options={{headerShown:false}} /> 
          </Stack.Navigator>
  )
}