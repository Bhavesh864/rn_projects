import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ResultsShow'>
        <Stack.Screen name="Business Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;