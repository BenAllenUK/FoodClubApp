import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default class RestaurantDetailOpinion extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.body}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  body: { 
    marginLeft: 20, 
    marginVertical: 10, 
    marginRight: 10, 
    fontSize: 13, 
    color:"#606060",
    lineHeight: 18
  }
});
