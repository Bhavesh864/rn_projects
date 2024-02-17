import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './src/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const Stack = createNativeStackNavigator();

function navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = navigator;
const store = createStore(reducers);

export default () => {
  return <Provider store={store}>
    <MainApp />
  </Provider>
};