import { createStore } from 'redux'
import reducer from '../reducers/reducer'

export default function configureStore() {
  console.log(reducer)
    let store = createStore(
      reducer
    )
  
    return store
  }

// const reducer = (state = initialState, action) => {
//   // A switch is used since if more actions are added in the future, it will be easy
//   // to be able to handle this in the reducer since we just add another 'case'.
//   switch (action.type) {
//     case ADD_TO_COUNTER:
//       return {
//         ...state,
//         counter: state.counter + 1
//       }
//     default:
//       return state
//     }
//   }