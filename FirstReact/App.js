import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import List from './List.js';
import Inputs from './input.js';
import ScrollViewExample from './ScrollView.js';
import ImagesExample from './image_example.js'
import First from './First.js';
import Home from './home.js';
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Avatar, Icon } from 'react-native-elements';


/* export default class App extends React.Component {

	state = { myState: 'Hello!!!! Welcome \nThis is a sample for state Component of React Native. Tap this Text' , myState1:''}
	





	updateState = () => this.setState({ myState: "On Tap -> Changed Text" })
	updateShape = () => this.setState({ myState1: "On Tap -> Removed Shapes" })
	render() {
		return (
	
			<View style = {styles.container}>
	  
				
				<Text onPress = {this.updateState} style={textstyles.container}>
					<Text>{this.state.myState}</Text>
				</Text>
				
		
			</View>
			
			
		);
	} 
} */
/* ------------------------------------------------------------------------------------------------------------------ */

/* List View */
/* const App = () => {
	return (
		<List />
	)
}
export default App
	 */
/* ------------------------------------------------------------------------------------------------------------------ */

/* Text Input From User */
/* const App = () => {
   return (
      <Inputs />
   )
}
export default App
 */


/* ------------------------------------------------------------------------------------------------------------------ */

/*Scrolling List*/

/* const App = () => {
   return (
      <ScrollViewExample />
   )
}

export default App */

/* ------------------------------------------------------------------------------------------------------------------ */

/*Images*/
// const App = () => {
//    return (
//       <ImagesExample style = {styles.container}/>
//    )
// }
// export default App




/* ------------------------------------------------------------------------------------------------------------------ */
/*HTTP Requests*/



/* ------------------------------------------------------------------------------------------------------------------ */
/*Navigation between screend*/

// const AppNavigator = createStackNavigator({
// 	FirstScreen: { screen: First },
// 	HomeScreen: { screen: Home }
//   });

//   export default class App extends Component {
// 	render() {
// 	  return (
// 		<AppNavigator />
// 	  );
// 	}
//   }



/* ------------------------------------------------------------------------------------------------------------------ */
/* Tab Based Navigation*/

class HomeScreen extends React.Component {
	
	render() {
	  return (
		<View>
			
			<StatusBar backgroundColor = "#C2185B" translucent={false}/>
			<Header 
			placement="left"
			
			centerComponent={{text: "Home",style:{color: '#fff',fontSize:22}}}
			/>
			<ScrollViewExample />
		</View>
	  );
	}
  }
  
  class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings',
	};
	render() {
	  return (
		<View>
			<StatusBar backgroundColor = "#C2185B" translucent={false}/>
			<Header 
			placement="left"
			centerComponent={{text: "Settings",style:{color: '#fff',fontSize:22}}}
			/>
		  <List />
		</View>
	  );
	}
  }
  
  class ProfileScreen extends React.Component {
	render() {
		
	  return (
		<View>
			<StatusBar backgroundColor = "#C2185B" translucent={false}/>
			<Header 
			placement="left"
			centerComponent={{text: "Profile",style:{color: '#fff',fontSize:22}}}
			/>	
		  <Inputs />
		</View>
	  );
	}
  }

  class BatteryScreen extends React.Component {
	
	render() {
	  return (
		<View>
			<StatusBar backgroundColor = "#C2185B" translucent={false}/>
			<Header 
			placement="left"
			
			centerComponent={{text: "Image",style:{color: '#fff',fontSize:22}}}
			
		  	/>
		  <ImagesExample />
		</View>
	  );
	}
  }

  class CameraScreen extends React.Component {
	
	render() {
	  return (
		<View>
			<StatusBar backgroundColor = "#C2185B" translucent={false}/>
			<Header 
			placement="left"
			centerComponent={{text: "Camera",style:{color: '#fff',fontSize:22}}}
		  	/>
			
			<Text style={textstyles.container}>Camera Interface</Text>
		  
		</View>
	  );
	}
	
  }
  const TabNavigator = createBottomTabNavigator({
	Home: HomeScreen,
	Settings: SettingsScreen,
	Profile: ProfileScreen,
	Battery: BatteryScreen,
	Camera: CameraScreen
  },
  {
	defaultNavigationOptions: ({ navigation }) => ({
			
	  tabBarIcon: ({ focused, horizontal, tintColor }) => {
		const { routeName } = navigation.state;
		let iconName;
		if (routeName === 'Home') {
		  iconName = `ios-information-circle`;
		} else if (routeName === 'Settings') {
		  iconName = `ios-settings`;
		}
		else if (routeName === 'Profile') {
			iconName = `ios-person`;
		}
		else if (routeName === 'Battery') {
			iconName = `ios-battery-full`;
		}
		else if (routeName === 'Camera') {
			iconName = `ios-camera`;
		}

		// You can return any component that you like here! We usually use an
		// icon component from react-native-vector-icons
		return <Ionicons name={iconName} size={horizontal? 20 : 25} color={tintColor} />;
	  },
	}),
	tabBarOptions: {
	  activeTintColor: 'blue',
	  inactiveTintColor: 'gray',
	},
  });
  
  export default createAppContainer(TabNavigator);

/*---------------------------------------------------------------------------------------------------------------------*/
/* Customization of the tab based navigation*/

// export default createBottomTabNavigator(
// 	{
// 	  Home: HomeScreen,
// 	  Settings: SettingsScreen,
// 	},
// 	{
// 	  defaultNavigationOptions: ({ navigation }) => ({
// 		tabBarIcon: ({ focused, horizontal, tintColor }) => {
// 		  const { routeName } = navigation.state;
// 		  let iconName;
// 		  if (routeName === 'Home') {
// 			iconName = `ios-information-circle${focused ? '' : '-outline'}`;
// 		  } else if (routeName === 'Settings') {
// 			iconName = `ios-options${focused ? '' : '-outline'}`;
// 		  }
  
// 		  // You can return any component that you like here! We usually use an
// 		  // icon component from react-native-vector-icons
// 		  return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
// 		},
// 	  }),
// 	  tabBarOptions: {
// 		activeTintColor: 'tomato',
// 		inactiveTintColor: 'gray',
// 	  },
// 	}
//   );

  /*---------------------------------------------------------------------------------------------------------*/

{/*CSS Style Containers*/}
const styles = StyleSheet.create({
  
  outer: {
		marginTop:1
	},
  
  container: 
  {
	flex:1,
	alignItems: 'center',
    justifyContent: 'center',
	
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
  
});

const textstyles = StyleSheet.create({
  container: 
  {
	  /* flex:1,
	  alignItems: 'center',
	  justifyContent: 'center', */
	  color: 'blue',
	  fontWeight: 'bold',
	  textAlign: 'center',
  },
});

const boxstyles = StyleSheet.create({
	
	bluebox: 
	{
		justifyContent: 'center',
		alignItems:'flex-start',
		height:100,
		width:100,
		backgroundColor: 'blue'
	}
  
});

const boxstyles1 = StyleSheet.create({
	
	bluebox: 
	{
		justifyContent: 'center',
		alignItems:'flex-start',
		height:100,
		width:100,
		backgroundColor: 'white'
	}
  
});
/* -------------------------------------------------------------------------------------------------------------------- */