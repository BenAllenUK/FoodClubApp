import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailActions extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <View>  
        <View style={{flex: 1, flexDirection: 'column', marginVertical: 10, marginHorizontal: 20}}>
          <Button title="BOOK NOW" color= "#000" onPress={() => this._handlePress()}></Button>

          <View style={{flex: 1, flexDirection: 'row', marginVertical: 10}}>
         
            <View style={{width: 150}}>
              <Button title="NAVIGATE TO" color= "#E0E0E0" onPress={() => this._handlePress()}></Button>
            </View>  
         
            <View style={{width: 150, marginLeft: 20 }}>
              <Button title="ORDER UBER" color= "#E0E0E0" onPress={() => this._handlePress()}></Button>
            </View>

          </View>

        </View>
        
        <View style={{height: 2, backgroundColor: "#EFEFEF", marginHorizontal: 20, marginVertical: 5}}></View>
      </View>
    );
  }
}

RestaurantDetailActions.propTypes = {
  id: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {},
  bookButton: {
    marginHorizontal: 20,
    marginVertical: 2,
    backgroundColor: "#000",
    color:"#606060",
  }
});

export default RestaurantDetailActions;
