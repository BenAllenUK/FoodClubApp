import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer'

export let store = null;

export default function configureStore() {
    store = createStore(
      reducer,
      applyMiddleware(thunk)
    )
  
    return store
  }