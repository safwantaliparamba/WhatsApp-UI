import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/routes/StackNav'

const App = () => {
  return (
	<NavigationContainer>
		<StackNav />
	</NavigationContainer>
  )
}

export default App