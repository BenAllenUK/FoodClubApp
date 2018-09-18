import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default class RestaurantDetailRecommendations extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>OUR RECOMMENDATIONS</Text>
        <Text style={styles.body}>{text} </Text>
        <View style={{height: 2, backgroundColor: "#EFEFEF", marginHorizontal: 20, marginVertical: 5}}></View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  title: { 
    marginLeft: 20, 
    marginBottom: 10, 
    marginTop: 10, 
    fontSize: 13 
  },
  body: { 
    marginLeft: 20, 
    marginBottom: 10, 
    marginRight: 10, 
    fontSize: 14, 
    color:"#505050",
    lineHeight: 18
  }
});
