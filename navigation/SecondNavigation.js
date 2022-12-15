import Books from "../components/Books";
import BookDetails from "../components/BookDetails";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function SecondNavigation(props){
  const categoryId = props.route.params.id
  return(
          <Stack.Navigator>
              <Stack.Screen name="List of Books">
                {(props) => <Books {...props} categoryId = {categoryId}/>}
              </Stack.Screen>

              <Stack.Screen name="BookDetails" component={BookDetails} />
          </Stack.Navigator>
  )
}