import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import FoodScreen from './screens/FoodScreen'
import InstamartScreen from './screens/InstamartScreen'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Instamart" component={InstamartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
