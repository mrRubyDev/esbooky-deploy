import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function GlobalTitles( props ) {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: '5%',
	},
	title: {
		width: '90%',
		fontSize: 35,
		fontWeight: '500'
	}
})
