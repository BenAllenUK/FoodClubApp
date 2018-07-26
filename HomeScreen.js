import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { downloadData } from './actions/action'

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <Button
            onPress={() => {console.log("Presed"); this.props.onButtonPress()}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      );
    }
  }
  
  // This function provides a means of sending actions so that data in the Redux store
  // can be modified. In this example, calling this.props.addToCounter() will now dispatch
  // (send) an action so that the reducer can update the Redux state.
  function mapDispatchToProps(dispatch) {
    return {
      onButtonPress: () => dispatch(downloadData())
    }
  }
  
  // This function provides access to data in the Redux state in the React component
  // In this example, the value of this.props.count will now always have the same value
  // As the count value in the Redux state
  function mapStateToProps(state) {
    return {
      rating: state.rating
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)