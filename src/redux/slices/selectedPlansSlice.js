import { createSlice } from '@reduxjs/toolkit'

// функция отправки  данных в локальное хранилище браузера
const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(e)
  }
}
// функция получения  данных в локальное хранилище браузера
const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    // получаем данные из Localstorage по ключу
    // сохраняем в переменную
    const saved = localStorage.getItem(key)
    // распарсиваем так как в локалсторадж могут храниться только строки , то обьекты и массивы нужно преобразовывать
    const initial = JSON.parse(saved)
    return initial || defaultValue
  } catch (e) {
    console.error(e)
    return undefined
  }
}

// Начальное значение
const initialState = { 
    selectedPlans: loadFromLocalStorage('allSelectedPlans') || [],
  };
  
const selectedPlansSlice = createSlice({
    name: 'selectedPlans',
    initialState,
    // Редьюсеры в слайсах меняют состояние и ничего не возвращают
    reducers: {
      setSelectedPlan: (state, action) => {
        const newArr = [...state.selectedPlans, action.payload]
        saveToLocalStorage('allSelectedPlans', newArr)
        return {
            ...state,
            selectedPlans: [...state.selectedPlans, action.payload]
          }
      }
    },
  });
  
  // Слайс генерирует действия, которые экспортируются отдельно
  // Действия генерируются автоматически из имен ключей редьюсеров
  export const { setSelectedPlan } = selectedPlansSlice.actions;
  
  // По умолчанию экспортируется редьюсер, сгенерированный слайсом
  export default selectedPlansSlice.reducer;