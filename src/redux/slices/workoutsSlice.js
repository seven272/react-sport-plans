import { createSlice } from '@reduxjs/toolkit'
import workouts from '../../assets/data/workouts'
// Начальное значение
const initialState = {
  listWorkouts: [...workouts],
  editWorkout: {},
}

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    addWorkout: (state, action) => {
      return {
        ...state,
        listWorkouts: [...state.listWorkouts, action.payload],
      }
    },
    deleteWorkout: (state, action) => {
      const nextWorkouts = state.listWorkouts.filter((elem) => {
        return elem.id !== action.payload
      })
      return { ...state, listWorkouts: [...nextWorkouts] }
    },
    editWorkout: (state, action) => {
      const nextArray = state.listWorkouts.map((elem) => {
        if (elem.id === action.payload.id) {
          return action.payload
        } else {
          return elem
        }
      })
      return { ...state, listWorkouts: [...nextArray] }
    },
    findWorkout: (state, action) => {
      const nextWorkout = state.listWorkouts.find((elem) => {
        return elem.id === action.payload
      })
      return { ...state, editWorkout: { ...nextWorkout } }
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { findWorkout, editWorkout, deleteWorkout, addWorkout } =
  workoutsSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default workoutsSlice.reducer
