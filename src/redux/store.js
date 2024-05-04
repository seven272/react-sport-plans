import { configureStore } from '@reduxjs/toolkit'

import selectedPlansSlice from './slices/selectedPlansSlice'
import themeSlice from './slices/themeSlice'
import userSlice from './slices/userSlice'
import planSlice from './slices/planSlice'
import workoutsSlice from './slices/workoutsSlice'

const store = configureStore({
  reducer: {
    plan: planSlice,
    selectedPlans: selectedPlansSlice,
    workouts: workoutsSlice,
    user: userSlice,
    theme: themeSlice,
  },
})

export default store
