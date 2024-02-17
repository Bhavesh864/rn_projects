import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import Feather from 'react-native-vector-icons/Feather'
import CreateScreen from './src/screens/CreateScreen';
import { TouchableOpacity } from 'react-native';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

function navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexScreen} options={({ navigation }) => ({
          title: 'My Blogs',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => { navigation.navigate('Create') }}>
              <Feather size={30} name='plus' style={{ color: 'black' }} />
            </TouchableOpacity>
          ),
        })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{
            title: 'Blogs Details',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = navigator;

export default () => {
  return <Provider >
    <App />
  </Provider>
}