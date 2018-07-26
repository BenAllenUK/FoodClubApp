import ReduxThunk from 'redux-thunk'
import { store } from '../stores/store'
import { ActionTypes } from '../reducers/restaurantReducer'

export function setRating(ratingNumber) {
  return {
    type: ActionType.RATE,
    rating: ratingNumber
  }
}

export function setFavourited(isFavourite) {
  return {
    type: ActionType.FAVOURITE,
    favourited: isFavourite
  }
}

export function downloadData() {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => { 
        return response.json()
      })
      .then(json => {
        console.log(json)
        dispatch(saveData); 
      })
  }
}

function saveData() {
  return {
    type: ActionTypes.FAVOURITE,
    favourited: false
  }
}