import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextInputScreen from './src/screens/TextInputScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Components" component={ComponentScreen} options={{ title: 'App', headerStyle: { backgroundColor: 'skyblue' }, headerTitleAlign: 'center' }} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;