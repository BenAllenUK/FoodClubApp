import autobind from "autobind-decorator";
import { ActionTypes } from '../actions/actionTypes'

export default class RestaurantApi {
  @autobind
  static loadRestaurants() {
    return dispatch => {
      return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          return response.json()
        })
        .then(restaurantsData => {
          dispatch({
            type: ActionTypes.LOAD_RESTAURANTS,
            restaurants: restaurantsData
          });
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}



