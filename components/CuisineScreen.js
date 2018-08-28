import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

class CuisineScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Cuisine!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

CuisineScreen.propTypes = {};

export default CuisineScreen;
