import * as a from '../actionTypes'
import {
  sub3MarathonPlan,
  infoPlan,
} from '../../assets/plans/run/42km/sub3MarathonPlan'
const initialState = {
  namePlan: infoPlan.title,
  descrPlan: infoPlan.descr,
  plan: [...sub3MarathonPlan],
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

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    // находим день с тренировкой в которую будем добавлять доп тренировки
    case a.FIND_WORKOUT_PLAN: {
      let workout = null
      // в начале перебираем массив c неделями, а дальше уже перебираем массив дней в каждой неделе
      state.plan.forEach((arrWeek) => {
        arrWeek.forEach((elem) => {
          if (elem.id === action.payload) {
            return (workout = elem)
          }
        })
      })
      return { ...state, currentEditedWorkout: { ...workout } }
    }
    case a.ADD_WORKOUT_PLAN: {
      // в данном редьюсере в начале добавляем доп тренировку в уже найденную главную тренировку
      // затем находим в плане день по ид и заменяем в нем день на отредактируемый на прошлом шаге,
      // и в конце обновляем стейт: новый план и пустой обьект в редактируемую трренировку
      let newWorkout = { ...state.currentEditedWorkout }
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
      return {
        ...state,
        plan: [...nextPlan],
        currentEditedWorkout: {},
      }
    }
    case a.COMPLETED_WORKOUT_PLAN: {
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
      console.log(newStatisticsTypes)

      //тут учитывая тип тренировки собирвем в статистику statisticsTypes данные о подтипах тренирок
      if (dayWorkout && dayWorkout.isCompleted) {
        newStatisticsSubtypes[dayWorkout.subtype] += 1
      } else if (dayWorkout && !dayWorkout.isCompleted) {
        newStatisticsSubtypes[dayWorkout.subtype] -= 1
      }
      console.log(newStatisticsSubtypes)

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
    }
  
    case a.COUNTING_PROGRESS_PLAN: {
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
    }
    case a.SET_NUMBER_CURRENT_WEEK: {
      return { ...state, currentWeek: action.payload }
    }
    default:
      return state
  }
}

export default planReducer
