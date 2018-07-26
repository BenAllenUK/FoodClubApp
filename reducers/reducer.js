import { combineReducers } from "redux"
import { restaurantReducer } from "./restaurantReducer"

// This is a reducer which listens to actions and modifies the state
const reducer = combineReducers({
  resturantReducer: restaurantReducer
})

export default reducer;