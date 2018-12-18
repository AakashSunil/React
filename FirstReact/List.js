import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class List extends Component {
	
	state = {
		names: [
			{
				id:0,
				name:'A',
			},
			{
				id:1,
				name:'B',
			},
			{
				id:2,
				name:'C',
			},
			{
				id:3,
				name:'D',
			}
		]
	}
	alertItemName = (item) => {
		alert(item.name)
	}
	
	render()
	{
		return(
			<View>
			{
				this.state.names.map((item,index) => (
					<TouchableOpacity
						key = {item.id}
						style = {styles.container}
						onPress = {() => this.alertItemName(item)}>
						<Text style = {styles.text1}>
							{item.name}
						</Text>
						</TouchableOpacity>
				))
			}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	outer: {
		paddingTop:23
	},
	
	container: {
		
		padding: 10,
		marginTop: 3,
		backgroundColor: '#d9f9b1',
		alignItems: 'center',
	},
	text1: {
		color: '#4f603c'
	}
})