import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, ScrollView, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

class RestaurantCard extends React.Component {
  render() {
    const { id, name, description, image } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onRestaurantSelect({ id: id });
        }}
        style={styles.container}
      >
        <View style={styles.imageContainer}>
          <Image
            style={{
              flex: 1
            }}
            source={{
              uri: image
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{name.toUpperCase()}</Text>
          <Text style={styles.textDescription}>{description}</Text>
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
    ...iOSUIKit.largeTitleEmphasizedWhiteObject
  },
  textDescription: {
    textAlign: "center",
    ...iOSUIKit.subheadWhiteObject
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantCard);
