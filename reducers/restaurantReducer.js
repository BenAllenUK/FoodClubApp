export const ActionTypes = {
  RATE: 'RATE',
  FAVOURITE: 'FAVOURITE'
}

const initialState = {
  rating: 0,
  favourited: false
}


export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.RATE:
          const rating = action.rating
          return [...state, rating]
      case ActionTypes.FAVOURITE:
          const favourited = action.favourite
          return [...state, favourited]
      default:
          return state;
  }
};