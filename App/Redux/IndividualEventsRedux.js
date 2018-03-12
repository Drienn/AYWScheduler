import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  individualEventsRequest: ['data'],
  individualEventsSuccess: ['payload'],
  individualEventsFailure: null
})

export const IndividualEventsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  items: {
    '2018-03-11': [
      {name: "Item for 2018-03-11", height: 66},
      {name: "Item for 2018-03-11", height: 50},
      {name: "Item for 2018-03-11", height: 115},
    ]
  },
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

// export const IndividualEventsSelectors = {
//   getData: state => state.data
// }

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INDIVIDUAL_EVENTS_REQUEST]: request,
  [Types.INDIVIDUAL_EVENTS_SUCCESS]: success,
  [Types.INDIVIDUAL_EVENTS_FAILURE]: failure
})
