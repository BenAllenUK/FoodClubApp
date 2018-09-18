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
        <Text style={styles.title}>SUMMARY</Text>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
          
          <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.summarybig}>{priceRange}</Text>
              <Text style={styles.summarysmall}>{'PER MAIN\n MEAL'}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.summarybig}>{closingTime}</Text>
              <Text style={styles.summarysmall}>{`CLOSING\nTIME`}</Text>
          </View>        

          <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.summarybig}>{busyness.toUpperCase()}</Text>
              <Text style={styles.summarysmall}>{'BOOKING\nRECOMMENDED'}</Text>
          </View>

        </View>

        <View style={{height: 2, backgroundColor: "#EFEFEF", marginHorizontal: 20, marginVertical: 5}}></View>

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
  container: {},
  title: { 
    marginLeft: 20,
    marginBottom: 2, 
    marginTop: 10, 
    fontSize: 13 
  },
  summarybig: {
    fontSize: 20, 
    textAlign: 'center'
  },
  summarysmall:{
    fontSize: 10, 
    textAlign: 'center',
    color:"#606060"
  },
});

export default RestaurantDetailSummary;
