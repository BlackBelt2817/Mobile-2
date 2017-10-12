import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';
const { navigate } = this.props.navigation;

export default class homepage extends Component {
    static navigationOptions = {
		title: 'Home'
	};

	render() {
		return (
			<View style={{display: 'flex', flexDirection: 'column'}}>
				<Button
					title='Sign In'
					onPress={() => {
						navigate('SignIn');
					}}
				/>
				<Button
					title='Sign Up'
					onPress={() => {
						navigate('SignUp');
					}}
				/>
			</View>
		);
	}

}