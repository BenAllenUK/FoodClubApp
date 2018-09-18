import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailAbout extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ABOUT</Text>
        <Text style={styles.body}>{text}</Text>
      </View>
    );
  }
}

RestaurantDetailAbout.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {},
  title: { 
    marginLeft: 20, 
    marginBottom: 10, 
    marginTop: 10, 
    fontSize: 13, 
  },
  body: { 
    marginLeft: 20, 
    marginBottom: 10, 
    marginRight: 10, 
    fontSize: 13, 
    color:"#606060",
    lineHeight: 22
  }
});

export default RestaurantDetailAbout;
