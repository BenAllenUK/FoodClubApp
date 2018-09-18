import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, TouchableOpacity } from "react-native";
import { iOSUIKit } from "react-native-typography";
import { connect } from "react-redux";

class RestaurantDetailMenuSnapshot extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MENU SNAPSHOT</Text>
        
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
          <View><Image style={{width:80, height: 70, marginLeft: 20}} source={{uri: data[0].image}}></Image>
          </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.menu1}>{data[0].line1}</Text>
              <Text style={styles.menu2}>{data[0].line2}</Text>
              <Text style={styles.menu3}>{data[0].price}</Text>
            </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
          <View><Image style={{width:80, height: 70, marginLeft: 20}} source={{uri: data[1].image}}></Image>
          </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.menu1}>{data[1].line1}</Text>
              <Text style={styles.menu2}>{data[1].line2}</Text>
              <Text style={styles.menu3}>{data[1].price}</Text>
            </View>
        </View>

        <View style={{height: 2, backgroundColor: "#EFEFEF", marginHorizontal: 20, marginVertical: 5}}></View>

      </View>
    );
  }
}

RestaurantDetailMenuSnapshot.propTypes = {
  data: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  container: {},
  title:  {
    marginHorizontal: 20, 
    marginVertical: 10, 
    fontSize: 13
  },
  body:  {
    marginHorizontal: 10, 
    marginVertical: 10, 
    fontSize: 14
  },
  menu1:  {
    marginHorizontal: 10, 
    marginTop: 7,  
    fontSize: 13, 
    color:"#606060"
  },
  menu2:  {
    marginHorizontal: 10, 
    fontSize: 11, 
    color:"#606060"
  },
  menu3:  {
    marginHorizontal: 10,  
    fontSize: 12, 
    color:"#606060"
  },
});

export default RestaurantDetailMenuSnapshot;
