import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Provider } from "react-redux";
import ExploreScreen from "./components/ExploreScreen";
import RestaurantDetailScreen from "./components/RestaurantDetailScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

import configureStore from "./stores/store";
const store = configureStore();

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    RestaurantDetail: RestaurantDetailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Details: RestaurantDetailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Explore: ExploreStack,
    Nearby: SettingsStack,
    Cuisine: SettingsStack,
    More: SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Explore") {
          iconName = `ios-search`;
        } else if (routeName === "Nearby") {
          iconName = `ios-compass`;
        } else if (routeName === "Cuisine") {
          iconName = `ios-pizza`;
        } else if (routeName === "More") {
          iconName = `ios-more`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
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
