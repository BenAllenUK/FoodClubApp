import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailMenuSnapshot extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        Menu Snapshot
        {/* Start here */}
      </View>
    );
  }
}

RestaurantDetailMenuSnapshot.propTypes = {
  data: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {}
});

export default RestaurantDetailMenuSnapshot;