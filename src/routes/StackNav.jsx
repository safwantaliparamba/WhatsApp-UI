import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav'
import Chat from '../screens/Chat'

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen  name='Home' component={TabNav} />
            <Stack.Screen  name='Chat' component={Chat} />
        </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({})