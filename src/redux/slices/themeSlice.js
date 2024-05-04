import { createSlice } from '@reduxjs/toolkit'

// Начальное значение
const initialState = localStorage.getItem('theme-app-run') || 'light'

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    toggleTheme: (state, action) => {
      localStorage.setItem('theme-app-run', action.payload)

      return (state = action.payload)
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { toggleTheme } = themeSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default themeSlice.reducer
