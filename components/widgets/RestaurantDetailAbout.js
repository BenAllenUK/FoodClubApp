import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailAbout extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Text>About Information</Text>
        {/* Start here */}
      </View>
    );
  }
}

RestaurantDetailAbout.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {}
});

export default RestaurantDetailAbout;
