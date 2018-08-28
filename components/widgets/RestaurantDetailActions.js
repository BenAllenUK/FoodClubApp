import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailActions extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <View style={styles.container}>
        Actions Empty
        {/* Start here */}
      </View>
    );
  }
}

RestaurantDetailActions.propTypes = {
  id: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {}
});

export default RestaurantDetailActions;
