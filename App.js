import React from "react";
import { Provider } from "react-redux";

import configureStore from "./stores/store";
const store = configureStore();
import TabNavigator from "./Navigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
