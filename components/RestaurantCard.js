import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

class RestaurantCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onRestaurantSelect({ id: this.props.id });
        }}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image
            style={{
              flex: 1
            }}
            source={{
              uri: this.props.image
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{this.props.name.toUpperCase()}</Text>
          <Text style={styles.textDescription}>{this.props.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onRestaurantSelect: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 10
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  textContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    height: "100%"
  },
  textTitle: {
    textAlign: "center",
    fontSize: 30,
    color: "#FFF"
  },
  textDescription: {
    textAlign: "center",
    fontSize: 14,
    color: "#FFF"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantCard);
