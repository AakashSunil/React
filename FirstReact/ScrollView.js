import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';

class ScrollViewExample extends Component {
   state = {
      names: [
         {'name': 'Anchor', 'id': 1},
         {'name': 'Boolean', 'id': 2},
         {'name': 'Checkbox', 'id': 3},
         {'name': 'Date', 'id': 4},
         {'name': 'E', 'id': 5},
         {'name': 'FileUpload', 'id': 6},
         {'name': 'G', 'id': 7},
         {'name': 'Hidden', 'id': 8},
         {'name': 'Image', 'id': 9},
         {'name': 'JavaArray', 'id': 10},
         {'name': 'K', 'id': 11},
         {'name': 'LN10', 'id': 12},
         {'name': 'M', 'id': 13},
         {'name': 'N', 'id': 14},
         {'name': 'O', 'id': 15},
         {'name': 'P', 'id': 16},
         {'name': 'Q', 'id': 17},
         {'name': 'R', 'id': 18},
         {'name': 'S', 'id': 19},
         {'name': 'T', 'id': 20},
         {'name': 'U', 'id': 21},
         {'name': 'V', 'id': 22},
         {'name': 'W', 'id': 23},
         {'name': 'X', 'id': 24},
         {'name': 'Y', 'id': 25},
         {'name': 'Z', 'id': 26}

      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
	outer: {
		paddingTop:23
	},
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})