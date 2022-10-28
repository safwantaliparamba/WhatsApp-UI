import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import _statusUpdates from '../data/status'

const Status = () => {
	const [statusUpdates, setStatusUpdates] = useState(_statusUpdates)
	return (
		<ScrollView style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.statusContainer}
			>
				<View>
					<Image
						source={require('../assets/images/profile-picture.png')}
						style={styles.profileImage}
					/>
				</View>
				<View>
					<Text style={styles.username}>My status</Text>
					<Text style={styles.lastSeen}>just now</Text>
				</View>
				<TouchableOpacity style={styles.myStatusOptions}>
					<Image  source={require('../assets/icons/dots.png')} />
				</TouchableOpacity>
			</TouchableOpacity>


			<View style={styles.header}>
				<Text>Recent updates</Text>
			</View>

			{statusUpdates.filter(item => !item.isViewed).map((item, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={0.8}
					style={styles.statusContainer}
				>
					<View>
						<Image
							source={item.profileImage}
							style={styles.profileImage}
						/>
					</View>
					<View>
						<Text style={styles.username}>{item.username}</Text>
						<Text style={styles.lastSeen}>{item.updated}</Text>
					</View>
				</TouchableOpacity>
			))}


			<View style={styles.header}>
				<Text>Viewed updates</Text>
			</View>
			{statusUpdates.filter(item => item.isViewed).map((item, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={0.8}
					style={styles.statusContainer}
				>
					<View>
						<Image
							source={item.profileImage}
							style={[styles.profileImage, styles.viewedStatus]}
						/>
					</View>
					<View>
						<Text style={styles.username}>{item.username}</Text>
						<Text style={styles.lastSeen}>{item.updated}</Text>
					</View>
				</TouchableOpacity>
			))}

		</ScrollView>
	)
}

export default Status

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		paddingHorizontal: 25,
		paddingVertical: 10,
	},
	statusContainer: {
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	profileImage: {
		width: 54,
		height: 54,
		borderRadius: 25,
		marginRight: 15,
		borderWidth: 3,
		borderColor: '#25D366',
		padding: 4,

	},
	viewedStatus: {
		borderColor: '#ccc',
	},
	username: {
		fontSize: 18,
		fontWeight: '700',
		color: '#222'
	},
	lastSeen: {
		fontSize: 15
	},
	myStatusOptions:{
		flex:1,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
});