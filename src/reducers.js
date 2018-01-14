import {combineReducers} from 'redux'

// Import the action type constants
import {
  CREATE_PUPPY,
  ADOPT_PUPPY,
  UPDATE_PUPPY,
  SET_AVAILABILITY_FILTER
} from './actions'

// Puppies reducer
// Default state is simply an empty array
// (no puppies yet)
function puppies(state = [], action) {
  // Use the same action type constants from actions file
  switch (action.type) {
    case CREATE_PUPPY:
      return [
        ...state,
        action.data
      ]
    case ADOPT_PUPPY:
      return state.map((puppy) => {
        if (puppy.id === action.data) {
          return {
            ...puppy,
            available: false,
          }
        }

        return puppy
      })
    case UPDATE_PUPPY:
      return state.map((puppy) => {
        if (puppy.id === action.data.id) {
          return action.data
        }

        return puppy
      })

    default:
      return state
  }
}

// Separate reducer for the filter which is independent
// from the puppies.
function puppyFilters(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_AVAILABILITY_FILTER:
      return action.data
    default:
      return state
  }
}

// Combine our 2 reducers into one
export const puppiesApp = combineReducers({
  puppies,
  puppyFilters,
})
