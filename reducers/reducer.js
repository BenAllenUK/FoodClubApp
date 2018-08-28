import { combineReducers } from "redux"
import { restaurantReducer } from "./reducers/restaurants"

// This is a reducer which listens to actions and modifies the state
const reducer = combineReducers({
  restaurantReducer: restaurantReducer
})

export default reducer;