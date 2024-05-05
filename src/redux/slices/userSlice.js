import { createSlice } from '@reduxjs/toolkit'
import avatarIcon from '../../assets/images/avatar1.jpg'

const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(e)
  }
}

const loadFromLocalStorage = (key, defaultValue) => {
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
    avatar: avatarIcon,
    persona: loadFromLocalStorage('personaPlan') || {
      name: 'no name',
      age: '',
      weight: '',
      height: '',
    },
    records: loadFromLocalStorage('recordsPlan') || {
      five: '0 ч. 0 мин. 0 сек.',
      ten: '0 ч. 0 мин. 0 сек.',
      halfmarathon: '0 ч. 0 мин. 0 сек.',
      marathon: '0 ч. 0 мин. 0 сек.',
    },
    pulses: loadFromLocalStorage('pulsesPlan') ||{
      zone1: '89-110',
      zone2: '111-120',
      zone3: '121-150',
      zone4: '151-170',
      zone5: '171-190',
    },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    addPersona: (state, action) => {
      console.log(action.payload)
      saveToLocalStorage('personaPlan', action.payload)
        return {
            ...state,
            persona: { ...action.payload },
          }
    },
    addPulses: (state, action) => {
      saveToLocalStorage('pulsesPlan', action.payload)
        return {
            ...state,
            pulses: { ...action.payload },
          }
    },
    addRecords: (state, action) => {
      saveToLocalStorage('recordsPlan', action.payload)
        return {
            ...state,
            records: { ...action.payload },
          }
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { addPersona, addRecords, addPulses } = userSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default userSlice.reducer