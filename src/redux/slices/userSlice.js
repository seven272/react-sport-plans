import { createSlice } from '@reduxjs/toolkit'
import avatarIcon from '../../assets/images/avatar1.jpg'

// Начальное значение
const initialState = {
    avatar: avatarIcon,
    persona: {
      name: 'Mike Reshetnyak',
      age: 34,
      weight: 89,
      height: 180,
    },
    records: {
      five: '0 ч. 0 мин. 0 сек.',
      ten: '0 ч. 0 мин. 0 сек.',
      halfmarathon: '0 ч. 0 мин. 0 сек.',
      marathon: '0 ч. 0 мин. 0 сек.',
    },
    pulses: {
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
        return {
            ...state,
            persona: { ...action.payload },
          }
    },
    addPulses: (state, action) => {
        return {
            ...state,
            pulses: { ...action.payload },
          }
    },
    addRecords: (state, action) => {
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