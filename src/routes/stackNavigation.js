import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers/appReducer'

import HomePage from '../pages/HomePage/'
import CartPage from '../pages/CartPage';
import SuccessPage from '../pages/SuccessPage';

const Stack = createNativeStackNavigator();
const Store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomePage} />
                    <Stack.Screen name="Cart" component={CartPage} />
                    <Stack.Screen name="Success" component={SuccessPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;