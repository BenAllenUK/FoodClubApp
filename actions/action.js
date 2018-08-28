import ReduxThunk from 'redux-thunk'
import { store } from '../stores/store'
import { ActionTypes } from '../actions/actionTypes'

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

