import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import  Home  from '../screens/Home';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator();

export function MyStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='login' component={Login}/>
                <Stack.Screen name='home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}