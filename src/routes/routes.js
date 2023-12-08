import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Dashboard from '../pages/Dashboard'
import Inicio from '../pages/Inicios'
 

const Stack = createNativeStackNavigator()


export default function AppRoutes() {
    return(
        <Stack.Navigator>
    <Stack.Screen
       name='Dasboard'
       component={Dashboard}
       options={{ headerShown: true }}
/>
            <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{ headerShown: true}}
        />

        </Stack.Navigator>

    )
}