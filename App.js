import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Calculator from "./src/pages/Calculator/Calculator"
import LoginInstagram from "./src/pages/LoginInstagram/LoginInstagram"
import PizzaChoice from "./src/pages/PizzaChoice/PizzaChoice"

const Tab = createBottomTabNavigator()

export default function App() {
  return (

    <NavigationContainer >
      <Tab.Navigator
        inicialRouteName="Login"
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#243540",
          tabBarStyle: {
            backgroundColor: "#808080",
          }
        }}

      >
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={
            {
              headerShown: false
            }
          } />
        <Tab.Screen
          name="Instagram"
          component={LoginInstagram}
          options={
            {
              headerShown: false
            }
          } />
        <Tab.Screen
          name="Pizza"
          component={PizzaChoice}
          options={
            {
              headerShown: false
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

