import * as a from '../actionTypes'

const initialState = {
    plans: [] 
}

const selectedPlansReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.SELECT_PLAN: {
      return {
        ...state,
        plans: [...state.plans, action.payload]
      }
    }
    default:
      return state
  }
}

export default selectedPlansReducer
