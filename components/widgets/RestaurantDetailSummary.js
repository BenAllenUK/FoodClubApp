import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailSummary extends React.Component {
  render() {
    const { priceRange, closingTime, busyness } = this.props;
    return (
      <View style={styles.container}>
        Summary Empty
        {/* Start here */}
      </View>
    );
  }
}

RestaurantDetailSummary.propTypes = {
  priceRange: PropTypes.string.isRequired,
  closingTime: PropTypes.string.isRequired,
  busyness: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {}
});

export default RestaurantDetailSummary;
