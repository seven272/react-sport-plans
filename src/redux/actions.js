import * as a from './actionTypes.js'

// экшены для создания и списка доптренировок
export const addWorkout = (workout) => {
  return {
    type: a.ADD_WORKOUT,
    payload: workout,
  }
}

export const deleteWorkout = (id) => {
  return {
    type: a.DELETE_WORKOUT,
    payload: id,
  }
}

export const editWorkout = (id) => {
  return {
    type: a.EDIT_WORKOUT,
    payload: id,
  }
}

export const findWorkout = (id) => {
  return {
    type: a.FIND_WORKOUT,
    payload: id,
  }
}

// экшнены для личной страницы юзера
export const addPersona = (objData) => {
  return {
    type: a.ADD_PERSONA,
    payload: objData,
  }
}

export const addPulses = (objData) => {
  return {
    type: a.ADD_PULSES,
    payload: objData,
  }
}

export const addRecords = (objData) => {
  return {
    type: a.ADD_RECORDS,
    payload: objData,
  }
}

// экшены для работы с планом тренировок
export const addWorkoutPlan = (workout) => {
  return {
    type: a.ADD_WORKOUT_PLAN,
    payload: workout,
  }
}

export const deleteWorkoutPlan = (id) => {
  return {
    type: a.DELETE_WORKOUT_PLAN,
    payload: id,
  }
}

export const findWorkoutPlan = (id) => {
  return {
    type: a.FIND_WORKOUT_PLAN,
    payload: id,
  }
}
export const completedWorkoutPlan = (id) => {
  return {
    type: a.COMPLETED_WORKOUT_PLAN,
    payload: id,
  }
}

export const countingProgressPlan = (id) => {
  return {
    type: a.COUNTING_PROGRESS_PLAN,
    payload: id,
  }
}

export const setNumberCurrentWeek = (inx) => {
  return {
    type: a.SET_NUMBER_CURRENT_WEEK,
    payload: inx,
  }
}
// экшены для работы с купленными планами
export const setSelectedPlan = (objPlan) => {
  return {
    type: a.SELECT_PLAN,
    payload: objPlan,
  }
}

// экшены для работы с темой
export const toggleTheme = (nameTheme) => {
  return {
    type: a.TOGGLE_THEME,
    payload: nameTheme,
  }
}
