import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailOpinion extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        Opinion Empty
        {/* Start here */}
      </View>
    );
  }
}

RestaurantDetailOpinion.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {}
});

export default RestaurantDetailOpinion;
