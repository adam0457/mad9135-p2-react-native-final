import Books from "../components/Books";
import BookDetails from "../components/BookDetails";
import Categories from "../components/categories";
import { createStackNavigator } from "@react-navigation/stack";
import SecondNavigation from "./SecondNavigation";

const Stack = createStackNavigator()

export default function BooksNavigation(){

  return(
          <Stack.Navigator>
              <Stack.Screen name="Books List" component={Books} /> 
              <Stack.Screen name="BookDetails" component={BookDetails} />
          </Stack.Navigator>
  )
}