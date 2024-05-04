import * as a from '../actionTypes'
import workouts from '../../assets/data/workouts'


const initialState = {
  listWorkouts: [...workouts],
  editWorkout: {},
}

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_WORKOUT: {
      return {
        ...state,
        listWorkouts: [...state.listWorkouts, action.payload],
      }
    }

    case a.DELETE_WORKOUT: {
      const nextWorkouts = state.listWorkouts.filter((elem) => {
        return elem.id !== action.payload
      })
      return { ...state, listWorkouts: [...nextWorkouts] }
    }

    case a.EDIT_WORKOUT: {
      const nextArray = state.listWorkouts.map((elem) => {
        if (elem.id === action.payload.id) {
          return action.payload
        } else {
          return elem
        }
      })
      return { ...state, listWorkouts: [...nextArray] }
    }

    case a.FIND_WORKOUT: {
      const nextWorkout = state.listWorkouts.find((elem) => {
        return elem.id === action.payload
      })
      return { ...state, editWorkout: { ...nextWorkout } }
    }

    default:
      return state
  }
}

export default workoutReducer
