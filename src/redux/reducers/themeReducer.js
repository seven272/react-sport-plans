import * as a from '../actionTypes'

const initialState = localStorage.getItem('theme-app-run') || 'light'

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.TOGGLE_THEME: {
      localStorage.setItem('theme-app-run', action.payload)

      return (state = action.payload)
    }
    default:
      return state 
  }
}

export default workoutReducer
