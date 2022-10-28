import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Pressable,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import data from '../data/data';

const Chats = ({ navigation }) => {
	const sliceText = (text) => text.slice(0, 30)
	return (
		<>
			<ScrollView style={styles.container}>
				{data.map(chats => (
					<View
						key={chats.id}
						style={styles.chatContainer}
					>
						<TouchableOpacity onPress={() => console.warn('image clicked')}>
							<Image style={styles.profileImage} source={chats.image} />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('Chat')}
							style={styles.chatTextContainer}
						>
							<View >
								<Text style={styles.username}>{chats.username}</Text>
								<Text style={styles.message}>
									{chats.lastMessage.length > 30 ? `${sliceText(chats.lastMessage)}...` : chats.lastMessage}
								</Text>
							</View>
							<View style={styles.chatRight}>
								<Text style={styles.lastModified}>{chats.lastModified}</Text>
								{chats.unreadMessages !== 0 && (
									<View style={styles.unreadContainer}>
										<Text style={styles.lastModified}>{chats.unreadMessages}</Text>
									</View>
								)}
							</View>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
			<View style={styles.contacts}>
				<TouchableOpacity>
					<Image
						source={require('../assets/icons/new-chat.png')}
						style={styles.contactsImage}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Chats;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	chatContainer: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileImage: {
		width: 50,
		height: 50,
	},
	chatTextContainer: {
		flex: 1,
		marginLeft: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	username: {
		fontSize: 18,
		fontWeight: '700',
		color: '#111'
	},
	message: {
		fontSize: 15,
		maxWidth: '100%'
	},
	lastModified: {
		fontSize: 13,
	},
	unreadMessages: {
		fontSize: 6,

	},
	unreadContainer: {
		backgroundColor: '#25D366',
		paddingHorizontal: 6,
		paddingVertical: 3,
		borderRadius: 10,
	},
	chatRight: {
		alignItems: 'flex-end'
	},
	contacts: {
		position: 'absolute',
		bottom: 30,
		right: 30,
		backgroundColor: '#25D366',
		padding: 15,
		borderRadius: 30
	},
	contactsImage: {
		width: 30,
		height: 30,
	}
});
