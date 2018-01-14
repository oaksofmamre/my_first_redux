// Set constants for action types
export const CREATE_PUPPY = 'CREATE_PUPPY'
export const ADOPT_PUPPY = 'ADOPT_PUPPY'
export const UPDATE_PUPPY = 'UPDATE_PUPPY'
export const SET_AVAILABILITY_FILTER = 'SET_AVAILABILITY_FILTER'

// Action creators for each action

// Set up an incrementing id for each puppy
let nextPuppyId = 1
export function createPuppy(data) {
  return {
    type: CREATE_PUPPY,
    data: {
      ...data,
      id: nextPuppyId++
    }
  }
}

export function adoptPuppy(id) {
  return {
    type: ADOPT_PUPPY,
    data: id,
  }
}

export function updatePuppy(data) {
  return {
    type: UPDATE_PUPPY,
    data,
  }
}

export function setAvailabilityFilter(data) {
  return {
    type: SET_AVAILABILITY_FILTER,
    data,
  }
}