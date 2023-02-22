//TODO: toon een home screen
//TODO: voeg een button toe om naar de detail te gaan
//TODO: toon de detail screen (nog leeg)
//TODO: voeg een button toe om terug te gaan naar de home screen
//TODO: bekijk hoe je de header kan namaken zoals in het voorbeeld

//TODO: hoe lang ga je hiermee bezig zijn...?

import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import Detail from './Detail'

//TODO: gebruik stack navigator uit de docs
const Stack = createStackNavigator();

export function LabStack() {
    return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}