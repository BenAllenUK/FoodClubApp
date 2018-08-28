import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default class RestaurantDetailRecommendations extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text>Recommendations</Text>
        {/* Start here */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
