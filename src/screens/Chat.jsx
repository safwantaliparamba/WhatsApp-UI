import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import _messages from '../data/message'

const Chat = ({ navigation }) => {
	const scrollViewRef = useRef()
	const [messages, setMessages] = useState(_messages)
	const [messageInput, setMessageInput] = useState('')

	const scrollToEnd = () => {
		scrollViewRef.current.scrollToEnd()
	}

	useEffect(() => {
		scrollToEnd()
	}, [])

	return (
		<>
			<View style={styles.headerContainer}>
				<TouchableOpacity activeOpacity={0.6} style={styles.backButton}
					onPress={() => navigation.navigate('Home')}
				>
					<Image style={styles.arrow} source={require('../assets/icons/left-arrow.png')} />
					<Image style={[styles.image, { borderRadius: 50 / 2 }]} source={require('../assets/images/profile-picture.png')} />
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.6} style={{ flex: 1 }}>
					<Text style={[styles.text, { fontSize: 19 }]}>Hiyasusman</Text>
					<Text style={styles.text}>last seen 10.10 AM</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', alignItems: "center" }}>
					<TouchableOpacity activeOpacity={0.6}>
						<Image style={styles.optionImage} source={require('../assets/icons/call.png')} />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.6}>
						<Image
							style={[styles.optionImage, { marginLeft: 10 }]}
							source={require('../assets/icons/dots.png')}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={styles.scrollable} ref={scrollViewRef}>
				{messages.map((message, index) => (
					<View key={index} style={[styles.message, message.isAuthor ? styles.userMessage : {}]}>
						<Text>{message.message}</Text>
					</View>
				))}
			</ScrollView>
			<View style={styles.inputContainer}>
				<View style={styles.inputLeftContainer}>
					<TouchableOpacity>
						<Image style={styles.emoji} source={require('../assets/icons/emoji-icon.png')} />
					</TouchableOpacity>
					<TextInput
						placeholderTextColor='#ccc'
						style={styles.input}
						placeholder='Message......'
						onChangeText={text => {
							setMessageInput(text)
						}}
						onSubmitEditing={text => {
							setMessages([...messages, {
								message: messageInput,
								isAuthor: true,
							}])
							setMessageInput('')
							scrollToEnd()
						}}
						value={messageInput}
					/>
					<TouchableOpacity>
						<Image style={styles.attach} source={require('../assets/icons/attach.png')} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.payment} source={require('../assets/icons/rupee.png')} />
					</TouchableOpacity>
					<TouchableOpacity>
						<Image style={styles.camera} source={require('../assets/icons/camera.png')} />
					</TouchableOpacity>
				</View>
				<TouchableOpacity activeOpacity={0.8} style={styles.inputRightContainer}>
					<Image style={styles.mic} source={require('../assets/icons/record.png')} />
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Chat;

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		backgroundColor: '#455748',
		paddingHorizontal: 5,
		paddingVertical: 10,
		alignItems: 'center',
	},
	arrow: {
		width: 25,
		height: 25,
		marginRight: 10
	},
	image: {
		width: 50,
		height: 50,
	},
	optionImage: {
		width: 28,
		height: 28,
	},
	backButton: {
		alignItems: 'center',
		flexDirection: 'row',
		marginRight: 20,
	},
	text: {
		color: '#fff'
	},
	scrollable: {
		flex: 1,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 5,
		paddingVertical: 6,
	},
	inputLeftContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: "#455748",
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 30,
	},
	emoji: {
		width: 25,
		height: 25,
	},
	input: {
		flex: 1,
		marginLeft: 6,
		color: '#ccc',
		fontSize: 17,
	},
	attach: {
		width: 25,
		height: 25,
		marginLeft: 8,
	},
	payment: {
		width: 25,
		height: 25,
		marginLeft: 8,
	},
	camera: {
		width: 25,
		height: 25,
		marginLeft: 8,
	},
	inputRightContainer: {
		backgroundColor: '#25D366',
		padding: 10,
		borderRadius: 55 / 2,
		marginLeft: 10,
	},
	mic: {
		width: 35,
		height: 35,
	},
	message: {
		backgroundColor: '#ccc',
		padding: 10,
		margin: 6,
		borderRadius: 15,
		maxWidth: '80%',
		marginLeft: 16,
	},
	userMessage: {
		alignSelf: 'flex-end',
		marginRight: 16
	}
});
