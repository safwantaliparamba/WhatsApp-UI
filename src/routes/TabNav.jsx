import React from 'react'
import { View, TouchableOpacity, Animated, StyleSheet, Image, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Calls from '../screens/Calls';

const Tab = createMaterialTopTabNavigator()


function MyTabBar({ state, descriptors, navigation, position }) {
	return (
		<View style={{ backgroundColor: '#455748' }}>
			<View style={styles.headerContainer}>
				<Text style={styles.logo}>WhatsApp</Text>
				<View style={styles.iconsContainer}>
					<TouchableOpacity>
						<Image style={styles.icon} source={require('../assets/icons/search-icon.png')} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={[styles.icon,{marginLeft:10}]} source={require('../assets/icons/dots.png')} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flexDirection: 'row', paddingTop: 20 }}>

				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
								? options.title
								: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};
					// modify inputRange for custom behavior
					const inputRange = state.routes.map((_, i) => i);
					const opacity = position.interpolate({
						inputRange,
						outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
					});

					return (
						<TouchableOpacity
							activeOpacity={1}
							key={index}
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={[styles.tabContainer, { flex: 1 }, isFocused && styles.focusedTab]}
						>
							<Animated.Text style={[styles.tabText, isFocused && styles.focusedText]}>{label.toUpperCase()}</Animated.Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}

const TabNav = () => {
	return (
			<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
				<Tab.Screen name='Chats' component={Chats} />
				<Tab.Screen name='Status' component={Status} />
				<Tab.Screen name='Calls' component={Calls} />
			</Tab.Navigator>
	)
}

export default TabNav


const styles = StyleSheet.create({
	tabContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabText: {
		paddingBottom: 12,
		fontWeight: '800',
		color: '#CCCCCC',
	},
	focusedTab: {
		borderBottomWidth: 2,
		borderBottomColor: '#25D366',
	},
	focusedText: {
		color: '#25D366'
	},
	headerContainer: {
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
	},
	logo: {
		fontSize: 22,
		color: '#ccc',
		fontWeight:'500'
	},
	iconsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 25,
		height: 25,
	},
})
