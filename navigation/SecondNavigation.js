// import Books from "../components/Books";
// import BookDetails from "../components/BookDetails";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// // const Stack = createStackNavigator()

// export default function SecondNavigation(props){
//   const categoryId = props.route.params.id
//   console.log(categoryId)
//   return(
//           <Drawer.Navigator>
//               {/* <Stack.Screen name="Books" component={Books} /> */}
//               <Drawer.Screen name="Books">
//                 {(props) => <Books {...props} categoryId = {categoryId}/>}
//               </Drawer.Screen>

//               <Drawer.Screen name="BookDetails" component={BookDetails} />
//           </Drawer.Navigator>
//   )
// }