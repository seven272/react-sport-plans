import { createSlice } from '@reduxjs/toolkit'

import {
  sub3MarathonPlan,
  infoPlan,
} from '../../assets/plans/run/42km/sub3MarathonPlan'

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
  namePlan: infoPlan.title,
  descrPlan: infoPlan.descr,
  // selectedPlans: [],
  plan: loadFromLocalStorage('currentPlan') || [...sub3MarathonPlan],
  currentEditedWorkout: {},
  progress: 0,
  statisticsTypes: {
    run: null,
    bike: null,
    swim: null,
    stretch: null,
    strength: null,
    rest: null,
    other: null,
  },
  statisticsSubtypes: {
    easy: null,
    long: null,
    intervals: null,
    tempo: null,
    progression: null,
    fartlek: null,
    hills: null,
    exercises: null,
    other: null,
  },
  currentWeek: 0,
}
const planSlice = createSlice({
  name: 'plan',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    findWorkoutPlan: (state, action) => {
      let workout = {}
      // в начале перебираем массив c неделями, а дальше уже перебираем массив дней в каждой неделе
      state.plan.forEach((arrWeek) => {
        arrWeek.forEach((elem) => {
          if (elem.id === action.payload) {
            workout = { ...elem }
          }
        })
      })

      return { ...state, currentEditedWorkout: { ...workout } }
    },
    addWorkoutPlan: (state, action) => {
      // в данном редьюсере в начале добавляем доп тренировку в уже найденную главную тренировку
      // затем находим в плане день по ид и заменяем в нем день на отредактируемый на прошлом шаге,
      // и в конце обновляем стейт: новый план и пустой обьект в редактируемую трренировку
      let newWorkout = { ...state.currentEditedWorkout }
      console.log('тренировачный день ' + newWorkout)
      console.log('тренировачный день ' + action.payload)
      newWorkout.optional.push(action.payload)
      // дальше проводим аналогичную операцию выше и заменям в массиве отредактируемый день
      const nextPlan = state.plan.map((arrWeek) => {
        return arrWeek.map((elem) => {
          if (elem.id === newWorkout.id) {
            return newWorkout
          } else {
            return elem
          }
        })
      })
      // return {
      //   ...state,
      //   plan: [...nextPlan],
      //   currentEditedWorkout: {},
      // }
      state.plan = nextPlan
      state.currentEditedWorkout = {}
    },
    completedWorkoutPlan: (state, action) => {
      let dayWorkout = null
      let newStatisticsTypes = { ...state.statisticsTypes }
      let newStatisticsSubtypes = { ...state.statisticsSubtypes }
      console.log(dayWorkout)
      const totalWorkouts = state.plan.length * 7
      // в начале перебираем массив c неделями, а дальше уже перебираем массив дней в каждой неделе, находим нужную тренировку и меняем значение на выполнено
      state.plan.forEach((arrWeek) => {
        arrWeek.forEach((elem) => {
          if (elem.id === action.payload) {
            dayWorkout = { ...elem, isCompleted: !elem.isCompleted }
            console.log(dayWorkout)
          }
        })
      })

      //тут учитывая тип тренировки собирвем в статистику statisticsTypes данные о типах тренирок
      if (dayWorkout && dayWorkout.isCompleted) {
        newStatisticsTypes[dayWorkout.type] += 1
      } else if (dayWorkout && !dayWorkout.isCompleted) {
        newStatisticsTypes[dayWorkout.type] -= 1
      }

      //тут учитывая тип тренировки собирвем в статистику statisticsTypes данные о подтипах тренирок
      if (dayWorkout && dayWorkout.isCompleted) {
        newStatisticsSubtypes[dayWorkout.subtype] += 1
      } else if (dayWorkout && !dayWorkout.isCompleted) {
        newStatisticsSubtypes[dayWorkout.subtype] -= 1
      }

      // дальше проводим аналогичную операцию как описанная выше и заменям в массиве старый день на только что отредактированный
      const nextPlan = state.plan.map((arrWeek) => {
        return arrWeek.map((elem) => {
          if (elem.id === dayWorkout.id) {
            return dayWorkout
          } else {
            return elem
          }
        })
      })
      return {
        ...state,
        plan: [...nextPlan],
        statisticsTypes: { ...newStatisticsTypes },
        statisticsSubtypes: { ...newStatisticsSubtypes },
      }
    },
    countingProgressPlan: (state, action) => {
      //определяем сколько всего тренировачных дней в плане
      const totalWorkoutsInPlan = state.plan.length * 7
      //в этой переменной храним текущий прогресс
      let currentProgress = null
      //а здесь уже считаем если в обьекте дня свойсво isCompleted === true то плюсуем 1 к общему значению выполненных тренировок
      state.plan.forEach((arrWeek) => {
        arrWeek.forEach((elem) => {
          if (elem.isCompleted === true) {
            currentProgress += 1
          }
        })
      })
      //определяем процентное соотношение
      let percent = Math.round(
        (currentProgress * 100) / totalWorkoutsInPlan
      )
      return { ...state, progress: percent }
    },
    setNumberCurrentWeek: (state, action) => {
      return { ...state, currentWeek: action.payload }
    },
    changeActivePlan: (state, action) => {
      console.log(action.payload)
      saveToLocalStorage('currentPlan', action.payload)
      return { ...state, plan: [...action.payload] }
    },
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {
  setNumberCurrentWeek,
  countingProgressPlan,
  completedWorkoutPlan,
  addWorkoutPlan,
  findWorkoutPlan,
  changeActivePlan,
} = planSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default planSlice.reducer
