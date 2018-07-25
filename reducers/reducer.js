const initialState = {
    counter: 0
  }

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
    // A switch is used since if more actions are added in the future, it will be easy
    // to be able to handle this in the reducer since we just add another 'case'.
    switch (action.type) {
      case 0:
        return {
          ...state,
          counter: state.counter + 1
        }
      default:
        return state
    }
}

export default reducer;