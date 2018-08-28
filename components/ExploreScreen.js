import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import restaurantsApi from "../api/restaurantApi";

const mapDispatchToProps = dispatch => {
  return {
    onButtonPress: () => dispatch(restaurantsApi.loadRestaurants())
  };
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const data = [
  {
    id: 1,
    name: "Beadle",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle1",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle2",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle3",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle4",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle5",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle6",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 2,
    name: "Beadle7",
    description: "£-££  ·  BRITISH  ·  3 mins",
    image:
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350"
  }
];

class ExploreScreen extends React.Component {
  _keyExtractor = (item, index) => "foo" + index;

  _renderItem = ({ item }) => (
    <RestaurantCard
      id={item.id}
      name={item.name}
      description={item.description}
      image={item.image}
      onRestaurantSelect={item => {
        this.props.navigation.navigate("RestaurantDetail", item);
      }}
    />
  );

  render() {
    return (
      <View>
        <Text style={styles.appTitle}>THE FOOD CLUB</Text>
        <Text style={styles.pageTitle}>Featured</Text>
        <FlatList
          style={styles.flatList}
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    color: "#8C8C8C",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 60
  },
  pageTitle: {
    color: "#000",
    fontSize: 34,
    marginLeft: 20,
    marginBottom: 20
  },
  flatList: {
    marginTop: 20
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreScreen);
