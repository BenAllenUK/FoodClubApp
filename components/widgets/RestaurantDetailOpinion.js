import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default class RestaurantDetailOpinion extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text>Opinion Empty</Text>
        {/* Start here */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
