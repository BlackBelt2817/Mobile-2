import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';
const { navigate } = this.props.navigation;

export default class signuppage extends Component {
	static navigationOptions = {
		title: 'Sign-Up'
	};

	render() {
		return (
			<View>
				<Text>Hey</Text>
			</View>
		);
	}
}