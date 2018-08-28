import { ActionTypes } from '../../actions/actionTypes'

const initialState = {
    searchResults: [],
    saved: [],
    nearby: [],
    featured: [],
    newlyAdded: [],
    cuisine: []
}

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RATE:
            const ratedRestaurantId = action.restaurantId
            const rating = action.rating
            return {...state, rating}
        case ActionTypes.FAVOURITE:
            const favouritedRestaurantId = action.restaurantId
            const favourited = action.favourite
            return {...state, favourited}
        case ActionTypes.LOAD_RESTAURANTS:
            return saveRestaurantData(state, action)
        case ActionTypes.LOAD_NEARBY_RESTAURANTS: 
            const nearby = action.nearby
            return {...state, nearby: [...state.nearby, nearby]}
        case ActionTypes.LOAD_SAVED_RESTAURANTS: 
            const saved = action.saved
            return {...state, saved: [...state.saved, saved]}
        case ActionTypes.LOAD_FEATURED_RESTAURANTS: 
            const featured = action.featured
            return {...state, featured: [...state.featured, featured]}
        case ActionTypes.LOAD_NEWLY_ADDED_RESTAURANTS: 
            const newlyAdded = action.newlyAdded
            return {...state, newlyAdded: [...state.newlyAdded, newlyAdded]}
        default:
            return state;
    }
};


function saveRestaurantData(state, action) {
    const saved = action.restaurants.saved
    const nearby = action.restaurants.nearby
    const newlyAdded = action.restaurants.nearby
    const featured = action.restaurants.nearby
    const cuisine = action.restaurants.cuisine
    return { ...state, saved, nearby, newlyAdded, featured, cuisine }
}