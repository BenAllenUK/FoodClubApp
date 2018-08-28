import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import ExploreScreen from "./components/ExploreScreen";
import RestaurantDetailScreen from "./components/RestaurantDetailScreen";
import SettingsScreen from "./components/SettingsScreen";
import NearbyScreen from "./components/NearbyScreen";
import CuisineScreen from "./components/CuisineScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const navigationOptions = {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false
  }
};

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    RestaurantDetail: RestaurantDetailScreen
  },
  navigationOptions
);

const NearbyStack = createStackNavigator(
  {
    Nearby: NearbyScreen,
    Details: RestaurantDetailScreen
  },
  navigationOptions
);

const CuisineStack = createStackNavigator(
  {
    Cuisine: CuisineScreen,
    Details: RestaurantDetailScreen
  },
  navigationOptions
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Details: RestaurantDetailScreen
  },
  navigationOptions
);

const TabNavigator = createBottomTabNavigator(
  {
    Explore: ExploreStack,
    Nearby: NearbyStack,
    Cuisine: CuisineStack,
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

export default TabNavigator;
