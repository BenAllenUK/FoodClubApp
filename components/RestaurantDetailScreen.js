import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { iOSUIKit } from "react-native-typography";

import RestaurantDetailSummary from "./widgets/RestaurantDetailSummary";
import RestaurantDetailOpinion from "./widgets/RestaurantDetailOpinion";
import RestaurantDetailActions from "./widgets/RestaurantDetailActions";
import RestaurantDetailMenuSnapshot from "./widgets/RestaurantDetailMenuSnapshot";
import RestaurantDetailRecommendations from "./widgets/RestaurantDetailRecommendations";
import RestaurantDetailAbout from "./widgets/RestaurantDetailAbout";

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

const data = {
  id: 1,
  name: "Beadle",
  description: "£-££  ·  BRITISH  ·  3 mins",
  image:
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=350",
  priceRange: "£10-20",
  closingTime: "23:30",
  busyness: "peak",
  opinion:
    "Nestled away amongst rail arches, the beagle offers great service and good food. It’s a little on the pricey side but you do get what you pay for. Very Intimate non pretentious setting. Mains aren't giant.",
  menuSnapshot: [
    {
      image:
        "https://media.istockphoto.com/photos/hot-homemade-pepperoni-pizza-picture-id521403691?k=6&m=521403691&s=612x612&w=0&h=644DsEXT1-dsizk8_0pYiYtq4aluKcRuxd4t2Q0lp3k=",
      line1: "House pork and fennel sausage pizza",
      line2: "with tomato, kale, robiola, chilli",
      price: "£12.00"
    },
    {
      image: "https://gbc-cdn-public-media.azureedge.net/img17687.768x512.jpg",
      line1: "Grilled sea bass, red coconut curry,",
      line2: "with tomato, kale, robiola, chilli",
      price: "£14.00"
    }
  ],
  recommendation:
    "Nestled away amongst rail arches, the beagle offers great service and good food. It’s a little on the pricey side but you do get what you pay for. Very Intimate non pretentious setting. Mains aren't giant.",
  about:
    "Bar: Open till late\nMonday-Friday: 08.00 — 22.30\nSaturday: 10.00 — 22.30\nSunday: 10.00 — 16.00"
};
import ParallaxScrollView from "react-native-parallax-scroll-view";

class RestaurantDetailScreen extends React.Component {
  render() {
    return (
      <ParallaxScrollView
        contentBackgroundColor="white"
        parallaxHeaderHeight={340}
        renderForeground={() => (
          <View style={styles.header}>
            <View style={styles.imageContainer}>
              <Image
                style={{
                  flex: 1
                }}
                source={{
                  uri: data.image
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>{data.name.toUpperCase()}</Text>
              <Text style={styles.textDescription}>{data.description}</Text>
            </View>
          </View>
        )}
      >
        <View style={{  }}>
          <View style={styles.body}>
            <RestaurantDetailSummary
              priceRange={data.priceRange}
              closingTime={data.closingTime}
              busyness={data.busyness}
            />
            <RestaurantDetailOpinion text={data.opinion} />
            <RestaurantDetailActions id="1" />
            <RestaurantDetailMenuSnapshot data={data.menuSnapshot} />
            <RestaurantDetailRecommendations text={data.recommendation} />
            <RestaurantDetailAbout text={data.about} />
          </View>
        </View>
      </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 340
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
    justifyContent: "flex-end",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  textTitle: {
    textAlign: "left",
    ...iOSUIKit.largeTitleEmphasizedWhiteObject
  },
  textDescription: {
    textAlign: "left",
    ...iOSUIKit.subheadWhiteObject
  },

  // Body

  body: {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetailScreen);
