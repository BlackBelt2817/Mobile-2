import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import homepage from './homepage';
import signuppage from './signuppage';
import signinpage from './signinpage';
import contentpage from './contentpage';

const NavigationApp = StackNavigator({
	Home: { screen: homepage },
	SignUp: { screen: signuppage },
	SignIn: { screen: signinpage },
	Content: { screen: content }
});

export default class App extends Component {
	render() {
		return (
			<NavigationApp />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
