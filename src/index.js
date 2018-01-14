import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Import the createStore method from Redux
import {createStore} from 'redux'
// Import our reducer to use when we create the store
import {puppiesApp} from './reducers'
// Import our action creators for when we dispatch
import {
  createPuppy,
  adoptPuppy,
  updatePuppy,
  setAvailabilityFilter,
} from './actions'

// Create the store, passing in the reducer as the
// only argument
let store = createStore(puppiesApp)

// Set up the listener. The subscribe method returns a
// function to unregister the listener so set it equal
// to a variable for later use.
let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState())
})

// Before we start, take a look at the state
console.log('initial state', store.getState())

// Dispatch our actions
store.dispatch(createPuppy({
  name: 'Sean Connery',
  breed: 'Scottish Terrier',
  available: true,
}))

store.dispatch(createPuppy({
  name: 'Priscilla Queen of the Desert',
  breed: 'Australian Sheperd',
  available: true,
}))

store.dispatch(createPuppy({
  name: 'Prince Harry',
  breed: 'Jack Russell Terrier',
  available: true,
}))

store.dispatch(adoptPuppy(3))

store.dispatch(updatePuppy({
  id: 3,
  name: 'Prince Harold',
  breed: 'Jack Russell Terrier',
  available: true,
}))

store.dispatch(setAvailabilityFilter('SHOW_ADOPTED'))

// Unregister/cancel the listener
unsubscribe()

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
