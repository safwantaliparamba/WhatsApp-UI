import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import _callHistory from '../data/calls'
import audioCall from '../assets/icons/phone-call.png'
import videoCall from '../assets/icons/video-call.png'
import incoming from '../assets/icons/incoming.png'
import outgoing from '../assets/icons/outgoing.png'
import missedCall from '../assets/icons/missed-call.png'
import addCall from '../assets/icons/addCall.png'


const Calls = () => {
    const [callHistory, setCallHistory] = useState(_callHistory)

    const callStatus = (status) => {
        if (status === 'attended') {
            return incoming
        } else if (status === 'missed') {
            return missedCall
        } else if (status === 'outgoing') {
            return outgoing
        }

        return incoming
    }

    return (
        <>
            <ScrollView>
                {callHistory.map((call, index) => (
                    <View
                        key={index}
                        style={styles.statusContainer}
                    >
                        <View>
                            <Image
                                source={call.profileImage}
                                style={styles.profileImage}
                            />
                        </View>
                        <View>
                            <Text style={styles.username}>{call.username}</Text>
                            <View style={styles.timeStamp}>
                                <Image style={styles.timeStampImage} source={callStatus(call.status)} />
                                <Text style={styles.lastSeen}>just now</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.myStatusOptions}>
                            <Image style={styles.callType} source={call.type === 'audio' ? audioCall : videoCall} />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.contacts}>
				<TouchableOpacity>
					<Image
						source={addCall}
						style={styles.contactsImage}
					/>
				</TouchableOpacity>
			</View>
        </>
    );
};

export default Calls;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusContainer: {
        flex: 1,
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
    },
    username: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222'
    },
    lastSeen: {
        fontSize: 15
    },
    myStatusOptions: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    callType: {
        width: 20,
        height: 20
    },
    timeStamp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeStampImage: {
        width: 15,
        height: 15,
        marginRight: 10,
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
